import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

function main() {
    const rootElement = document.getElementById('root');

    if (!rootElement) return;

    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}

main();
