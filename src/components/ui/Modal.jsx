import { motion, AnimatePresence } from 'framer-motion';
import s from './Modal.module.css';

const overlay = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit:    { opacity: 0 },
};
const panel = {
    hidden:  { opacity: 0, scale: 0.92, y: 16 },
    visible: { opacity: 1, scale: 1,    y: 0,  transition: { type: 'spring', stiffness: 380, damping: 28 } },
    exit:    { opacity: 0, scale: 0.94, y: 8,  transition: { duration: 0.18 } },
};

export function Modal({ open, onClose, children, width = 520 }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={s.overlay}
                    variants={overlay}
                    initial="hidden" animate="visible" exit="exit"
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={s.panel}
                        style={{ maxWidth: width }}
                        variants={panel}
                        onClick={e => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
