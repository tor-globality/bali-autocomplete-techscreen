import React from 'react';
import {
    act,
    fireEvent,
    render,
    RenderResult,
    screen,
} from '@testing-library/react';

import { mockFetchResolvedData } from '../../setupTests';
import Autocomplete, { AutocompleteProps, API_ENDPOINT } from './Autocomplete';

const fakeData = [
    { id: '001', firstName: 'Foo', lastName: 'Tester' },
    { id: '002', firstName: 'Bar', lastName: 'Tester' },
    { id: '003', firstName: 'Baz', lastName: 'Tester' },
];

describe('<Autocomplete />', () => {
    let result: RenderResult;
    let input: HTMLInputElement;

    const defaultProps: AutocompleteProps = {
        onChange: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();

        result = render(<Autocomplete {...defaultProps} />);
        input = screen.getByRole('textbox') as HTMLInputElement;
    });

    it('renders the autocomplete without error', () => {
        expect(() => render(<Autocomplete {...defaultProps} />)).not.toThrow();
    });

    it('invokes api call with search term from input value', async () => {
        const spy = jest.spyOn(globalThis, 'fetch');

        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'test' } });
        });

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(`${API_ENDPOINT}?q=test`);
    });

    it('does not call api if search term has fewer than 3 chars', async () => {
        const spy = jest.spyOn(globalThis, 'fetch');

        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'aa' } });
        });

        expect(spy).not.toHaveBeenCalled();

        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'aaa' } });
        });

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(`${API_ENDPOINT}?q=aaa`);
    });

    it('populates a list of results from api call', async () => {
        mockFetchResolvedData(fakeData);

        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'test' } });
        });

        const results = screen.getAllByRole('listitem');

        expect(results.length).toEqual(3);
        expect(results[0].textContent).toEqual('Foo Tester');
        expect(results[1].textContent).toEqual('Bar Tester');
        expect(results[2].textContent).toEqual('Baz Tester');
    });

    it('calls onChange with selected items', async () => {
        mockFetchResolvedData(fakeData);
        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'test' } });
        });

        const item1 = screen.queryByText('Bar Tester');
        act(() => {
            if (item1) {
                fireEvent.click(item1);
            }
        });

        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(defaultProps.onChange).toHaveBeenLastCalledWith([fakeData[1]]);

        mockFetchResolvedData(fakeData);
        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'test' } });
        });

        const item2 = screen.queryByText('Baz Tester');
        act(() => {
            if (item2) {
                fireEvent.click(item2);
            }
        });

        expect(defaultProps.onChange).toHaveBeenLastCalledWith([
            fakeData[1],
            fakeData[2],
        ]);
    });

    it('clears input after an item is selected', async () => {
        mockFetchResolvedData(fakeData);

        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'test' } });
        });

        const item1 = screen.queryByText('Bar Tester');

        act(() => {
            if (item1) {
                fireEvent.click(item1);
            }
        });

        expect(input.value).toEqual('');
    });

    it('filters selected items from the list of results', async () => {
        mockFetchResolvedData(fakeData);
        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'test' } });
        });

        const item1 = screen.queryByText('Bar Tester');

        act(() => {
            if (item1) {
                fireEvent.click(item1);
            }
        });

        mockFetchResolvedData(fakeData);
        await act(async () => {
            input.focus();
            fireEvent.change(input, { target: { value: 'test2' } });
        });

        const results = screen.getAllByRole('listitem');

        expect(results.length).toEqual(2);
        expect(screen.queryByText('Bar Tester')).toBeNull();
    });
});
