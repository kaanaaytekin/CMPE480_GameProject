import { LEADERBOARD_KEY, PLAYER_NAME_KEY, LEADERBOARD_SIZE } from '../data/constants';

export function loadPlayerName() {
    try { return localStorage.getItem(PLAYER_NAME_KEY) ?? ''; }
    catch { return ''; }
}

export function savePlayerName(name) {
    try { localStorage.setItem(PLAYER_NAME_KEY, name); }
    catch { /* ignore */ }
}

export function loadLeaderboard() {
    try {
        const parsed = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) ?? '[]');
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(e => typeof e.name === 'string' && Number.isFinite(e.score))
            .sort((a, b) => b.score - a.score || a.date - b.date);
    } catch { return []; }
}

export function saveScore(name, score, won, walkedAway = false) {
    const entry = { name: name || 'Player', score, won, walkedAway, date: Date.now() };
    const sorted = [...loadLeaderboard(), entry]
        .sort((a, b) => b.score - a.score || a.date - b.date);
    const rank = sorted.findIndex(e => e.date === entry.date && e.name === entry.name) + 1;
    try {
        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(sorted.slice(0, LEADERBOARD_SIZE)));
    } catch { /* ignore */ }
    return rank;
}
