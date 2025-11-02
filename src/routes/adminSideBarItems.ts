import AddTour from '@/pages/AddTour';
import Analytics from '@/pages/Analytics';
import type {ISidebarItem} from '@/types';

export const adminSideBarItems: ISidebarItem[] = [
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
