import { useState, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { GlassCard } from '../components/ui/GlassCard';
import { Leaderboard } from '../components/game/Leaderboard';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { MAX_NAME_LENGTH } from '../data/constants';
import s from './WelcomeScreen.module.css';

const INFO = {
    '29119': {
        title: 'What is ISO 29119?',
        body: 'ISO/IEC/IEEE 29119 is an international family of software testing standards. It provides guidance for test processes, test documentation, test design techniques, and related activities. The goal is to help teams plan, perform, monitor, control, and improve testing in a consistent and structured way.',
    },
    '29119-5': {
        title: 'What is ISO 29119-5?',
        body: 'ISO/IEC/IEEE 29119-5 focuses on keyword-driven testing. In this approach, reusable keywords represent test actions or business steps. Testers can combine keywords with data to create readable, maintainable, and reusable test cases, especially for automation.',
    },
};

export function WelcomeScreen({ playerName, onStart }) {
    const [name, setName] = useState(playerName);
    const [error, setError] = useState('');
    const [infoKey, setInfoKey] = useState(null);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [showHowTo, setShowHowTo] = useState(false);
    const [showQTypes, setShowQTypes] = useState(false);
    const inputRef = useRef(null);
    const { entries, refresh } = useLeaderboard();
    const { theme, toggleTheme } = useTheme();

    const handleStart = () => {
        const trimmed = name.trim();
        if (!trimmed) { setError('Please enter a username before starting.'); return; }
        onStart(trimmed);
    };

    const handleNameChange = (e) => {
        const val = e.target.value;
        if (val.length <= MAX_NAME_LENGTH && /^[a-zA-Z0-9 _-]*$/.test(val)) {
            setName(val);
            setError('');
        }
    };

    return (
        <div className={s.screen}>
            {/* Ambient background orbs */}
            <div className={s.orb1} />
            <div className={s.orb2} />

            {/* Theme toggle */}
            <button className={s.themeBtn} onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
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

            <motion.div
                className={s.content}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } },
                }}
            >
                {/* Header */}
                <motion.div
                    className={s.header}
                    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                >
                    <motion.div
                        className={s.logoWrap}
                        animate={{ y: [0, -7, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    >
                        <span className={s.diamond}>◆</span>
                    </motion.div>
                    <h1 className={s.title}>ISO 29119<br />Millionaire</h1>
                    <p className={s.subtitle}>
                        Test your knowledge of software testing standards.<br />
                        Answer 10 questions — win up to <strong>1,000,000 TL</strong>.
                    </p>
                </motion.div>

                {/* Name input card */}
                <motion.div
                    className={s.cardWrap}
                    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
                >
                    <GlassCard className={s.card} padding="lg" accent="blue">
                        <label className={s.label} htmlFor="username">Username</label>
                        <div className={s.inputRow}>
                            <input
                                ref={inputRef}
                                id="username"
                                className={s.input}
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                onKeyDown={e => e.key === 'Enter' && handleStart()}
                                placeholder="Enter your name…"
                                autoComplete="off"
                                spellCheck={false}
                                maxLength={MAX_NAME_LENGTH}
                            />
                            <span className={s.charCount}>{name.length}/{MAX_NAME_LENGTH}</span>
                        </div>
                        {error && <p className={s.error}>{error}</p>}
                        <Button variant="success" size="lg" fullWidth onClick={handleStart}>
                            Start Game
                        </Button>
                    </GlassCard>
                </motion.div>

                {/* Secondary actions */}
                <motion.div
                    className={s.actions}
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                >
                    <Button variant="ghost" onClick={() => setShowHowTo(true)}>How to Play</Button>
                    <Button variant="ghost" onClick={() => setInfoKey('29119')}>ISO 29119</Button>
                    <Button variant="ghost" onClick={() => setInfoKey('29119-5')}>ISO 29119-5</Button>
                    <Button variant="ghost" onClick={() => setShowQTypes(true)}>Question Types</Button>
                </motion.div>

                <motion.div
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                >
                    <Button variant="primary" onClick={() => { refresh(); setShowLeaderboard(true); }}>
                        🏆 Leaderboard
                    </Button>
                </motion.div>
            </motion.div>

            {/* How to Play modal */}
            <Modal open={showHowTo} onClose={() => setShowHowTo(false)} width={520}>
                <h2 className={s.modalTitle}>How to Play</h2>
                <div className={s.howToList}>
                    {[
                        { icon: '❓', title: '10 Questions', desc: 'Answer 10 multiple-choice questions across Easy, Medium, and Hard difficulty levels.' },
                        { icon: '💰', title: 'Prize Ladder', desc: 'Each correct answer climbs the prize ladder. Q3 (5,000 TL) and Q6 (50,000 TL) are safe-haven milestones — if you lose after them, you keep that prize.' },
                        { icon: '½',  title: '50 : 50', desc: 'Removes two incorrect answers, leaving only the correct one and one wrong option.' },
                        { icon: '📞', title: 'Phone a Friend', desc: 'Call one of three experts. They have a ~90% chance of giving you the right answer.' },
                        { icon: '👥', title: 'Ask the Audience', desc: 'The audience votes on the correct answer. Results are shown as a live bar chart.' },
                        { icon: '⚡', title: 'One Shot', desc: 'Each lifeline can only be used once per game. Choose wisely!' },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className={s.howToItem}>
                            <span className={s.howToIcon}>{icon}</span>
                            <div>
                                <strong className={s.howToTitle}>{title}</strong>
                                <p className={s.howToDesc}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: 24 }}>
                    <Button variant="success" onClick={() => setShowHowTo(false)} fullWidth>Got it!</Button>
                </div>
            </Modal>

            {/* Info modal */}
            <Modal open={!!infoKey} onClose={() => setInfoKey(null)} width={540}>
                {infoKey && <>
                    <h2 className={s.modalTitle}>{INFO[infoKey].title}</h2>
                    <p className={s.modalBody}>{INFO[infoKey].body}</p>
                    <Button variant="ghost" onClick={() => setInfoKey(null)} fullWidth>Close</Button>
                </>}
            </Modal>

            {/* Question Types modal */}
            <Modal open={showQTypes} onClose={() => setShowQTypes(false)} width={560}>
                <h2 className={s.modalTitle}>Question Types</h2>
                <p className={s.modalBody}>This game features four different question formats. Here is how to answer each one:</p>
                <div className={s.howToList}>
                    {[
                        {
                            icon: '🔤',
                            title: 'Multiple Choice (MCQ)',
                            desc: 'Four options labelled A–D are shown. Click the option you think is correct. Lifelines (50:50, Audience, Phone) are all available.',
                        },
                        {
                            icon: '✅',
                            title: 'True / False (T/F)',
                            desc: 'Only two buttons appear — True and False. Pick the one that matches the statement. 50:50 and Audience lifelines are disabled for this type.',
                        },
                        {
                            icon: '✏️',
                            title: 'Fill in the Blank (FITB)',
                            desc: 'A sentence with a missing word or phrase is shown. Type your answer in the text box and press Enter or "Submit". Spelling variations and capitalisation differences are accepted. Case study questions follow the same format but start with a short scenario.',
                        },
                        {
                            icon: '🔗',
                            title: 'Matching',
                            desc: 'Two columns of items are displayed. Click a left-side item to select it (highlighted in blue), then click the right-side item you want to pair it with. You can re-pair items at any time. When all pairs are connected, a "Confirm All Pairs" button appears — click it to submit your answer.',
                        },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className={s.howToItem}>
                            <span className={s.howToIcon}>{icon}</span>
                            <div>
                                <strong className={s.howToTitle}>{title}</strong>
                                <p className={s.howToDesc}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: 24 }}>
                    <Button variant="success" onClick={() => setShowQTypes(false)} fullWidth>Got it!</Button>
                </div>
            </Modal>

            {/* Leaderboard modal */}
            <Modal open={showLeaderboard} onClose={() => setShowLeaderboard(false)} width={560}>
                <h2 className={s.modalTitle}>Leaderboard</h2>
                <Leaderboard entries={entries} limit={10} highlightName={name.trim()} />
                <div style={{ marginTop: 20 }}>
                    <Button variant="ghost" onClick={() => setShowLeaderboard(false)} fullWidth>Close</Button>
                </div>
            </Modal>
        </div>
    );
}
