import { motion } from 'framer-motion';
import { FiftyFiftyIcon, PhoneIcon, AudienceIcon } from '../ui/Icons';
import s from './LifelineBar.module.css';

const LIFELINES = [
    { key: 'fifty',    Icon: FiftyFiftyIcon, label: '50 : 50' },
    { key: 'phone',    Icon: PhoneIcon,      label: 'Phone a Friend' },
    { key: 'audience', Icon: AudienceIcon,   label: 'Ask the Audience' },
];

export function LifelineBar({ used, onUse, disabled }) {
    return (
        <div className={s.bar}>
            {LIFELINES.map(({ key, Icon, label }) => {
                const isUsed = used[key];
                return (
                    <motion.button
                        key={key}
                        className={`${s.btn} ${isUsed ? s.used : ''}`}
                        onClick={() => !isUsed && !disabled && onUse(key)}
                        disabled={isUsed || disabled}
                        whileHover={!isUsed && !disabled ? { scale: 1.04 } : {}}
                        whileTap={!isUsed && !disabled ? { scale: 0.96 } : {}}
                        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                        title={isUsed ? `${label} (used)` : label}
                    >
                        <span className={s.icon}><Icon size={22} /></span>
                        <span className={s.label}>{label}</span>
                        {isUsed && <span className={s.usedBadge}>Used</span>}
                    </motion.button>
                );
            })}
        </div>
    );
}
