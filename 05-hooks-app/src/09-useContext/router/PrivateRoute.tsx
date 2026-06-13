import { use } from 'react';
import type { JSX } from 'react/jsx-runtime';
import { UserContext } from '../context/UseContext';
import { Navigate } from 'react-router';

interface Props {
    element: JSX.Element;
}

const PrivateRoute = ({ element }: Props) => {
    const { authStatus } = use(UserContext);

    if (authStatus === 'checking') {
        return <div>Loading...</div>;
    }

    if (authStatus === 'authenticated') {
        return element;
    }

    return <Navigate to={'/login'} replace />;
};

export default PrivateRoute;
