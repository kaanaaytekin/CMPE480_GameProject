import { motion } from 'framer-motion';
import { PRIZE_LADDER } from '../../utils/game';
import { MILESTONES } from '../../data/constants';
import { formatMoney } from '../../utils/format';
import s from './PrizeLadder.module.css';

export function PrizeLadder({ currentIndex, totalQuestions }) {
    const items = [...PRIZE_LADDER].reverse(); // show highest at top

    return (
        <aside className={s.ladder}>
            <h3 className={s.title}>Prize Ladder</h3>
            <div className={s.list}>
                {items.map((prize, visIdx) => {
                    const realIndex = PRIZE_LADDER.length - 1 - visIdx;
                    const isCurrent = realIndex === currentIndex;
                    const isPast    = realIndex < currentIndex;
                    const isMilestone = MILESTONES.has(realIndex);

                    return (
                        <motion.div
                            key={realIndex}
                            className={`${s.row}
                                ${isCurrent   ? s.current   : ''}
                                ${isPast      ? s.past      : ''}
                                ${isMilestone && !isCurrent && !isPast ? s.milestone : ''}`}
                            animate={isCurrent ? { x: [0, 4, 0] } : {}}
                            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                        >
                            <span className={s.qnum}>Q{realIndex + 1}</span>
                            <span className={s.amount}>{formatMoney(prize)}</span>
                            <span className={s.unit}>TL</span>
                            <span className={s.indicator}>
                                {isCurrent ? '▶' : isPast ? '✓' : isMilestone ? '⬡' : ''}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </aside>
    );
}
