export const ANSWER_LABELS = ['A', 'B', 'C', 'D'];

/* Set to true during demos — correct answer will always appear as option A */
export const DEMO_MODE = true;

/* Seconds allowed per difficulty level */
export const QUESTION_TIMES = {
    easy:   20,
    medium: 40,
    hard:   60,
};

export const DIFFICULTY_LABELS = {
    easy:   'Easy',
    medium: 'Medium',
    hard:   'Hard',
};

export const DIFFICULTY_PLAN = [
    'easy', 'easy', 'easy',
    'medium', 'medium', 'medium',
    'hard', 'hard', 'hard', 'hard',
];

export const PHONE_EXPERTS = [
    { key: 'alex',   name: 'Alex Chen',    title: 'QA Lead',          color: '#4d9fff' },
    { key: 'sarah',  name: 'Sarah Park',   title: 'Test Architect',   color: '#34d399' },
    { key: 'marcus', name: 'Marcus Reid',  title: 'ISO Consultant',   color: '#a78bfa' },
];

export const LEADERBOARD_KEY  = 'iso29119MillionaireLeaderboard';
export const PLAYER_NAME_KEY  = 'iso29119MillionairePlayerName';
export const MAX_NAME_LENGTH  = 16;
export const LEADERBOARD_SIZE = 10;

/* Q3 and Q6 are safe-haven milestones (0-indexed: 2 and 5) */
export const MILESTONES = new Set([2, 5]);
