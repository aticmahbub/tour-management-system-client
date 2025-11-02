import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router';
import {router} from './routes';
import {ThemeProvider} from './providers/theme.provider';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';
import {Toaster} from './components/ui/sonner';
// import {SidebarProvider} from './components/ui/sidebar';
// import {Toaster} from 'sonner';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
                <RouterProvider router={router} />
                <Toaster richColors />
            </ThemeProvider>
        </ReduxProvider>
    </React.StrictMode>,
);
