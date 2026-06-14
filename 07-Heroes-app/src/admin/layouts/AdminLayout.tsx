import { Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <div className="bg-blue-600">
            <Outlet />
        </div>
    );
};

export default AdminLayout;
