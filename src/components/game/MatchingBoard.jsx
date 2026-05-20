import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shuffle } from '../../utils/game';
import s from './MatchingBoard.module.css';

function leftCls(isSelected, isConnected, isSelectable, state, isRevealed, css) {
    let c = css.item;
    if (isRevealed) c += ' ' + (state === 'correct' ? css.correct : css.wrong);
    else if (isSelected) c += ' ' + css.selected;
    else if (isConnected) c += ' ' + css.connected;
    else if (isSelectable) c += ' ' + css.selectable;
    return c;
}

function rightCls(isSelected, isConnected, isSelectable, state, isRevealed, css) {
    let c = css.item + ' ' + css.itemRight;
    if (isRevealed) c += ' ' + (state === 'correct' ? css.correct : css.wrong);
    else if (isSelected) c += ' ' + css.selected;
    else if (isConnected) c += ' ' + css.connected;
    else if (isSelectable) c += ' ' + css.selectable;
    return c;
}

export function MatchingBoard({ pairs, questionId, answerState, onSubmit }) {
    const [rightItems, setRightItems] = useState(() => shuffle(pairs.map(p => p.right)));
    const [leftSelected, setLeftSelected]   = useState(null); // index into pairs
    const [rightSelected, setRightSelected] = useState(null); // index into rightItems
    const [connections, setConnections] = useState({});        // leftIdx → rightIdx

    useEffect(() => {
        setRightItems(shuffle(pairs.map(p => p.right)));
        setLeftSelected(null);
        setRightSelected(null);
        setConnections({});
    }, [questionId]);

    const isLocked     = answerState !== 'idle';
    const isRevealed   = answerState === 'revealed';
    const allConnected = Object.keys(connections).length === pairs.length;
    const anyConnected = Object.keys(connections).length > 0;

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

    const connect = (leftIdx, rightIdx) => {
        setConnections(prev => {
            const next = { ...prev };
            // remove any existing mapping to this right item
            Object.keys(next).forEach(k => { if (next[+k] === rightIdx) delete next[+k]; });
            next[leftIdx] = rightIdx;
            return next;
        });
        setLeftSelected(null);
        setRightSelected(null);
    };

    const handleLeftClick = (i) => {
        if (isLocked) return;
        if (rightSelected !== null) {
            // right was waiting — complete the pair
            connect(i, rightSelected);
        } else {
            // toggle left selection
            setLeftSelected(prev => prev === i ? null : i);
        }
    };

    const handleRightClick = (j) => {
        if (isLocked) return;
        if (leftSelected !== null) {
            // left was waiting — complete the pair
            connect(leftSelected, j);
        } else {
            // toggle right selection
            setRightSelected(prev => prev === j ? null : j);
        }
    };

    const handleRemoveAll = () => {
        setConnections({});
        setLeftSelected(null);
        setRightSelected(null);
    };

    const instruction = leftSelected !== null
        ? 'Now click its match on the right.'
        : rightSelected !== null
            ? 'Now click its match on the left.'
            : 'Click any item on either side to start matching.';

    return (
        <div className={s.board}>
            {!isRevealed && (
                <p className={s.instruction}>{instruction}</p>
            )}

            <div className={s.columns}>
                {/* Left column */}
                <div className={s.col}>
                    {pairs.map((pair, i) => {
                        const isSelected  = leftSelected === i;
                        const isConnected = connections[i] !== undefined;
                        const isSelectable = !isLocked && rightSelected !== null && !isSelected;
                        const state = getLeftState(i);
                        return (
                            <motion.button
                                key={i}
                                className={leftCls(isSelected, isConnected && !isSelected, isSelectable, state, isRevealed, s)}
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

                {/* Right column */}
                <div className={s.col}>
                    {rightItems.map((text, j) => {
                        const isSelected  = rightSelected === j;
                        const cLeft       = connectedLeftFor(j);
                        const isConnected = cLeft !== null;
                        const isSelectable = !isLocked && leftSelected !== null && !isSelected;
                        const state = getRightState(j);
                        const correctLeft = isRevealed && state === 'wrong'
                            ? pairs.find(p => p.right === text)?.left
                            : null;
                        return (
                            <motion.button
                                key={j}
                                className={rightCls(isSelected, isConnected && !isRevealed && !isSelected, isSelectable, state, isRevealed, s)}
                                onClick={() => handleRightClick(j)}
                                disabled={isLocked}
                                initial={{ opacity: 0, x: 14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.07, type: 'spring', stiffness: 300, damping: 24 }}
                                whileHover={(!isLocked && (isSelectable || isSelected)) ? { scale: 1.015 } : {}}
                                whileTap={(!isLocked && (isSelectable || isSelected)) ? { scale: 0.985 } : {}}
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

            {!isLocked && (
                <div className={s.submitRow}>
                    <AnimatePresence>
                        {anyConnected && (
                            <motion.button
                                className={s.removeBtn}
                                onClick={handleRemoveAll}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                Remove All
                            </motion.button>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {allConnected && (
                            <motion.button
                                className={s.submitBtn}
                                onClick={() => onSubmit({ connections, rightItems })}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                Confirm All Pairs
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
