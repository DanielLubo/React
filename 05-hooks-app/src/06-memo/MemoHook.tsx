import { useCallback, useState } from 'react';
import MiTittle from './ui/MiTittle';
import MiSubTitle from './ui/MiSubTitle';

const MemoHook = () => {
    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('Mundo');

    const handleMyAPI = useCallback(() => {
        console.log('Llamar a mi API');
    }, []);

    return (
        <div className="bg-gradient fles flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Use Memo</h1>

            <MiTittle tittle={title} />

            <MiSubTitle subTittle={subTitle} callMyAPI={handleMyAPI} />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Tu vieja' + new Date().getTime())}
            >
                Cambiar titulo
            </button>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubTitle('Cuatro semanas')}
            >
                Cambiar subTitulo
            </button>
        </div>
    );
};

export default MemoHook;
