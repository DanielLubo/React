import type { Gif } from '../interfaces/gif.interface';

interface Props {
    gifs: Gif[];
}

export const GifList = ({ gifs }: Props) => {
    return (
        <div className="gifs__content">
            {gifs.map((gif) => (
                <div key={gif.id} className="gifs__card">
                    <img src={gif.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                    <p>
                        {gif.width} x {gif.height} (1.5mb)
                    </p>
                </div>
            ))}
        </div>
    );
};
