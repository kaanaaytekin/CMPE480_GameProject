import { useState, useCallback, useRef } from 'react';
import { buildQuestionSet, getSafePrize, PRIZE_LADDER } from '../utils/game';
import { ANSWER_LABELS } from '../data/constants';
import { loadPlayerName, savePlayerName, saveScore } from '../utils/storage';
import { formatMoney } from '../utils/format';
import { sound } from '../utils/sound';

export function useGame() {
    const [playerName, setPlayerNameState] = useState(loadPlayerName);
    const [screen, setScreen] = useState('welcome');
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answerState, setAnswerState] = useState('idle'); // idle | locking | revealed
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hiddenAnswers, setHiddenAnswers] = useState(new Set());
    const [feedbackMsg, setFeedbackMsg] = useState('');
    const [result, setResult] = useState(null);

    const timers = useRef([]);
    const after = (fn, ms) => { timers.current.push(setTimeout(fn, ms)); };
    const clearAll = () => { timers.current.forEach(clearTimeout); timers.current = []; };

    const setPlayerName = useCallback((name) => {
        setPlayerNameState(name);
        savePlayerName(name);
    }, []);

    const startGame = useCallback((name) => {
        clearAll();
        const qs = buildQuestionSet();
        setPlayerName(name);
        setQuestions(qs);
        setCurrentIndex(0);
        setAnswerState('idle');
        setSelectedIndex(null);
        setHiddenAnswers(new Set());
        setFeedbackMsg('');
        setResult(null);
        setScreen('game');
    }, [setPlayerName]);

    const selectAnswer = useCallback((index, currentQuestion, cIndex, name) => {
        if (answerState !== 'idle') return;

        setSelectedIndex(index);
        setAnswerState('locking');
        setFeedbackMsg('Locking in your answer...');
        sound.lock();

        after(() => {
            setAnswerState('revealed');
            const correctIndex = currentQuestion.answer;

            if (index !== correctIndex) {
                sound.wrong();
                setFeedbackMsg(
                    `Incorrect. The correct answer was ${ANSWER_LABELS[correctIndex]}.`
                );
                after(() => {
                    const finalPrize = getSafePrize(cIndex);
                    const rank = saveScore(name, finalPrize, false);
                    setResult({ won: false, lostQuestion: currentQuestion, selectedIndex: index, finalPrize, rank });
                    setScreen('end');
                }, 2200);
            } else {
                const prize = PRIZE_LADDER[cIndex];
                const isLast = cIndex === questions.length - 1;
                if (isLast) {
                    sound.win();
                    setFeedbackMsg(`Correct! The grand prize is yours: ${formatMoney(prize)} TL!`);
                    after(() => {
                        const rank = saveScore(name, prize, true);
                        setResult({ won: true, finalPrize: prize, rank });
                        setScreen('end');
                    }, 1800);
                } else {
                    sound.correct();
                    setFeedbackMsg(`Correct! You won ${formatMoney(prize)} TL.`);
                    after(() => {
                        setCurrentIndex(i => i + 1);
                        setAnswerState('idle');
                        setSelectedIndex(null);
                        setHiddenAnswers(new Set());
                        setFeedbackMsg('');
                    }, 1600);
                }
            }
        }, 750);
    }, [answerState, questions.length]);

    const timeUp = useCallback((currentQuestion, cIndex, name) => {
        if (answerState !== 'idle') return;
        sound.timeUp();
        setAnswerState('revealed');
        setSelectedIndex(null);
        setFeedbackMsg("Time's up! Here is the correct answer.");
        after(() => {
            const finalPrize = getSafePrize(cIndex);
            const rank = saveScore(name, finalPrize, false);
            setResult({ won: false, lostQuestion: currentQuestion, selectedIndex: null, finalPrize, rank });
            setScreen('end');
        }, 2200);
    }, [answerState]);

    const walkAway = useCallback((cIndex, name) => {
        clearAll();
        sound.walkAway();
        const finalPrize = getSafePrize(cIndex);
        const rank = saveScore(name, finalPrize, false, true);
        setResult({ won: false, walkedAway: true, finalPrize, rank });
        setScreen('end');
    }, []);

    const restart = useCallback(() => {
        clearAll();
        setScreen('welcome');
        setResult(null);
        setQuestions([]);
    }, []);

    const currentQuestion = questions[currentIndex] ?? null;
    const currentPrize    = PRIZE_LADDER[currentIndex] ?? 0;

    return {
        screen, playerName, setPlayerName,
        questions, currentIndex, currentQuestion, currentPrize,
        totalQuestions: questions.length,
        answerState, selectedIndex, hiddenAnswers, setHiddenAnswers,
        feedbackMsg, setFeedbackMsg, result,
        startGame,
        selectAnswer: (i) => selectAnswer(i, currentQuestion, currentIndex, playerName),
        timeUp: () => timeUp(currentQuestion, currentIndex, playerName),
        walkAway: () => walkAway(currentIndex, playerName),
        restart,
    };
}
