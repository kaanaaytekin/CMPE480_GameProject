import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../ui/Modal';
import s from './PhoneCall.module.css';

export function PhoneCall({ open, phoneData, onClose }) {
    useEffect(() => {
        if (!open) return;
        const id = setTimeout(onClose, 4000);
        return () => clearTimeout(id);
    }, [open, onClose]);

    if (!phoneData) return null;
    const { expert, suggestionLabel, confident } = phoneData;

    return (
        <Modal open={open} onClose={onClose} width={420}>
            <div className={s.wrap}>
                <motion.div
                    className={s.avatar}
                    style={{ '--c': expert.color }}
                    animate={{ rotate: [0, 6, -6, 6, 0] }}
                    transition={{ repeat: 2, duration: 0.4, delay: 0.2 }}
                >
                    {expert.name.slice(0, 2).toUpperCase()}
                </motion.div>
                <h3 className={s.name}>{expert.name} says:</h3>
                <motion.p
                    className={s.suggestion}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                >
                    I think the answer is <strong>{suggestionLabel}</strong>.
                </motion.p>
                <motion.p
                    className={s.confidence}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.4 }}
                >
                    {confident ? "I'm quite confident about this." : "But I'm not completely sure."}
                </motion.p>
            </div>
        </Modal>
    );
}
