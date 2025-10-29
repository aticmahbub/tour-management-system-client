import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router';
import {router} from './routes';
import {ThemeProvider} from './providers/theme.provider';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Toaster} from './components/ui/sonner';
// import {Toaster} from 'sonner';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <RouterProvider router={router} />
                <Toaster />
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
