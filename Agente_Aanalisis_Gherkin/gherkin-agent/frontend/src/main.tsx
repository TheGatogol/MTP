import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'sonner';

import App from './App';
import './index.css';

// Tema único: identidad visual MTP (azul marino).
document.documentElement.classList.add('dark');

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 1, refetchOnWindowFocus: false}}});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
                <Toaster richColors theme="dark" position="bottom-right" />
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
);
