import App from '@/App';

import DashboardLayout from '@/components/layout/DashBoardLayout';
import About from '@/pages/About';
import AddTour from '@/pages/AddTour';
import Analytics from '@/pages/Analytics';
import Login from '@/pages/auth/Login';
import Registration from '@/pages/auth/Registration';
import Verify from '@/pages/auth/Verify';
import Bookings from '@/pages/user/Bookings';
import {generateRoutes} from '@/utils/generateRoutes';

import {createBrowserRouter} from 'react-router';
import {adminSideBarItems} from './adminSideBarItems';

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
        Component: Bookings,
        children: [
            {
                path: 'bookings',
                Component: Bookings,
            },
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
