# ISO 29119 Millionaire

A *Who Wants to Be a Millionaire*-style quiz game built to make learning the **ISO/IEC/IEEE 29119** software testing standards interactive and fun. Designed for classroom use in CMPE480.

## Features

- 10-question sets drawn from a pool of 15 questions across easy / medium / hard difficulties
- Questions and answer options are shuffled randomly on every playthrough
- 20-second countdown timer per question
- Three lifelines: **50:50**, **Phone a Friend**, and **Ask the Audience**
- Safe haven milestones at Q3 (5,000 TL) and Q6 (50,000 TL)
- Prize ladder up to **1,000,000 TL**
- Persistent leaderboard stored in the browser (localStorage)
- End screen with wrong-answer review and explanation

## Tech Stack

| Layer | Library / Tool |
|-------|---------------|
| UI framework | React 19 |
| Animations | Framer Motion 12 |
| Bundler | Vite 6 |
| Styling | CSS Modules + CSS custom properties |
| Fonts | Orbitron, Inter (Google Fonts) |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── components/
│   ├── game/         # AnswerButton, LifelineBar, PrizeLadder, TimerBar, …
│   └── ui/           # Modal, Icons
├── data/
│   ├── questions.js  # 15 questions with explanations
│   └── constants.js  # Lifeline experts, prize ladder, labels
├── hooks/
│   ├── useGame.js    # Core game state machine
│   ├── useLifelines.js
│   └── useTimer.js
├── screens/          # WelcomeScreen, GameScreen, EndScreen
├── styles/           # globals.css (design tokens)
└── utils/            # game logic, formatting, localStorage helpers
```

## Adding Questions

Open [src/data/questions.js](src/data/questions.js) and append an object following the existing schema:

```js
{
    id: 'unique-id',
    standard: 'ISO/IEC/IEEE 29119',
    difficulty: 'easy' | 'medium' | 'hard',
    question: 'Question text?',
    options: ['Correct answer', 'Wrong A', 'Wrong B', 'Wrong C'],
    answer: 0,   // index of the correct option (always 0 in source; shuffled at runtime)
    explanation: 'Why this answer is correct.'
}
```

## Course Context

This game covers the **ISO/IEC/IEEE 29119** family of software testing standards, with particular focus on **29119-5** (keyword-driven testing). It is intended as a study and review tool for CMPE480 — International Standards on Software Engineering
