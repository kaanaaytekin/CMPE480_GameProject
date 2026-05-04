import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from '../ui/Modal';
import { ANSWER_LABELS } from '../../data/constants';
import s from './AudienceChart.module.css';

export function AudienceChart({ open, percentages, correctIndex, onClose }) {
    const [displayed, setDisplayed] = useState([0, 0, 0, 0]);

    useEffect(() => {
        if (!open || !percentages) { setDisplayed([0, 0, 0, 0]); return; }
        const start = performance.now();
        const duration = 1000;
        const raf = requestAnimationFrame(function tick(now) {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setDisplayed(percentages.map(p => Math.round(p * ease)));
            if (t < 1) requestAnimationFrame(tick);
            else setDisplayed(percentages);
        });
        return () => cancelAnimationFrame(raf);
    }, [open, percentages]);

    useEffect(() => {
        if (!open) return;
        const id = setTimeout(onClose, 4200);
        return () => clearTimeout(id);
    }, [open, onClose]);

    return (
        <Modal open={open} onClose={onClose} width={460}>
            <h2 className={s.title}>Ask the Audience</h2>
            <div className={s.chart}>
                {ANSWER_LABELS.map((label, i) => (
                    <div key={i} className={s.row}>
                        <span className={`${s.label} ${i === correctIndex ? s.correct : ''}`}>{label}</span>
                        <div className={s.track}>
                            <motion.div
                                className={`${s.bar} ${i === correctIndex ? s.correctBar : ''}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${percentages?.[i] ?? 0}%` }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                            />
                        </div>
                        <span className={`${s.pct} ${i === correctIndex ? s.correct : ''}`}>
                            {displayed[i]}%
                        </span>
                    </div>
                ))}
            </div>
            <p className={s.hint}>Panel closes automatically in a few seconds…</p>
        </Modal>
    );
}
