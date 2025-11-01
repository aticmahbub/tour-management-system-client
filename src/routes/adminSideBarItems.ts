import AddTour from '@/pages/AddTour';
import Analytics from '@/pages/Analytics';
import type {ISideBarItems} from '@/types';

export const adminSideBarItems: ISideBarItems[] = [
    {
        title: 'Dashboard',
        items: [
            {
                title: 'Analytics',
                url: '/admin/analytics',
                component: Analytics,
            },
        ],
    },
    {
        title: 'Tour management',
        items: [
            {
                title: 'Add tour',
                url: '/admin/add-tour',
                component: AddTour,
            },
        ],
    },
];
