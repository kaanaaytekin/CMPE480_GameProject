import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Leaderboard } from '../components/game/Leaderboard';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { ANSWER_LABELS } from '../data/constants';
import { formatMoney } from '../utils/format';
import s from './EndScreen.module.css';

export function EndScreen({ result, playerName, onRestart }) {
    const { entries, loading } = useLeaderboard();
    const { won, walkedAway, lostQuestion, selectedIndex, finalPrize } = result;
    const rank = entries.length > 0
        ? entries.findIndex(e => e.name === playerName) + 1 || null
        : null;

    return (
        <div className={`${s.screen} ${won ? s.winBg : s.loseBg}`}>
            <div className={s.orb} />

            <motion.div
                className={s.content}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Result header */}
                <div className={s.resultHeader}>
                    <motion.div
                        className={s.icon}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 18 }}
                    >
                        {won ? '🏆' : walkedAway ? '🚶' : '💡'}
                    </motion.div>
                    <h1 className={`${s.title} ${won ? s.titleWin : s.titleLose}`}>
                        {won ? 'Congratulations!' : walkedAway ? 'You Walked Away' : 'Game Over'}
                    </h1>
                    <p className={s.prizeRow}>
                        {won ? 'Grand prize:' : walkedAway ? 'You leave with:' : 'Safe prize:'}
                        <strong className={won ? s.prizeWin : s.priceLose}>
                            {' '}{formatMoney(finalPrize)} TL
                        </strong>
                    </p>
                    <p className={s.rank}>
                        {loading ? 'Saving score…' : rank ? `${playerName} placed #${rank}` : `${playerName} — score saved!`}
                    </p>
                </div>

                {/* Question review (loss only, not walk away) */}
                {!won && !walkedAway && lostQuestion && (
                    <GlassCard className={s.review} padding="lg">
                        <h3 className={s.reviewTitle}>Question Review</h3>
                        <p className={s.reviewQuestion}>{lostQuestion.question}</p>
                        <div className={s.answers}>
                            {lostQuestion.type === 'fitb' ? (
                                <>
                                    <div className={s.answerRow}>
                                        <span className={s.answerBadge} data-type="wrong">Your answer</span>
                                        <span className={s.answerText}>
                                            {selectedIndex != null && selectedIndex !== ''
                                                ? String(selectedIndex)
                                                : 'No answer entered'}
                                        </span>
                                    </div>
                                    <div className={s.answerRow}>
                                        <span className={s.answerBadge} data-type="correct">Correct</span>
                                        <span className={s.answerText}>
                                            {lostQuestion.acceptedAnswers?.[0] ?? '—'}
                                        </span>
                                    </div>
                                </>
                            ) : lostQuestion.type === 'match' ? (
                                <>
                                    <div className={s.answerRow}>
                                        <span className={s.answerBadge} data-type="correct">Correct pairings</span>
                                    </div>
                                    {(lostQuestion.pairs ?? []).map((pair, i) => (
                                        <div key={i} className={s.answerRow}>
                                            <span className={s.answerText}>
                                                <strong>{pair.left}</strong> → {pair.right}
                                            </span>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <div className={s.answerRow}>
                                        <span className={s.answerBadge} data-type="wrong">Your answer</span>
                                        <span className={s.answerText}>
                                            {selectedIndex !== null && selectedIndex !== undefined
                                                ? lostQuestion.type === 'tf'
                                                    ? lostQuestion.options[selectedIndex]
                                                    : `${ANSWER_LABELS[selectedIndex]}: ${lostQuestion.options[selectedIndex]}`
                                                : 'No answer selected'}
                                        </span>
                                    </div>
                                    <div className={s.answerRow}>
                                        <span className={s.answerBadge} data-type="correct">Correct</span>
                                        <span className={s.answerText}>
                                            {lostQuestion.type === 'tf'
                                                ? lostQuestion.options[lostQuestion.answer]
                                                : `${ANSWER_LABELS[lostQuestion.answer]}: ${lostQuestion.options[lostQuestion.answer]}`}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                        {lostQuestion.explanation && (
                            <div className={s.explanation}>
                                <h4 className={s.expTitle}>Explanation</h4>
                                <p className={s.expBody}>{lostQuestion.explanation}</p>
                            </div>
                        )}
                    </GlassCard>
                )}

                {/* Leaderboard */}
                <GlassCard padding="lg" className={s.lbCard}>
                    <h3 className={s.lbTitle}>Leaderboard</h3>
                    <Leaderboard entries={entries} limit={won ? 10 : 5} highlightName={playerName} />
                </GlassCard>

                <Button variant={won ? 'gold' : 'primary'} size="lg" onClick={onRestart}>
                    Play Again
                </Button>
            </motion.div>
        </div>
    );
}
