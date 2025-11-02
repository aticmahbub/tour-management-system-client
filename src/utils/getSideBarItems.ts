import {role} from '@/constants/role';
import {adminSideBarItems} from '@/routes/adminSideBarItems';
import {userSidebarItems} from '@/routes/userSideBarItems';
import type {TRole} from '@/types';

export const getSideBarItems = (userRole: TRole) => {
    switch (userRole) {
        case role.superAdmin:
            return [...adminSideBarItems];
        case role.admin:
            return [...adminSideBarItems];
        case role.user:
            return [...userSidebarItems];
        default:
            return [];
    }
};
