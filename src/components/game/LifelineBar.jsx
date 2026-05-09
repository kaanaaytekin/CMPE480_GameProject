import { motion } from 'framer-motion';
import { FiftyFiftyIcon, PhoneIcon, AudienceIcon } from '../ui/Icons';
import s from './LifelineBar.module.css';

const LIFELINES = [
    { key: 'fifty',    Icon: FiftyFiftyIcon, label: '50 : 50' },
    { key: 'phone',    Icon: PhoneIcon,      label: 'Phone a Friend' },
    { key: 'audience', Icon: AudienceIcon,   label: 'Ask the Audience' },
];

const MCQ_ONLY = new Set(['fifty', 'audience']);

export function LifelineBar({ used, onUse, disabled, questionType }) {
    const isNonMcq = questionType === 'tf' || questionType === 'fitb' || questionType === 'match';
    return (
        <div className={s.bar}>
            {LIFELINES.map(({ key, Icon, label }) => {
                const isUsed = used[key];
                const notApplicable = isNonMcq && MCQ_ONLY.has(key);
                const isDisabled = isUsed || disabled || notApplicable;
                return (
                    <motion.button
                        key={key}
                        className={`${s.btn} ${isUsed ? s.used : ''} ${notApplicable ? s.na : ''}`}
                        onClick={() => !isDisabled && onUse(key)}
                        disabled={isDisabled}
                        whileHover={!isDisabled ? { scale: 1.04 } : {}}
                        whileTap={!isDisabled ? { scale: 0.96 } : {}}
                        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                        title={notApplicable ? `${label} (not available for this question type)` : isUsed ? `${label} (used)` : label}
                    >
                        <span className={s.icon}><Icon size={22} /></span>
                        <span className={s.label}>{label}</span>
                        {isUsed && <span className={s.usedBadge}>Used</span>}
                        {notApplicable && <span className={s.usedBadge}>N/A</span>}
                    </motion.button>
                );
            })}
        </div>
    );
}
