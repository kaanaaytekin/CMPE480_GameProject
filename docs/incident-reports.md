# Incident Reports — ISO/IEC/IEEE 29119 Millionaire

**Document ID:** IR-29119M-001 to IR-29119M-004  
**Version:** 1.0  
**Date:** 2026-05-20  
**Course:** CMPE 480 — International Standards on Software Engineering  
**Team:** Kaan Aytekin, Müslüm Türker Kırtız, Yaren Atılgan  
**Reference:** ISO/IEC/IEEE 29119-3, Section 11 (Test Incident Report)

---

## IR-29119M-001 — Phone Lifeline Displaying Invalid Text for FITB and Matching Questions

| Field | Value |
|-------|-------|
| **Incident ID** | IR-29119M-001 |
| **Date Detected** | 2026-05-10 |
| **Date Resolved** | 2026-05-10 |
| **Severity** | High |
| **Status** | Resolved |
| **Detected By** | Kaan Aytekin (manual testing) |
| **Affected Test Cases** | TC-16, TC-17 |

### Description

When the Phone a Friend lifeline was used on a **Fill in the Blank** or **Matching** question, the expert's suggestion displayed the text `"undefined"` instead of a valid hint. This occurred because the lifeline logic read from `currentQuestion.answer` (a numeric option index used only by MCQ and T/F) and attempted to map it to `currentQuestion.options[answer]`, which is undefined for FITB and Matching question types.

### Root Cause

`useLifelines.js` — the `selectExpert` function did not have separate handling for `type: 'fitb'` and `type: 'match'`. It unconditionally read `options[answer]`, which is `undefined` for those types.

### Fix Applied

Added dedicated branches in `selectExpert` for FITB and Match question types:

- **FITB:** The suggestion reads from `currentQuestion.acceptedAnswers[0]`. If the expert gives a wrong answer, a fallback message ("I honestly can't recall") is shown instead of fabricating an incorrect answer.
- **Match:** The suggestion selects a random pair from `currentQuestion.pairs` and formats it as `"Left item" → "Right item"`.

The `PhoneCall.jsx` component was updated to handle a `null` suggestion label and display the fallback message gracefully.

### Verification

TC-16 and TC-17 re-executed after fix — both passed.

---

## IR-29119M-002 — DEMO_MODE Enabled in Production Build

| Field | Value |
|-------|-------|
| **Incident ID** | IR-29119M-002 |
| **Date Detected** | 2026-05-15 |
| **Date Resolved** | 2026-05-15 |
| **Severity** | Critical |
| **Status** | Resolved |
| **Detected By** | Kaan Aytekin (pre-deployment review) |
| **Affected Test Cases** | TC-05, TC-06, TC-07 |

### Description

During pre-deployment review it was discovered that `DEMO_MODE` was set to `true` in `src/data/constants.js`. In this mode, the question shuffle algorithm always placed the correct answer at index 0 (option A). This made the game trivially solvable by always selecting A, which would completely undermine the educational purpose in a classroom setting.

### Root Cause

`DEMO_MODE = true` was a development convenience flag left enabled from early development, where it was used to quickly verify scoring logic without needing to know the correct answers. It was never disabled before the deployment phase.

### Fix Applied

`DEMO_MODE` set to `false` in `src/data/constants.js`. The shuffle algorithm now randomises answer positions on every game load.

```js
// Before
export const DEMO_MODE = true;

// After
export const DEMO_MODE = false;
```

### Verification

Multiple playthroughs confirmed that the correct answer position varies randomly and is no longer always at index 0.

---

## IR-29119M-003 — Game Screen Layout Overflow on Mobile Portrait

| Field | Value |
|-------|-------|
| **Incident ID** | IR-29119M-003 |
| **Date Detected** | 2026-05-18 |
| **Date Resolved** | 2026-05-18 |
| **Severity** | Medium |
| **Status** | Resolved |
| **Detected By** | Kaan Aytekin (mobile device test) |
| **Affected Test Cases** | TC-25 |

### Description

When the game screen was viewed on a mobile device in portrait orientation (tested on a device with 390 px viewport width), the layout overflowed horizontally. The prize ladder sidebar and main question area were rendered side by side, causing the content to exceed the screen width and requiring horizontal scrolling. Answer buttons were partially off-screen and difficult to tap.

### Root Cause

`GameScreen.module.css` — the `.body` container used `flex-direction: row` with a fixed-width sidebar (260 px) at all viewport sizes. No responsive breakpoint was defined.

### Fix Applied

Added a `@media (max-width: 700px)` breakpoint to both `GameScreen.module.css` and `PrizeLadder.module.css`:

- `.body` switches to `flex-direction: column`
- `.answers` grid collapses from 2 columns to 1 column
- `.answersTF` remains 2 columns (True / False still fits side by side)
- Prize ladder width set to 100%; repositioned below the main game area with `order: 2`
- Prize ladder list changes to a 2-column grid for compactness

### Verification

TC-25 re-executed on Chrome DevTools mobile simulation (390×844) — layout correct with no horizontal overflow.

---

## IR-29119M-004 — Matching Badge Positioned Between Columns (Low Readability)

| Field | Value |
|-------|-------|
| **Incident ID** | IR-29119M-004 |
| **Date Detected** | 2026-05-12 |
| **Date Resolved** | 2026-05-12 |
| **Severity** | Low |
| **Status** | Resolved |
| **Detected By** | Kaan Aytekin (usability review) |
| **Affected Test Cases** | TC-11 |

### Description

On Matching questions, when a right-column item was paired with a left-column item, a numbered badge was shown to indicate which left item it was connected to. The badge was positioned on the left edge of the right-column button, placing it visually between the two columns. This made it difficult to read at a glance and created visual noise in the gap between columns.

### Root Cause

`MatchingBoard.module.css` — `.badge` was rendered as the first child of the right-column button with no absolute positioning, so it appeared at the far left of the button, effectively in the inter-column gap.

### Fix Applied

`.badge` repositioned using `position: absolute; right: 10px; top: 50%; transform: translateY(-50%)` so it appears at the right edge of the right-column button. `.itemRight` was given `padding-right: 40px` to prevent the badge from overlapping the item text.

### Verification

Matching question tested after fix — badge clearly visible on the right side of each connected right-column item.
