# 🏆 ISO/IEC/IEEE 29119 Millionaire

> A *Who Wants to Be a Millionaire*-style interactive quiz game built to make learning the **ISO/IEC/IEEE 29119** software testing standards engaging and effective.
>
> Developed for **CMPE 480 — International Standards on Software Engineering**

**Live demo:** [iso29119-millionaire.vercel.app](https://iso29119-millionaire.vercel.app)

---

## Overview

ISO/IEC/IEEE 29119 Millionaire turns the ISO/IEC/IEEE 29119 standard into a competitive classroom experience. Students answer progressively harder questions about software testing processes, documentation, test design techniques, and keyword-driven testing — all within a polished game interface featuring a live leaderboard, lifelines, and a prize ladder up to **1,000,000 TL**.

The game supports 30+ concurrent players through a shared real-time leaderboard powered by Supabase, and runs in any modern browser without installation.

---

## Features

### 🎮 Gameplay
- **150-question pool** — 50 easy, 50 medium, 50 hard; drawn from all 5 parts of ISO/IEC/IEEE 29119
- **4 question types** — Multiple Choice (MCQ), True/False, Fill in the Blank (FITB), and Matching
- **10 questions per game** — 3 easy → 3 medium → 4 hard, randomly selected each playthrough
- **Prize ladder** — climb from 1,000 TL to 1,000,000 TL
- **Safe haven milestones** — Q3 (5,000 TL) and Q6 (50,000 TL) are guaranteed prizes
- **Per-type timers** — each question type and difficulty has its own time limit (see table below)
- **End screen** — wrong-answer review with the correct answer and a full explanation

#### ⏱ Time Limits

| Difficulty | MCQ / T/F | Fill in the Blank | Matching |
|------------|-----------|-------------------|----------|
| Easy       | 25 s      | 45 s              | 50 s     |
| Medium     | 40 s      | 60 s              | 70 s     |
| Hard       | 60 s      | 90 s              | 100 s    |

### 🃏 Lifelines

| Lifeline | Effect | Available for |
|----------|--------|---------------|
| **50 : 50** | Removes two wrong options | MCQ only |
| **Phone a Friend** | Expert gives a hint (~90% accurate) | MCQ, T/F, FITB, Matching |
| **Ask the Audience** | Bar chart showing audience vote distribution | MCQ only |

Each lifeline can be used once per game.

### 📊 Leaderboard
- **Real-time** — updates instantly as other players finish their game (Supabase Realtime)
- **Shared across devices** — all students see the same leaderboard simultaneously
- Visible on both the Welcome and End screens
- Shows player name, score, and result (WIN / WALKED AWAY / OUT)

### ✨ UI / UX
- **Dark and light mode** with a toggle in both game screens
- Smooth entrance animations powered by Framer Motion
- Bi-directional matching — click either column to start pairing items
- Fully responsive — works on desktop, tablet, and mobile
- **How to Play**, **ISO/IEC/IEEE 29119**, **ISO/IEC/IEEE 29119-5**, and **Question Types** info modals on the welcome screen

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI Framework | React 19 |
| Animations | Framer Motion 12 |
| Bundler | Vite 6 |
| Styling | CSS Modules + CSS custom properties |
| Backend / Database | Supabase (PostgreSQL + Realtime) |
| Fonts | Orbitron, Inter (Google Fonts) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) project with the `scores` table (see setup below)

### Installation

```bash
git clone https://github.com/kaanaaytekin/CMPE480_GameProject.git
cd CMPE480_GameProject
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Run Locally

```bash
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

---

## Supabase Setup

Run the following SQL in the Supabase SQL Editor to create the scores table:

```sql
create table scores (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  score integer not null,
  won boolean default false,
  walked_away boolean default false,
  created_at timestamptz default now()
);

-- Public read and insert (suitable for classroom use)
alter table scores enable row level security;
create policy "Public read"   on scores for select using (true);
create policy "Public insert" on scores for insert with check (true);
```

Then enable **Realtime** for the `scores` table:
**Database → Replication → scores** → toggle on.

---

## Deployment (Vercel)

