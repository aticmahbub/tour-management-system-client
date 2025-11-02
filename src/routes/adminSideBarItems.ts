import AddTour from '@/pages/admin/AddTour';
import AddTourType from '@/pages/admin/AddTourType';
import Analytics from '@/pages/admin/Analytics';
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
        title: 'Tour Management',
        items: [
            {
                title: 'Add Tour Type',
                url: '/admin/add-tour-type',
                component: AddTourType,
            },
            {
                title: 'Add Tour',
                url: '/admin/add-tour',
                component: AddTourType,
            },
            {
                title: 'Habi Jabi',
                url: '/admin/habijabi',
                component: AddTour,
            },
        ],
    },
];
