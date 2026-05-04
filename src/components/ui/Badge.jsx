import s from './Badge.module.css';

export function Badge({ children, variant = 'default' }) {
    return <span className={`${s.badge} ${s[variant]}`}>{children}</span>;
}
