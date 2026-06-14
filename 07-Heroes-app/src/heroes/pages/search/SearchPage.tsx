import CustomJumbotron from '@/components/custom/CustomJumbotron';
import { lazy } from 'react';
import HeroStats from '../hero/components/HeroStats';
import SearchControls from './ui/SearchControls';
import CustomBreadcrums from '@/components/custom/CustomBreadcrums';

const SearchPage = () => {
    return (
        <>
            <CustomJumbotron
                title="Busca tus cosos favoritos"
                description="Puedes buscar a quien mas te interese xd"
            />

            <CustomBreadcrums
                currentPage="Buscar el mejor coso"
                /* breadcrums={[
                    { label: 'Home1', to: '/' },
                    { label: 'Home1', to: '/' },
                    { label: 'Home1', to: '/' },
                ]} */
            />
            {/** Stats Dashboard */}
            <HeroStats />

            {/** Filter and search */}
            <SearchControls />
        </>
    );
};

export const LazySearchPage = lazy(() => import('./SearchPage'));
export default SearchPage;
