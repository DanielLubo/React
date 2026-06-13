import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy_stuff_started');

    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi va');
    }

    console.timeEnd('Heavy_stuf_started');

    return `${iterationNumber} iteraciones realizadas`;
};

const MemoCounter = () => {
    const { counter, increment } = useCounter(40_000);

    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <div className="bg-gradient flex flex-col gap-4">
                <h1 className="text-2xl font-bold">
                    Memo Counter - {myHeavyValue}
                </h1>
                <hr />

                <h4>Counter: {counter}</h4>
                <h4>Counter: {counter}</h4>

                <button
                    className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
                    onClick={increment}
                >
                    Incrementar
                </button>
            </div>
        </>
    );
};

export default MemoCounter;
