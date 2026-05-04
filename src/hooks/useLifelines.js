import { useState, useCallback } from 'react';
import { PHONE_EXPERTS, ANSWER_LABELS } from '../data/constants';
import { createAudiencePercentages, shuffle } from '../utils/game';
import { sound } from '../utils/sound';

export function useLifelines({ currentQuestion, hiddenAnswers, setHiddenAnswers, setFeedbackMsg }) {
    const [used, setUsed] = useState({ fifty: false, phone: false, audience: false });
    const [modal, setModal] = useState(null); // null | 'expertSelection' | 'phoneCall' | 'audienceVote'
    const [phoneData, setPhoneData] = useState(null);
    const [audienceData, setAudienceData] = useState(null);

    const markUsed = (key) => setUsed(u => ({ ...u, [key]: true }));

    const useFiftyFifty = useCallback(() => {
        if (!currentQuestion || used.fifty) return;
        sound.lifeline();
        markUsed('fifty');
        const wrong = shuffle([0, 1, 2, 3].filter(i => i !== currentQuestion.answer && !hiddenAnswers.has(i)));
        const toHide = new Set([...hiddenAnswers, ...wrong.slice(0, 2)]);
        setHiddenAnswers(toHide);
        setFeedbackMsg('50:50 removed two incorrect answers.');
    }, [currentQuestion, used.fifty, hiddenAnswers, setHiddenAnswers, setFeedbackMsg]);

    const usePhone = useCallback(() => {
        if (used.phone) return;
        sound.lifeline();
        markUsed('phone');
        setModal('expertSelection');
    }, [used.phone]);

    const selectExpert = useCallback((expert) => {
        if (!currentQuestion) return;
        const givesCorrect = Math.random() < 0.9;
        const available = shuffle([0, 1, 2, 3].filter(i => i !== currentQuestion.answer && !hiddenAnswers.has(i)));
        const suggestion = givesCorrect || available.length === 0
            ? currentQuestion.answer
            : available[0];
        setPhoneData({ expert, suggestionLabel: ANSWER_LABELS[suggestion], confident: givesCorrect });
        setModal('phoneCall');
    }, [currentQuestion, hiddenAnswers]);

    const useAudience = useCallback(() => {
        if (!currentQuestion || used.audience) return;
        sound.lifeline();
        markUsed('audience');
        setAudienceData({ percentages: createAudiencePercentages(currentQuestion.answer) });
        setModal('audienceVote');
    }, [currentQuestion, used.audience]);

    const closeModal = useCallback(() => {
        setModal(null);
        setPhoneData(null);
        setAudienceData(null);
    }, []);

    const reset = useCallback(() => {
        setUsed({ fifty: false, phone: false, audience: false });
        setModal(null);
        setPhoneData(null);
        setAudienceData(null);
    }, []);

    return { used, modal, phoneData, audienceData, useFiftyFifty, usePhone, selectExpert, useAudience, closeModal, reset };
}
