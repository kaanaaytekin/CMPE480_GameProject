import { useState, useEffect, useRef } from 'react';
import { sound } from '../utils/sound';

export const QUESTION_TIME = 20; // seconds — change here to adjust globally

export function useTimer({ active, questionId }) {
    const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
    const onExpireRef = useRef(null);

    // Reset timer on new question
    useEffect(() => {
        setTimeLeft(QUESTION_TIME);
    }, [questionId]);

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
    }, [active, questionId]); // restart interval only when question changes or active toggles

    // Tick sound for last 5 seconds
    useEffect(() => {
        if (active && timeLeft > 0 && timeLeft <= 5) {
            sound.tick();
        }
    }, [timeLeft, active]);

    return {
        timeLeft,
        ratio: timeLeft / QUESTION_TIME,
        setOnExpire: (fn) => { onExpireRef.current = fn; },
    };
}
