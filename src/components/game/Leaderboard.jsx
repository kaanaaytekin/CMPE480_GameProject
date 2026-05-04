import { formatMoney } from '../../utils/format';
import s from './Leaderboard.module.css';

export function Leaderboard({ entries, limit = 10, highlightName }) {
    if (entries.length === 0) {
        return <p className={s.empty}>No scores yet. Be the first!</p>;
    }

    return (
        <div className={s.table}>
            <div className={s.header}>
                <span>#</span>
                <span>Player</span>
                <span>Score</span>
                <span>Result</span>
            </div>
            {entries.slice(0, limit).map((e, i) => (
                <div key={i} className={`${s.row} ${e.name === highlightName ? s.highlight : ''}`}>
                    <span className={s.rank}>{i + 1}</span>
                    <span className={s.name}>{e.name}</span>
                    <span className={s.score}>{formatMoney(e.score)} TL</span>
                    <span className={`${s.result} ${e.won ? s.win : e.walkedAway ? s.left : s.out}`}>
                        {e.won ? 'WIN' : e.walkedAway ? 'LEFT' : 'OUT'}
                    </span>
                </div>
            ))}
        </div>
    );
}
