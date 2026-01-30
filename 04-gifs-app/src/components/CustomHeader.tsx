interface Props {
    title: string;
    description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
    return (
        <div className="header__content">
            <h1 className="header__title">{title}</h1>
            {description && <p className="header__description">{description}</p>}
        </div>
    );
};
