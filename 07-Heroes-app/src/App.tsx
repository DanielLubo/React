import { useState } from 'react';
import { Button } from './components/ui/button';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>Hola mundo</h1>
                <Button>Hola</Button>
            </div>
        </>
    );
}

export default App;
