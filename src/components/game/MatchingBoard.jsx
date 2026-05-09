import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shuffle } from '../../utils/game';
import s from './MatchingBoard.module.css';

function leftCls(isSelected, isConnected, state, isRevealed, css) {
    let c = css.item;
    if (isRevealed) c += ' ' + (state === 'correct' ? css.correct : css.wrong);
    else if (isSelected) c += ' ' + css.selected;
    else if (isConnected) c += ' ' + css.connected;
    return c;
}

function rightCls(isConnected, isSelectable, state, isRevealed, css) {
    let c = css.item + ' ' + css.itemRight;
    if (isRevealed) c += ' ' + (state === 'correct' ? css.correct : css.wrong);
    else if (isConnected) c += ' ' + css.connected;
    else if (isSelectable) c += ' ' + css.selectable;
    return c;
}

export function MatchingBoard({ pairs, questionId, answerState, onSubmit }) {
    const [rightItems, setRightItems] = useState(() => shuffle(pairs.map(p => p.right)));
    const [leftSelected, setLeftSelected] = useState(null);
    const [connections, setConnections] = useState({}); // leftIdx → rightIdx

    useEffect(() => {
        setRightItems(shuffle(pairs.map(p => p.right)));
        setLeftSelected(null);
        setConnections({});
    }, [questionId]);

    const isLocked   = answerState !== 'idle';
    const isRevealed = answerState === 'revealed';
    const allConnected = Object.keys(connections).length === pairs.length;

    const getLeftState = (i) => {
        if (!isRevealed) return 'idle';
        const j = connections[i];
        return j !== undefined && rightItems[j] === pairs[i].right ? 'correct' : 'wrong';
    };

    const getRightState = (j) => {
        if (!isRevealed) return 'idle';
        const leftKey = Object.keys(connections).find(k => connections[+k] === j);
        if (leftKey === undefined) return 'wrong';
        return rightItems[j] === pairs[+leftKey].right ? 'correct' : 'wrong';
    };

    const connectedLeftFor = (j) => {
        const k = Object.keys(connections).find(k => connections[+k] === j);
        return k !== undefined ? +k : null;
    };

    const handleLeftClick = (i) => {
        if (isLocked) return;
        setLeftSelected(prev => prev === i ? null : i);
    };

    const handleRightClick = (j) => {
        if (isLocked || leftSelected === null) return;
        setConnections(prev => {
            const next = { ...prev };
            Object.keys(next).forEach(k => { if (next[+k] === j) delete next[+k]; });
            next[leftSelected] = j;
            return next;
        });
        setLeftSelected(null);
    };

    return (
        <div className={s.board}>
            <div className={s.columns}>
                {/* Left column — terms */}
                <div className={s.col}>
                    {pairs.map((pair, i) => {
                        const isSelected  = leftSelected === i;
                        const isConnected = connections[i] !== undefined;
                        const state       = getLeftState(i);
                        return (
                            <motion.button
                                key={i}
                                className={leftCls(isSelected, isConnected && !isSelected, state, isRevealed, s)}
                                onClick={() => handleLeftClick(i)}
                                disabled={isLocked}
                                initial={{ opacity: 0, x: -14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07, type: 'spring', stiffness: 300, damping: 24 }}
                                whileHover={!isLocked ? { scale: 1.015 } : {}}
                                whileTap={!isLocked ? { scale: 0.985 } : {}}
                            >
                                <span className={s.num}>{i + 1}</span>
                                <span className={s.text}>{pair.left}</span>
                                {isConnected && !isRevealed && <span className={s.dot} />}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Right column — definitions (shuffled) */}
                <div className={s.col}>
                    {rightItems.map((text, j) => {
                        const cLeft      = connectedLeftFor(j);
                        const state      = getRightState(j);
                        const isConnected = cLeft !== null;
                        const isSelectable = !isLocked && leftSelected !== null;
                        // Correct right label for wrong items on reveal
                        const correctLeft = isRevealed && state === 'wrong'
                            ? pairs.find(p => p.right === text)?.left
                            : null;
                        return (
                            <motion.button
                                key={j}
                                className={rightCls(isConnected && !isRevealed, isSelectable, state, isRevealed, s)}
                                onClick={() => handleRightClick(j)}
                                disabled={isLocked}
                                initial={{ opacity: 0, x: 14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.07, type: 'spring', stiffness: 300, damping: 24 }}
                                whileHover={isSelectable ? { scale: 1.015 } : {}}
                                whileTap={isSelectable ? { scale: 0.985 } : {}}
                            >
                                {isConnected && !isRevealed && (
                                    <span className={s.badge}>{cLeft + 1}</span>
                                )}
                                <span className={s.text}>{text}</span>
                                {correctLeft && (
                                    <span className={s.hint}>✓ {correctLeft}</span>
                                )}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {!isLocked && allConnected && (
                    <motion.div
                        className={s.submitRow}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            className={s.submitBtn}
                            onClick={() => onSubmit({ connections, rightItems })}
                        >
                            Confirm All Pairs
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
