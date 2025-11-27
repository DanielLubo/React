import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { FirstSetpsApp } from './FirstSetpsApp';
import { MyAwesomeApp } from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <FirstSetpsApp/>
        <MyAwesomeApp firstName='Daniel' lastName='Lubo'/>
    </StrictMode>,
);