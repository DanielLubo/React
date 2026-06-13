import React from 'react';

interface Props {
    tittle: string;
}
const MiTittle = React.memo(({ tittle }: Props) => {
    console.log('My Tittle re render');
    return <h1 className="text-3xl">{tittle}</h1>;
});

export default MiTittle;
