import App from '@/App';
import DashboardLayout from '@/components/layout/DashBoardLayout';
import Login from '@/pages/auth/Login';
import Registration from '@/pages/auth/Registration';
import Verify from '@/pages/auth/Verify';
import {generateRoutes} from '@/utils/generateRoutes';
import {createBrowserRouter, Navigate} from 'react-router';
import {adminSideBarItems} from './adminSideBarItems';
import {userSidebarItems} from './userSideBarItems';
import {withAuth} from '@/utils/withAuth';
import About from '@/pages/About';
import Unauthorized from '@/pages/Unauthorized';
import {role} from '@/constants/role';
import type {TRole} from '@/types';

export const router = createBrowserRouter([
    {
        Component: App,
        path: '/',
        children: [
            {
                Component: withAuth(About),
                path: 'about',
            },
        ],
    },
    {
        path: '/admin',
        Component: withAuth(DashboardLayout, role.admin as TRole),
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
    {
        path: '/unauthorized',
        Component: Unauthorized,
    },
]);
