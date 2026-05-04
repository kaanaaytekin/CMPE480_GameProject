import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLifelines } from '../hooks/useLifelines';
import { useTimer } from '../hooks/useTimer';
import { QuestionPanel } from '../components/game/QuestionPanel';
import { AnswerButton } from '../components/game/AnswerButton';
import { LifelineBar } from '../components/game/LifelineBar';
import { PrizeLadder } from '../components/game/PrizeLadder';
import { TimerBar } from '../components/game/TimerBar';
import { ExpertSelection } from '../components/game/ExpertSelection';
import { PhoneCall } from '../components/game/PhoneCall';
import { AudienceChart } from '../components/game/AudienceChart';
import { formatMoney } from '../utils/format';
import { sound } from '../utils/sound';
import s from './GameScreen.module.css';

function getButtonState({ idx, selectedIndex, answerState, correctIndex, hiddenAnswers }) {
    if (hiddenAnswers.has(idx)) return 'hidden';
    if (answerState === 'idle') return 'idle';
    if (answerState === 'locking') {
        return idx === selectedIndex ? 'locking' : 'dim';
    }
    // revealed
    if (idx === correctIndex) return 'correct';
    if (idx === selectedIndex) return 'wrong';
    return 'dim';
}

export function GameScreen({ game }) {
    const {
        currentQuestion, currentIndex, totalQuestions, currentPrize,
        answerState, selectedIndex, hiddenAnswers, setHiddenAnswers,
        feedbackMsg, setFeedbackMsg, selectAnswer, timeUp, walkAway, playerName,
    } = game;

    const lifelines = useLifelines({
        currentQuestion,
        hiddenAnswers,
        setHiddenAnswers,
        setFeedbackMsg,
    });

    const timerActive = answerState === 'idle' && lifelines.modal === null;
    const timer = useTimer({ active: timerActive, questionId: currentQuestion?.id });
    timer.setOnExpire(timeUp);

    const handleLifeline = (key) => {
        if (key === 'fifty')         lifelines.useFiftyFifty();
        else if (key === 'phone')    lifelines.usePhone();
        else if (key === 'audience') lifelines.useAudience();
    };

    const isLocked = answerState !== 'idle';
    const [confirmWalk, setConfirmWalk] = useState(false);
    const [muted, setMuted] = useState(false);
    const toggleMute = () => setMuted(sound.toggleMute());

    return (
        <div className={s.screen}>
            {/* Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <span className={s.diamond}>◆</span>
                    <span className={s.brand}>ISO 29119 Millionaire</span>
                </div>
                <div className={s.headerRight}>
                    <button className={s.muteBtn} onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'}>
                        {muted ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                            </svg>
                        )}
                    </button>
                    <span className={s.player}>{playerName}</span>
                    <div className={s.prizeChip}>
                        <span className={s.prizeLabel}>Prize</span>
                        <span className={s.prizeValue}>{formatMoney(currentPrize)} TL</span>
                    </div>
                </div>
            </header>

            <div className={s.body}>
                {/* Main game area */}
                <main className={s.main}>
                    <QuestionPanel
                        question={currentQuestion}
                        index={currentIndex}
                        total={totalQuestions}
                    />

                    <TimerBar timeLeft={timer.timeLeft} ratio={timer.ratio} />

                    <div className={s.answers}>
                        {[0, 1, 2, 3].map(idx => (
                            <AnswerButton
                                key={idx}
                                index={idx}
                                text={currentQuestion?.options[idx] ?? ''}
                                state={getButtonState({
                                    idx,
                                    selectedIndex,
                                    answerState,
                                    correctIndex: currentQuestion?.answer,
                                    hiddenAnswers,
                                })}
                                onClick={() => selectAnswer(idx)}
                            />
                        ))}
                    </div>

                    <LifelineBar
                        used={lifelines.used}
                        onUse={handleLifeline}
                        disabled={isLocked}
                    />

                    {/* Walk Away */}
                    <AnimatePresence mode="wait">
                        {confirmWalk ? (
                            <motion.div
                                key="confirm"
                                className={s.walkConfirm}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                <span className={s.walkConfirmText}>
                                    Walk away with <strong>{formatMoney(currentPrize > 0 ? currentPrize : 0)} TL</strong>?
                                </span>
                                <button className={s.walkYes} onClick={walkAway}>Yes, walk away</button>
                                <button className={s.walkNo}  onClick={() => setConfirmWalk(false)}>Keep playing</button>
                            </motion.div>
                        ) : (
                            <motion.div key="btn" className={s.walkRow}
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <button
                                    className={s.walkBtn}
                                    onClick={() => setConfirmWalk(true)}
                                    disabled={isLocked}
                                >
                                    Walk Away
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {feedbackMsg && (
                            <motion.p
                                key={feedbackMsg}
                                className={s.feedback}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {feedbackMsg}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </main>

                {/* Prize ladder sidebar */}
                <PrizeLadder currentIndex={currentIndex} totalQuestions={totalQuestions} />
            </div>

            {/* Lifeline modals */}
            <ExpertSelection
                open={lifelines.modal === 'expertSelection'}
                onSelect={lifelines.selectExpert}
                onClose={lifelines.closeModal}
            />
            <PhoneCall
                open={lifelines.modal === 'phoneCall'}
                phoneData={lifelines.phoneData}
                onClose={lifelines.closeModal}
            />
            <AudienceChart
                open={lifelines.modal === 'audienceVote'}
                percentages={lifelines.audienceData?.percentages}
                correctIndex={currentQuestion?.answer}
                onClose={lifelines.closeModal}
            />
        </div>
    );
}
