import { useEffect, useState } from 'react';

interface Props {
    placeHolder?: string;
    onQuery: (query: string) => void;
}

export const CustomSearchBar = ({ placeHolder = 'Buscar', onQuery }: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query);
        }, 900);
        return () => {
            clearTimeout(timeOutId);
        };
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
    };

    const handelKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="find__content">
            <input
                className="find__input"
                type="text"
                placeholder={placeHolder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handelKeyDown}
            />
            <button className="find__button" type="button" onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
};
