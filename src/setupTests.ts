const mockDebounce = jest.fn((fn: () => void) => {
    Object.assign(fn, { cancel: jest.fn() });
    return fn;
});

jest.mock('lodash/debounce', () => mockDebounce);

jest.mock('lodash', () => ({
    ...jest.requireActual('lodash'),
    debounce: mockDebounce,
}));

function setupFetchStub(data: Record<string, unknown>[]) {
    return function fetchStub(_url: string) {
        return new Promise((resolve) => {
            resolve({
                json: () => Promise.resolve(data),
            });
        });
    };
}

const mockFetch = jest.fn().mockImplementation(setupFetchStub([]));
globalThis.fetch = mockFetch;

export function mockFetchResolvedData(fakeData: Record<string, unknown>[]) {
    mockFetch.mockImplementationOnce(setupFetchStub(fakeData));
}
