import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';


import HeroPage from '@/heroes/pages/hero/HeroPage';
import HeroLayouts from '@/heroes/layouts/HeroLayouts';
import AdminLayout from '@/admin/layouts/AdminLayout';

//import SearchPage from '@/heroes/pages/search/SearchPage';
//import AdminPage from '@/admin/pages/AdminPage';

//import { LazyAdminPage } from '@/admin/pages/AdminPage';
import { LazySearchPage } from '@/heroes/pages/search/SearchPage';

//const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroLayouts />,
        children: [
            {
                index: true,
                element: <HeroPage />,
            },
            {
                path: 'heroes/1',
                element: <HeroPage />,
            },
            {
                path: 'search',
                element: <LazySearchPage />,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            },
        ],
    },
]);
