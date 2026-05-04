import { motion } from 'framer-motion';
import s from './Button.module.css';

export function Button({ children, variant = 'primary', size = 'md', disabled, onClick, className = '', fullWidth }) {
    return (
        <motion.button
            className={`${s.btn} ${s[variant]} ${s[size]} ${fullWidth ? s.full : ''} ${className}`}
            onClick={onClick}
            disabled={disabled}
            whileHover={disabled ? {} : { scale: 1.02 }}
            whileTap={disabled ? {} : { scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
            {children}
        </motion.button>
    );
}
