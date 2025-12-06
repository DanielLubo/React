import { useState, useEffect } from "react";

interface Props {
    placeHolder: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeHolder = 'Buscar', onQuery }: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [query, onQuery]);

    const handelSearch = () => {
        onQuery(query);
        setQuery('');
    };
    const keySearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handelSearch();
        };
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeHolder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={keySearch}
            />
            <button onClick={handelSearch}>Buscar</button>
        </div>
    )
}
