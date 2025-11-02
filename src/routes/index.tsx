import App from '@/App';

import DashboardLayout from '@/components/layout/DashBoardLayout';
import About from '@/pages/About';
import Login from '@/pages/auth/Login';
import Registration from '@/pages/auth/Registration';
import Verify from '@/pages/auth/Verify';
import {generateRoutes} from '@/utils/generateRoutes';

import {createBrowserRouter} from 'react-router';
import {adminSideBarItems} from './adminSideBarItems';
import {userSideBarItems} from './userSideBarItems';

export const router = createBrowserRouter([
    {
        Component: App,
        path: '/',
        children: [
            {
                Component: About,
                path: '/about',
            },
        ],
    },
    {
        path: '/admin',
        Component: DashboardLayout,

        children: [...generateRoutes(adminSideBarItems)],
    },
    {
        path: '/user',
        Component: DashboardLayout,
        children: [...generateRoutes(userSideBarItems)],
    },
    {
        path: '/login',
        Component: Login,
    },
    {
        path: '/registration',
        Component: Registration,
    },
    {
        path: '/verify',
        Component: Verify,
    },
]);
