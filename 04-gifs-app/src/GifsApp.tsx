import './index.css';
import { CustomHeader } from './components/CustomHeader';
import { CustomSearchBar } from './components/CustomSearches';
import { RecentSearches } from './gifs/components/RecentSearches';
import { GifList } from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
    const { gifs, previousSearches, handleSearch, handleSearchClicked } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubreby comparte el gif perfecto" />

            {/** Search Bar*/}
            <CustomSearchBar placeHolder="Que buscamos hoy?..." onQuery={handleSearch} />

            {/** Recent Searches */}
            <RecentSearches searches={previousSearches} onLabelClick={handleSearchClicked} />

            {/** Gifs */}
            <GifList gifs={gifs} />
        </>
    );
};
