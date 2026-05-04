import { AnimatePresence, motion } from 'framer-motion';
import { useGame } from './hooks/useGame';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { GameScreen } from './screens/GameScreen';
import { EndScreen } from './screens/EndScreen';

const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit:    { opacity: 0 },
    transition: { duration: 0.3 },
};

export default function App() {
    const game = useGame();

    return (
        <AnimatePresence mode="wait">
            {game.screen === 'welcome' && (
                <motion.div key="welcome" {...pageTransition}>
                    <WelcomeScreen
                        playerName={game.playerName}
                        onStart={game.startGame}
                    />
                </motion.div>
            )}

            {game.screen === 'game' && (
                <motion.div key="game" {...pageTransition}>
                    <GameScreen game={game} />
                </motion.div>
            )}

            {game.screen === 'end' && (
                <motion.div key="end" {...pageTransition}>
                    <EndScreen
                        result={game.result}
                        playerName={game.playerName}
                        onRestart={game.restart}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
