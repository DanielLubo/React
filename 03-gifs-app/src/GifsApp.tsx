import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifsList } from "./gifs/components/GifsList"
import { useState } from "react"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from './gifs/interfaces/gif.interface';


export const GifsApp = () => {

    const [gifs, setgifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        const currentSearches = previousTerms.slice(0, 6);
        currentSearches.unshift(query);

        setPreviousTerms(currentSearches);

        const gifs = await getGifsByQuery(query);

        setgifs(gifs);
    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y Comparte el Gif perfecto" />

            <SearchBar
                placeHolder="Buscar lo que quieras"
                onQuery={handleSearch}
            />

            <PreviousSearches
                searches={['German Cat', 'El pepe']}
                onLabelClicked={handleTermClicked}
            />

            <GifsList gifs={gifs} />

        </>
    )
}
