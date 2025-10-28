import App from '@/App';
import About from '@/pages/About';
import Login from '@/pages/auth/Login';
import Registration from '@/pages/auth/Registration';

import {createBrowserRouter} from 'react-router';

export const router = createBrowserRouter([
    {
        Component: App,
        path: '/',
        children: [
            {
                Component: About,
                path: '/about',
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/registration',
                Component: Registration,
            },
        ],
    },
]);
