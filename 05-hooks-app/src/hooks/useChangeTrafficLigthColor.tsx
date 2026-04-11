import { useEffect, useState } from 'react';
import useCountdwon from './useCountdownEffect';

interface Colors {
    red: string;
    yellow: string;
    green: string;
}

export const colors: Colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

export type TrafficLightColor = keyof typeof colors;

const nextColorMap: Record<TrafficLightColor, TrafficLightColor> = {
    red: 'green',
    yellow: 'red',
    green: 'yellow',
};

export const useChangeTrafficLightColor = () => {
    const [light, setLight] = useState<TrafficLightColor>('red');
    const { countdown, resetCountdown } = useCountdwon(5);

    useEffect(() => {
        if (countdown === 0) {
            const nextColor = nextColorMap[light];
            setLight(nextColor);
            resetCountdown();
        }
    }, [countdown, light]);

    return {
        light,
        countdown,
        colorClass: colors[light],
        percentage: (countdown / 5) * 100,
    };
};
