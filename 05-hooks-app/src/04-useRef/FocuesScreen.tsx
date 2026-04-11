import { useRef } from 'react';

export const FocuesScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        console.log(inputRef.current?.value);
        inputRef.current?.select();
    };

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
            <input ref={inputRef} type="text" className="bg-white text-black px-4 py-2 rounded-2xl" autoFocus />
            <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded-2xl cursor-pointer">
                Set Focus
            </button>
        </div>
    );
};
