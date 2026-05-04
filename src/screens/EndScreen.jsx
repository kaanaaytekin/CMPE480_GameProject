import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Leaderboard } from '../components/game/Leaderboard';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { ANSWER_LABELS } from '../data/constants';
import { formatMoney } from '../utils/format';
import s from './EndScreen.module.css';

export function EndScreen({ result, playerName, onRestart }) {
    const { entries } = useLeaderboard();
    const { won, walkedAway, lostQuestion, selectedIndex, finalPrize, rank } = result;

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
                    <p className={s.rank}>{playerName} placed #{rank}</p>
                </div>

                {/* Question review (loss only, not walk away) */}
                {!won && !walkedAway && lostQuestion && (
                    <GlassCard className={s.review} padding="lg">
                        <h3 className={s.reviewTitle}>Question Review</h3>
                        <p className={s.reviewQuestion}>{lostQuestion.question}</p>
                        <div className={s.answers}>
                            <div className={s.answerRow}>
                                <span className={s.answerBadge} data-type="wrong">Your answer</span>
                                <span className={s.answerText}>
                                    {selectedIndex !== null
                                        ? `${ANSWER_LABELS[selectedIndex]}: ${lostQuestion.options[selectedIndex]}`
                                        : 'No answer selected'}
                                </span>
                            </div>
                            <div className={s.answerRow}>
                                <span className={s.answerBadge} data-type="correct">Correct</span>
                                <span className={s.answerText}>
                                    {ANSWER_LABELS[lostQuestion.answer]}: {lostQuestion.options[lostQuestion.answer]}
                                </span>
                            </div>
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
