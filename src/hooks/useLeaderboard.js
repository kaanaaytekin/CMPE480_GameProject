import { useState, useEffect, useCallback } from 'react';
import { loadLeaderboard } from '../utils/storage';
import { supabase } from '../utils/supabase';

export function useLeaderboard() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    const refresh = useCallback(async () => {
        setLoading(true);
        const data = await loadLeaderboard();
        setEntries(data);
        setLoading(false);
    }, []);

    useEffect(() => {
        refresh();

        // Real-time: her yeni skor geldiğinde otomatik güncelle
        const channel = supabase
            .channel('scores-changes')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'scores' }, () => {
                refresh();
            })
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, [refresh]);

    return { entries, loading, refresh };
}
