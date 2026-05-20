import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLifelines } from '../hooks/useLifelines';
import { useTimer } from '../hooks/useTimer';
import { QuestionPanel } from '../components/game/QuestionPanel';
import { AnswerButton } from '../components/game/AnswerButton';
import { FillBlankInput } from '../components/game/FillBlankInput';
import { MatchingBoard } from '../components/game/MatchingBoard';
import { LifelineBar } from '../components/game/LifelineBar';
import { PrizeLadder } from '../components/game/PrizeLadder';
import { TimerBar } from '../components/game/TimerBar';
import { ExpertSelection } from '../components/game/ExpertSelection';
import { PhoneCall } from '../components/game/PhoneCall';
import { AudienceChart } from '../components/game/AudienceChart';
import { formatMoney } from '../utils/format';
import { sound } from '../utils/sound';
import { useTheme } from '../hooks/useTheme';
import { QUESTION_TIMES } from '../data/constants';
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
    const qTypKey = (currentQuestion?.type ?? 'mcq');
    const questionDuration = QUESTION_TIMES[currentQuestion?.difficulty]?.[qTypKey] ?? 30;
    const timer = useTimer({ active: timerActive, questionId: currentQuestion?.id, duration: questionDuration });
    timer.setOnExpire(timeUp);

    const handleLifeline = (key) => {
        if (key === 'fifty')         lifelines.useFiftyFifty();
        else if (key === 'phone')    lifelines.usePhone();
        else if (key === 'audience') lifelines.useAudience();
    };

    const isLocked = answerState !== 'idle';
    const qType = currentQuestion?.type ?? 'mcq';
    const [confirmWalk, setConfirmWalk] = useState(false);
    const [muted, setMuted] = useState(false);
    const toggleMute = () => setMuted(sound.toggleMute());
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={s.screen}>
            {/* Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <span className={s.diamond}>◆</span>
                    <span className={s.brand}>ISO/IEC/IEEE 29119 Millionaire</span>
                </div>
                <div className={s.headerRight}>
                    <button className={s.muteBtn} onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                        {theme === 'dark' ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )}
                    </button>
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

                    {qType === 'fitb' ? (
                        <FillBlankInput
                            answerState={answerState}
                            onSubmit={(text) => selectAnswer(text)}
                            acceptedAnswers={currentQuestion?.acceptedAnswers}
                            lockedValue={typeof selectedIndex === 'string' ? selectedIndex : null}
                        />
                    ) : qType === 'match' ? (
                        <MatchingBoard
                            pairs={currentQuestion?.pairs ?? []}
                            questionId={currentQuestion?.id}
                            answerState={answerState}
                            onSubmit={(data) => selectAnswer(data)}
                        />
                    ) : (
                        <div className={qType === 'tf' ? s.answersTF : s.answers}>
                            {(qType === 'tf' ? [0, 1] : [0, 1, 2, 3]).map(idx => (
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
                                    hideLabel={qType === 'tf'}
                                />
                            ))}
                        </div>
                    )}

                    <LifelineBar
                        used={lifelines.used}
                        onUse={handleLifeline}
                        disabled={isLocked}
                        questionType={qType}
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
