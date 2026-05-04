import s from './GlassCard.module.css';

export function GlassCard({ children, className = '', accent, padding = 'md' }) {
    return (
        <div className={`${s.card} ${s[`pad-${padding}`]} ${accent ? s[`accent-${accent}`] : ''} ${className}`}>
            {children}
        </div>
    );
}
