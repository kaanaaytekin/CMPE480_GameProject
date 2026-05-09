import { useState, useEffect, useRef } from 'react';
import { sound } from '../utils/sound';

export function useTimer({ active, questionId, duration = 20 }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const onExpireRef = useRef(null);

    // Reset timer when question or duration changes
    useEffect(() => {
        setTimeLeft(duration);
    }, [questionId, duration]);

    // Tick
    useEffect(() => {
        if (!active) return;
        if (timeLeft <= 0) return;

        const id = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) {
                    onExpireRef.current?.();
                    return 0;
                }
                return t - 1;
            });
        }, 1000);

        return () => clearInterval(id);
    }, [active, questionId]);

    // Tick sound for last 5 seconds
    useEffect(() => {
        if (active && timeLeft > 0 && timeLeft <= 5) {
            sound.tick();
        }
    }, [timeLeft, active]);

    return {
        timeLeft,
        ratio: timeLeft / duration,
        setOnExpire: (fn) => { onExpireRef.current = fn; },
    };
}
