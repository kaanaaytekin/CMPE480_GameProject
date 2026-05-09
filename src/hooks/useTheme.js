import { useState, useCallback } from 'react';

function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    localStorage.setItem('theme', t);
}

function resolveInitial() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        const t = resolveInitial();
        applyTheme(t);
        return t;
    });

    const toggleTheme = useCallback(() => {
        setTheme(prev => {
            const next = prev === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            return next;
        });
    }, []);

    return { theme, toggleTheme };
}
