import { useState } from 'react';
import { useEffect } from 'react';

interface Colors {
    red: string;
    yellow: string;
    green: string;
    blue: string;
}

const colors: Colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
    const [light, setlight] = useState<TrafficLightColor>('red');
    const [countDown, setcountDown] = useState(5);

    // Countdown Effect
    useEffect(() => {
        if (countDown === 0) return;

        const intervalId = setInterval(() => {
            setcountDown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [countDown]);

    // Change light color effect
    useEffect(() => {
        if (countDown > 0) return;

        setcountDown(5);

        if (light === 'red') {
            setlight('green');
            return;
        }

        if (light === 'yellow') {
            setlight('red');
            return;
        }

        if (light === 'green') {
            setlight('yellow');
            return;
        }
    }, [countDown, light]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-blue-100 text-3xl font-bold">Semaforo con useEffect</h1>
                <h2 className="text-white text-2xl font-thin">Contador: {countDown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-blue-700 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${(countDown / 5) * 100}%` }}
                    ></div>
                </div>

                <div className={`w-32 h-32 ${light === 'red' ? colors.red : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors.yellow : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors.green : 'bg-gray-500'} rounded-full`}></div>
            </div>
        </div>
    );
};
