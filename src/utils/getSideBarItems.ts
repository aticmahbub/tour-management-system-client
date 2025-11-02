import {role} from '@/constants/role';
import {adminSideBarItems} from '@/routes/adminSideBarItems';
import {userSideBarItems} from '@/routes/userSideBarItems';
import type {TRole} from '@/types';

export const getSideBarItems = (userRole: TRole) => {
    switch (userRole) {
        case role.superAdmin:
            return [...adminSideBarItems, ...userSideBarItems];
        case role.admin:
        case role.user:
            return [...userSideBarItems];

        default:
            break;
    }
};
