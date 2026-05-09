import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './FillBlankInput.module.css';

export function FillBlankInput({ answerState, onSubmit, acceptedAnswers, lockedValue }) {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (answerState === 'idle') {
            setValue('');
            inputRef.current?.focus();
        }
    }, [answerState]);

    const isRevealed = answerState === 'revealed';
    const isLocked = answerState !== 'idle';

    const normalize = (s) =>
        String(s)
            .toLowerCase()
            .replace(/[-–—]/g, ' ')
            .replace(/[^\w\s]/g, '')
            .trim()
            .replace(/\s+/g, ' ');
    const isCorrect = isRevealed && lockedValue != null &&
        (acceptedAnswers ?? []).some(a => normalize(a) === normalize(lockedValue));

    const handleSubmit = () => {
        if (value.trim() && !isLocked) onSubmit(value.trim());
    };

    const displayValue = isLocked ? (lockedValue ?? '') : value;

    return (
        <div className={s.wrapper}>
            <div className={`${s.inputRow} ${isRevealed ? (isCorrect ? s.correct : s.wrong) : ''}`}>
                <input
                    ref={inputRef}
                    className={s.input}
                    type="text"
                    placeholder="Type your answer and press Enter or Submit…"
                    value={displayValue}
                    onChange={e => !isLocked && setValue(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    disabled={isLocked}
                    autoComplete="off"
                    spellCheck="false"
                />
                <button
                    className={s.submitBtn}
                    onClick={handleSubmit}
                    disabled={isLocked || !value.trim()}
                >
                    Submit
                </button>
            </div>

            <AnimatePresence>
                {isRevealed && !isCorrect && acceptedAnswers?.[0] && (
                    <motion.p
                        className={s.hint}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        Accepted: <strong>{acceptedAnswers[0]}</strong>
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
