import { useChangeTrafficLightColor } from '../hooks/useChangeTrafficLigthColor';

export const TrafficLightWithHook = () => {
    const { light, countdown, colorClass, percentage } = useChangeTrafficLightColor();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-blue-100 text-3xl font-bold">Semaforo con useEffect con customHook</h1>
                <h2 className="text-white text-2xl font-thin">Contador: {countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-blue-700 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>

                <div className={`w-32 h-32 ${light === 'red' ? colorClass : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colorClass : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colorClass : 'bg-gray-500'} rounded-full`}></div>
            </div>
        </div>
    );
};
