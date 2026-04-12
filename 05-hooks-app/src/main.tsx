import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import HooksApp from './HooksApp';
//import { TrafficLight } from './01-useState/TrafficLigths';
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
//import { PokemonPage } from './03-examples/PokemonPage';
//import { FocuesScreen } from './04-useRef/FocuesScreen';

// import { TasksApp } from './05-useReducer/TaskApp';
import { ScrambleWords } from './05-useReducer/ScrambleWords';

import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <TrafficLight /> */}
        {/* <TrafficLightWithEffect /> */}
        {/*  <TrafficLightWithHook /> */}
        {/* <PokemonPage /> */}
        {/* <FocuesScreen /> */}
        {/*<TasksApp /> */}
        <ScrambleWords />
    </StrictMode>
);
