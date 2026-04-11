import { useState } from 'react';
import { useEffect } from 'react';

const useCountdown = (seconds: number) => {
    const [countdown, setCountdown] = useState(seconds);

    useEffect(() => {
        if (countdown <= 0) return;

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdown]);

    // Función para volver a empezar el contador
    const resetCountdown = () => setCountdown(seconds);

    return { countdown, resetCountdown };
};

export default useCountdown;
