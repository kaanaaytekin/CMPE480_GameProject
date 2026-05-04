import { motion } from 'framer-motion';
import { Modal } from '../ui/Modal';
import { PHONE_EXPERTS } from '../../data/constants';
import s from './ExpertSelection.module.css';

function Avatar({ name, color }) {
    const initials = name.slice(0, 2).toUpperCase();
    return (
        <div className={s.avatar} style={{ '--avatar-color': color }}>
            {initials}
        </div>
    );
}

export function ExpertSelection({ open, onSelect, onClose }) {
    return (
        <Modal open={open} onClose={onClose} width={480}>
            <h2 className={s.title}>Phone a Friend</h2>
            <p className={s.sub}>Choose who you want to call for help.</p>
            <div className={s.grid}>
                {PHONE_EXPERTS.map((expert) => (
                    <motion.button
                        key={expert.key}
                        className={s.card}
                        onClick={() => onSelect(expert)}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                    >
                        <Avatar name={expert.name} color={expert.color} />
                        <span className={s.name}>{expert.name}</span>
                        <span className={s.title}>{expert.title}</span>
                        <span className={s.callLabel}>Call</span>
                    </motion.button>
                ))}
            </div>
        </Modal>
    );
}
