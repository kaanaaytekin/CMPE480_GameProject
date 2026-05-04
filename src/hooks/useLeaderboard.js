import { useState, useCallback } from 'react';
import { loadLeaderboard } from '../utils/storage';

export function useLeaderboard() {
    const [entries, setEntries] = useState(loadLeaderboard);
    const refresh = useCallback(() => setEntries(loadLeaderboard()), []);
    return { entries, refresh };
}
