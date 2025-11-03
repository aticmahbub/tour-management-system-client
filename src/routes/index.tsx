import App from '@/App';
import DashboardLayout from '@/components/layout/DashBoardLayout';
import About from '@/pages/About';
import Login from '@/pages/auth/Login';
import Registration from '@/pages/auth/Registration';
import Verify from '@/pages/auth/Verify';
import {generateRoutes} from '@/utils/generateRoutes';
import {createBrowserRouter, Navigate} from 'react-router';
import {adminSideBarItems} from './adminSideBarItems';
import {userSidebarItems} from './userSideBarItems';

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

        children: [
            {index: true, element: <Navigate to='/admin/analytics' />},
            ...generateRoutes(adminSideBarItems),
        ],
    },
    {
        path: '/user',
        Component: DashboardLayout,
        children: [
            {index: true, element: <Navigate to='/user/bookings' />},
            ...generateRoutes(userSidebarItems),
        ],
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