1. Push the repository to your GitHub account
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repository
3. Vercel auto-detects **Vite** — no build settings changes needed
4. Add the environment variables under **Project Settings → Environment Variables**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click **Deploy**

Every `git push` to `main` triggers an automatic redeployment.

---

## Project Structure

```
src/
├── components/
│   ├── game/               # AnswerButton, LifelineBar, PrizeLadder, TimerBar,
│   │                       # QuestionPanel, PhoneCall, AudienceChart,
│   │                       # ExpertSelection, FillBlankInput, MatchingBoard,
│   │                       # Leaderboard
│   └── ui/                 # Button, Modal, GlassCard, Icons
├── data/
│   ├── questions.js        # 150 questions across 3 difficulties and 4 types
│   └── constants.js        # Prize ladder, timer config, lifeline experts, labels
├── hooks/
│   ├── useGame.js          # Core game state machine
│   ├── useLifelines.js     # Lifeline logic (50:50, phone, audience)
│   ├── useTimer.js         # Per-question countdown timer
│   ├── useLeaderboard.js   # Supabase real-time leaderboard subscription
│   └── useTheme.js         # Dark / light mode persistence
├── screens/
│   ├── WelcomeScreen.jsx   # Name entry, modals, leaderboard preview
│   ├── GameScreen.jsx      # Main game UI
│   └── EndScreen.jsx       # Result, answer review, leaderboard
├── styles/
│   └── globals.css         # Design tokens, CSS custom properties, theme vars
└── utils/
    ├── game.js             # Question set builder, shuffle, prize logic
    ├── storage.js          # Supabase read/write helpers
    ├── supabase.js         # Supabase client initialization
    ├── sound.js            # Web Audio API sound system
    └── format.js           # Number formatting helpers
```

---

## Question Schema

### MCQ
```js
{
    id: 'e-mcq-1',
    standard: 'ISO/IEC/IEEE 29119',
    difficulty: 'easy',           // 'easy' | 'medium' | 'hard'
    question: 'Question text?',
    options: ['Correct answer', 'Wrong A', 'Wrong B', 'Wrong C'],
    answer: 0,                    // index of the correct option
    explanation: 'Why this is correct.'
}
```

### True / False
```js
{
    id: 'e-tf-1',
    type: 'tf',
    standard: 'ISO/IEC/IEEE 29119',
    difficulty: 'easy',
    question: 'True or False: ...',
    options: ['True', 'False'],
    answer: 0,                    // 0 = True, 1 = False
    explanation: '...'
}
```

### Fill in the Blank (FITB)
```js
{
    id: 'e-fitb-1',
    type: 'fitb',
    standard: 'ISO/IEC/IEEE 29119',
    difficulty: 'easy',
    question: 'The ___ defines the scope and approach of testing.',
    acceptedAnswers: ['test plan', 'plan'],   // case-insensitive, punctuation-tolerant
    explanation: '...'
}
```

### Matching
```js
{
    id: 'e-match-1',
    type: 'match',
    standard: 'ISO/IEC/IEEE 29119',
    difficulty: 'easy',
    question: 'Match each part to its focus area.',
    pairs: [
        { left: 'Part 1', right: 'Concepts & definitions' },
        { left: 'Part 2', right: 'Test processes' },
        { left: 'Part 3', right: 'Test documentation' },
        { left: 'Part 4', right: 'Test design techniques' },
    ],
    explanation: '...'
}
```

---

## Course Coverage

This project covers the full **ISO/IEC/IEEE 29119** family:

| Part | Title | Topics covered |
|------|-------|----------------|
| Part 1 | Concepts & Definitions | Test oracle, test item, test case, W7 framework, roles |
| Part 2 | Test Processes | Organizational, management, and dynamic test processes; OTP; OTS |
| Part 3 | Test Documentation | Test plan, test case spec, test procedure, completion report |
| Part 4 | Test Design Techniques | Specification-based, structure-based (MC/DC), experience-based, grey-box |
| Part 5 | Keyword-Driven Testing | Keywords, parameters, adapter layer, shared vs project-specific keywords |

---

## License

MIT
