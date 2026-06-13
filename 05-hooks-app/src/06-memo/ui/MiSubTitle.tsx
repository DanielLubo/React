import React from 'react';

interface Props {
    subTittle: string;
    callMyAPI: () => void;
}

const MiSubTitle = React.memo(({ subTittle, callMyAPI }: Props) => {
    console.log('My Subtitle ReRender');
    return (
        <>
            <h3 className="text-2xl">{subTittle}</h3>
            <button
                className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={callMyAPI}
            >
                Llamar Funcion
            </button>
        </>
    );
});

export default MiSubTitle;
