import { motion } from 'framer-motion';
import s from './AnswerButton.module.css';
import { ANSWER_LABELS } from '../../data/constants';

/* state: idle | locking | correct | wrong | dim | hidden */
export function AnswerButton({ index, text, state, onClick }) {
    if (state === 'hidden') return <div className={s.placeholder} />;

    const interactive = state === 'idle';

    return (
        <motion.button
            className={`${s.btn} ${s[state]}`}
            onClick={interactive ? onClick : undefined}
            disabled={!interactive}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, type: 'spring', stiffness: 300, damping: 24 }}
            whileHover={interactive ? { scale: 1.015, transition: { duration: 0.12 } } : {}}
            whileTap={interactive ? { scale: 0.985 } : {}}
            layout
        >
            <span className={s.label}>{ANSWER_LABELS[index]}</span>
            <span className={s.text}>{text}</span>
        </motion.button>
    );
}
