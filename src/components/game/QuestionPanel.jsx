import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { DIFFICULTY_LABELS } from '../../data/constants';
import s from './QuestionPanel.module.css';

export function QuestionPanel({ question, index, total }) {
    if (!question) return null;

    const diffVariant = { easy: 'green', medium: 'gold', hard: 'red' }[question.difficulty] ?? 'default';

    return (
        <div className={s.wrap}>
            <div className={s.meta}>
                <Badge variant={diffVariant}>{DIFFICULTY_LABELS[question.difficulty]}</Badge>
                <span className={s.standard}>{question.standard}</span>
                <span className={s.counter}>Question {index + 1} / {total}</span>
            </div>
            <AnimatePresence mode="wait">
                <motion.p
                    key={question.id}
                    className={s.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                    {question.question}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
