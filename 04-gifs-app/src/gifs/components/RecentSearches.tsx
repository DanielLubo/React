interface Props {
    searches: string[];
    onLabelClick: (search: string) => void;
}

export const RecentSearches = ({ searches, onLabelClick }: Props) => {
    return (
        <div className="searches__content">
            <h2 className="searches__title">Busquedas previas</h2>
            <ul>
                {searches.map((search) => (
                    <li key={search} onClick={() => onLabelClick(search)}>
                        {search}
                    </li>
                ))}
            </ul>
        </div>
    );
};
