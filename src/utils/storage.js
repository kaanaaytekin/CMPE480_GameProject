import { PLAYER_NAME_KEY } from '../data/constants';
import { supabase } from './supabase';

export function loadPlayerName() {
    try { return localStorage.getItem(PLAYER_NAME_KEY) ?? ''; }
    catch { return ''; }
}

export function savePlayerName(name) {
    try { localStorage.setItem(PLAYER_NAME_KEY, name); }
    catch { /* ignore */ }
}

export async function loadLeaderboard() {
    const { data, error } = await supabase
        .from('scores')
        .select('name, score, won, walked_away, created_at')
        .order('score', { ascending: false })
        .order('created_at', { ascending: true });
    if (error) { console.error('Leaderboard fetch error:', error); return []; }
    return (data ?? []).map(r => ({
        name: r.name,
        score: r.score,
        won: r.won,
        walkedAway: r.walked_away,
        date: new Date(r.created_at).getTime(),
    }));
}

export async function saveScore(name, score, won, walkedAway = false) {
    const { error } = await supabase
        .from('scores')
        .insert({ name: name || 'Player', score, won, walked_away: walkedAway });
    if (error) console.error('Score save error:', error);
}
