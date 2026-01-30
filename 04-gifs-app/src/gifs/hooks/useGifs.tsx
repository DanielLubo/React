import { useRef, useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGiftsByQuery } from '../actions/get-gifs-by-query.action';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleSearchClicked = async (search: string) => {
        if (gifsCache.current[search]) {
            setGifs(gifsCache.current[search]);
            return;
        }

        const gifs: Gif[] = await getGiftsByQuery(search);
        setGifs(gifs);
    };

    const handleSearch = async (query: string) => {
        const queryFormated = query.toLowerCase().trim();

        if (queryFormated === '') return;

        if (previousSearches.includes(queryFormated)) return;

        setPreviousSearches([queryFormated, ...previousSearches].slice(0, 8));

        const gifs: Gif[] = await getGiftsByQuery(query);

        setGifs(gifs);

        gifsCache.current[query] = gifs;
    };

    return {
        //Properties
        gifs,
        previousSearches,

        //Methods
        handleSearchClicked,
        handleSearch,
    };
};
