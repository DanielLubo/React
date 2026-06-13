import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
//import HooksApp from './HooksApp';
//import { TrafficLight } from './01-useState/TrafficLigths';
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
//import { PokemonPage } from './03-examples/PokemonPage';
//import { FocuesScreen } from './04-useRef/FocuesScreen';

// import { TasksApp } from './05-useReducer/TaskApp';
//import { ScrambleWords } from './05-useReducer/ScrambleWords';
//import MemoHook from './06-memo/MemoHook';
//import MemoCounter from './06-memo/MemoCounter';

import './index.css';
//import ClientInformation from './08-useSuspense/ClientInformation';
//import { getUserAction } from './08-useSuspense/api/get-user-action';
import ProfesionalApp from './09-useContext/ProfesionalApp';
//import { InstagromApp } from './07-optimistic/InstagromApp';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster/>
        {/* <TrafficLight /> */}
        {/* <TrafficLightWithEffect /> */}
        {/*  <TrafficLightWithHook /> */}
        {/* <PokemonPage /> */}
        {/* <FocuesScreen /> */}
        {/*<TasksApp /> */}
        {/* <ScrambleWords />*/}
        {/* <MemoHook />*/}
        {/*<MemoCounter />*/}
        {/*<InstagromApp />*/}

        {/*
        <Suspense fallback={
            <div className='bg-gradient flex flex-col'>
                <h1 className='text-white text-4xl'>Cargando</h1>
            </div>
        }>
            <ClientInformation getUser={getUserAction(1)}/>
        </Suspense>
        */}

        <ProfesionalApp/>
    </StrictMode>
);
