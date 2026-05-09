import { motion } from 'framer-motion';
import s from './TimerBar.module.css';

export function TimerBar({ timeLeft, ratio }) {
    const urgent = ratio <= 0.25;
    const warning = ratio <= 0.5;

    return (
        <div className={s.wrap}>
            <div className={s.track}>
                <motion.div
                    className={`${s.fill} ${urgent ? s.urgent : warning ? s.warning : ''}`}
                    style={{ width: `${ratio * 100}%` }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    animate={urgent ? { opacity: [1, 0.6, 1] } : { opacity: 1 }}
                />
            </div>
            <span className={`${s.count} ${urgent ? s.urgentText : warning ? s.warningText : ''}`}>
                {timeLeft}s
            </span>
        </div>
    );
}
