import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {
    
    const { counter, handleAdd, handleSubtrack, handleReset } = useCounter();

    return (
        <>
            <div>
                <h1>Hola mundo</h1>
                <h1>counter: ${counter}</h1>

                <div>
                    <button onClick={handleAdd}>+1</button>
                    <button onClick={handleSubtrack}>-1</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    );
};
