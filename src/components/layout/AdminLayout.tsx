import {Outlet} from 'react-router';

function AdminLayout() {
    return (
        <div>
            Admin
            <Outlet />
        </div>
    );
}

export default AdminLayout;
