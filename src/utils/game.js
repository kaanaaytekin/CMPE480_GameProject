import { QUESTIONS, PRIZE_LADDER } from '../data/questions';
import { DIFFICULTY_PLAN, DEMO_MODE } from '../data/constants';

export function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shuffleOptions(question) {
    const order = shuffle([0, 1, 2, 3]);
    return {
        ...question,
        options: order.map(i => question.options[i]),
        answer:  order.indexOf(question.answer),
    };
}

export function buildQuestionSet() {
    const pools = QUESTIONS.reduce((acc, q) => {
        (acc[q.difficulty] ??= []).push(q);
        return acc;
    }, {});
    Object.keys(pools).forEach(k => { pools[k] = shuffle(pools[k]); });

    return DIFFICULTY_PLAN.map(diff => {
        const pool = pools[diff] ?? [];
        const q = pool.shift() ?? QUESTIONS.find(q => q.difficulty === diff) ?? QUESTIONS[0];
        return (DEMO_MODE || q.type === 'tf' || q.type === 'fitb' || q.type === 'match') ? q : shuffleOptions(q);
    });
}

export function getSafePrize(index) {
    if (index >= 6) return PRIZE_LADDER[5];
    if (index >= 3) return PRIZE_LADDER[2];
    return 0;
}

export function createAudiencePercentages(correctIndex) {
    const correct = Math.floor(Math.random() * 21) + 55; // 55-75
    let remaining = 100 - correct;
    const result = [0, 0, 0, 0];
    result[correctIndex] = correct;

    const wrong = [0, 1, 2, 3].filter(i => i !== correctIndex);
    wrong.forEach((idx, order) => {
        if (order === wrong.length - 1) { result[idx] = remaining; return; }
        const max = remaining - (wrong.length - order - 1);
        const val = Math.floor(Math.random() * Math.max(1, max)) + 1;
        result[idx] = val;
        remaining -= val;
    });
    return result;
}

export { PRIZE_LADDER };
