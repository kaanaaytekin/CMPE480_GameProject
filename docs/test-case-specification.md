# Test Case Specification — ISO/IEC/IEEE 29119 Millionaire

**Document ID:** TCS-29119M-001  
**Version:** 1.0  
**Date:** 2026-05-20  
**Course:** CMPE 480 — International Standards on Software Engineering  
**Team:** Kaan Aytekin, Müslüm Türker Kırtız, Yaren Atılgan  
**Reference:** ISO/IEC/IEEE 29119-3, Section 8 (Test Case Specification)

---

## 1. Introduction

This document specifies the test cases used to verify the functional behaviour of the ISO/IEC/IEEE 29119 Millionaire application. Test cases are derived from the test basis (feature requirements) using the techniques defined in the Test Plan (TP-29119M-001).

Each test case follows the structure defined in ISO/IEC/IEEE 29119-3:
- Unique identifier
- Objective
- Preconditions
- Test inputs / actions
- Expected result (test oracle)
- Actual result
- Pass / Fail

---

## 2. Test Cases

---

### TC-01 — Username: Empty Input Rejected

| Field | Value |
|-------|-------|
| **Test Item** | TI-01 Welcome Screen |
| **Objective** | Verify that the game does not start when the username field is empty |
| **Preconditions** | Application is open at the welcome screen; username field is empty |
| **Input** | Click "Start Game" without entering a name |
| **Expected Result** | An error message is displayed: "Please enter a username before starting." Game does not proceed. |
| **Actual Result** | Error message displayed correctly. Game did not start. |
| **Status** | ✅ Pass |

---

### TC-02 — Username: Max Length Enforced

| Field | Value |
|-------|-------|
| **Test Item** | TI-01 Welcome Screen |
| **Objective** | Verify that usernames longer than the maximum character limit are rejected |
| **Preconditions** | Welcome screen is open |
| **Input** | Attempt to type more than 20 characters into the username field |
| **Expected Result** | Input stops accepting characters at the limit; character counter reflects the maximum |
| **Actual Result** | Field capped correctly at 20 characters. |
| **Status** | ✅ Pass |

---

### TC-03 — Username: Invalid Characters Rejected

| Field | Value |
|-------|-------|
| **Test Item** | TI-01 Welcome Screen |
| **Objective** | Verify that special characters outside the allowed set are not accepted |
| **Preconditions** | Welcome screen is open |
| **Input** | Type `!@#$%` into the username field |
| **Expected Result** | Characters are silently ignored; field remains unchanged |
| **Actual Result** | Invalid characters were not inserted into the field. |
| **Status** | ✅ Pass |

---

### TC-04 — Question Sequencing: Correct Difficulty Order

| Field | Value |
|-------|-------|
| **Test Item** | TI-02 Game Engine |
| **Objective** | Verify that questions are presented in the correct order: 3 easy → 3 medium → 4 hard |
| **Preconditions** | Game started with a valid username |
| **Input** | Answer all 10 questions correctly |
| **Expected Result** | Questions 1–3 are tagged `easy`, 4–6 `medium`, 7–10 `hard` |
| **Actual Result** | Difficulty order confirmed across multiple playthroughs. |
| **Status** | ✅ Pass |

---

### TC-05 — MCQ: Correct Answer Advances Prize Ladder

| Field | Value |
|-------|-------|
| **Test Item** | TI-02, TI-03 |
| **Objective** | Verify that selecting the correct MCQ answer advances the prize ladder |
| **Preconditions** | Game is on an MCQ question |
| **Input** | Select the correct option |
| **Expected Result** | Answer is highlighted green; prize ladder advances to the next level; next question loads |
| **Actual Result** | Correct behaviour observed. |
| **Status** | ✅ Pass |

---

### TC-06 — MCQ: Wrong Answer Ends Game

| Field | Value |
|-------|-------|
| **Test Item** | TI-02, TI-03 |
| **Objective** | Verify that selecting a wrong answer ends the game and shows the correct answer |
| **Preconditions** | Game is on an MCQ question before any milestone |
| **Input** | Select an incorrect option |
| **Expected Result** | Selected answer turns red; correct answer turns green; game transitions to End Screen showing 0 TL prize |
| **Actual Result** | Correct behaviour observed. |
| **Status** | ✅ Pass |

---

### TC-07 — Safe Haven: Q3 Milestone Preserved

| Field | Value |
|-------|-------|
| **Test Item** | TI-02 Game Engine |
| **Objective** | Verify that losing after reaching Q3 (5,000 TL milestone) preserves that prize |
| **Preconditions** | Player has answered Q1–Q3 correctly |
| **Input** | Select a wrong answer on Q4 |
| **Expected Result** | End Screen shows 5,000 TL as the final prize |
| **Actual Result** | 5,000 TL milestone correctly preserved. |
| **Status** | ✅ Pass |

---

### TC-08 — True/False: Both Options Rendered Correctly

| Field | Value |
|-------|-------|
| **Test Item** | TI-03 Question Types |
| **Objective** | Verify that T/F questions show exactly two buttons labelled "True" and "False" |
| **Preconditions** | Game reaches a question with `type: 'tf'` |
| **Input** | Observe the answer area |
| **Expected Result** | Two wide buttons appear: "True" and "False"; no A–D labels shown |
| **Actual Result** | Rendered correctly without option labels. |
| **Status** | ✅ Pass |

---

### TC-09 — FITB: Accepted Answer (Case-Insensitive)

| Field | Value |
|-------|-------|
| **Test Item** | TI-03 Question Types |
| **Objective** | Verify that FITB answers are accepted regardless of capitalisation |
| **Preconditions** | Game is on a FITB question; correct answer is "test plan" |
| **Input** | Type `TEST PLAN` and submit |
| **Expected Result** | Answer is accepted as correct |
| **Actual Result** | Accepted correctly. |
| **Status** | ✅ Pass |

---

### TC-10 — FITB: Wrong Answer Rejected

| Field | Value |
|-------|-------|
| **Test Item** | TI-03 Question Types |
| **Objective** | Verify that a clearly wrong FITB answer is rejected |
| **Preconditions** | Game is on a FITB question |
| **Input** | Type `xyz` and submit |
| **Expected Result** | Answer is rejected; end screen shows the correct answer |
| **Actual Result** | Rejected correctly. |
| **Status** | ✅ Pass |

---

### TC-11 — Matching: Bi-Directional Selection

| Field | Value |
|-------|-------|
| **Test Item** | TI-03 Question Types |
| **Objective** | Verify that matching works when starting from either the left or right column |
| **Preconditions** | Game is on a Matching question |
| **Input (a)** | Click a left item, then click a right item |
| **Input (b)** | Click a right item, then click a left item |
| **Expected Result** | Both interaction orders create a valid connection between the two items |
| **Actual Result** | Both directions work correctly. |
| **Status** | ✅ Pass |

---

### TC-12 — Matching: Remove All Clears Connections

| Field | Value |
|-------|-------|
| **Test Item** | TI-03 Question Types |
| **Objective** | Verify that "Remove All" resets all connections |
| **Preconditions** | At least one pair has been connected on a Matching question |
| **Input** | Click "Remove All" |
| **Expected Result** | All connections are cleared; "Confirm All Pairs" button disappears; "Remove All" button also disappears |
| **Actual Result** | All cleared correctly. |
| **Status** | ✅ Pass |

---

### TC-13 — Matching: Submit Requires All Pairs

| Field | Value |
|-------|-------|
| **Test Item** | TI-03 Question Types |
| **Objective** | Verify that "Confirm All Pairs" only appears when every item is connected |
| **Preconditions** | Matching question is active |
| **Input** | Connect only a subset of the pairs |
| **Expected Result** | "Confirm All Pairs" button is not visible |
| **Actual Result** | Button correctly hidden until all pairs connected. |
| **Status** | ✅ Pass |

---

### TC-14 — 50:50 Lifeline: Removes Exactly Two Wrong Options

| Field | Value |
|-------|-------|
| **Test Item** | TI-04 Lifeline System |
| **Objective** | Verify that 50:50 hides exactly two incorrect options, leaving the correct one and one wrong one |
| **Preconditions** | Game is on an MCQ question; 50:50 has not been used |
| **Input** | Click the 50:50 lifeline button |
| **Expected Result** | Two answer buttons become hidden; correct answer remains visible; one distractor remains |
| **Actual Result** | Two wrong options hidden correctly. |
| **Status** | ✅ Pass |

---

### TC-15 — 50:50 Lifeline: Disabled for T/F Questions

| Field | Value |
|-------|-------|
| **Test Item** | TI-04 Lifeline System |
| **Objective** | Verify that the 50:50 lifeline cannot be used on True/False questions |
| **Preconditions** | Game is on a T/F question |
| **Input** | Observe the lifeline bar |
| **Expected Result** | 50:50 button is visually disabled and non-clickable |
| **Actual Result** | Button disabled correctly for T/F questions. |
| **Status** | ✅ Pass |

---

### TC-16 — Phone a Friend: Valid Hint for FITB

| Field | Value |
|-------|-------|
| **Test Item** | TI-04 Lifeline System |
| **Objective** | Verify that the Phone lifeline provides a meaningful text hint for Fill in the Blank questions (not "undefined") |
| **Preconditions** | Game is on a FITB question; Phone lifeline not yet used |
| **Input** | Click the Phone lifeline, select an expert |
| **Expected Result** | Expert either quotes a valid accepted answer or says they cannot recall — no "undefined" or blank text |
| **Actual Result** | Correct text displayed after fix (see IR-29119M-001). |
| **Status** | ✅ Pass (after fix) |

---

### TC-17 — Phone a Friend: Valid Hint for Matching

| Field | Value |
|-------|-------|
| **Test Item** | TI-04 Lifeline System |
| **Objective** | Verify that the Phone lifeline provides a valid pair suggestion for Matching questions |
| **Preconditions** | Game is on a Matching question; Phone lifeline not yet used |
| **Input** | Click the Phone lifeline, select an expert |
| **Expected Result** | Expert suggests a specific pair in the format `"Left item" → "Right item"` |
| **Actual Result** | Correct format displayed after fix (see IR-29119M-001). |
| **Status** | ✅ Pass (after fix) |

---

### TC-18 — Lifeline: Each Lifeline Used Only Once

| Field | Value |
|-------|-------|
| **Test Item** | TI-04 Lifeline System |
| **Objective** | Verify that a lifeline cannot be used more than once per game |
| **Preconditions** | A lifeline has already been used |
| **Input** | Attempt to click the same lifeline button again |
| **Expected Result** | Button is permanently disabled for the rest of the game |
| **Actual Result** | Correctly disabled after first use. |
| **Status** | ✅ Pass |

---

### TC-19 — Timer: Counts Down and Expires

| Field | Value |
|-------|-------|
| **Test Item** | TI-05 Timer System |
| **Objective** | Verify that the timer counts down and triggers an automatic wrong answer on expiry |
| **Preconditions** | Game is on any question; timer is active |
| **Input** | Wait without selecting an answer |
| **Expected Result** | Timer bar depletes to zero; game treats it as a wrong answer; end screen or next question loads accordingly |
| **Actual Result** | Time-up handled correctly. |
| **Status** | ✅ Pass |

---

### TC-20 — Timer: Longer Duration for Matching Questions

| Field | Value |
|-------|-------|
| **Test Item** | TI-05 Timer System |
| **Objective** | Verify that Matching questions receive more time than MCQ at the same difficulty |
| **Preconditions** | Game has both an MCQ and a Matching question at the same difficulty level |
| **Input** | Observe the timer bar duration for each |
| **Expected Result** | Matching timer is visibly longer (e.g. 50 s vs 25 s for easy) |
| **Actual Result** | Per-type timer correctly applied. |
| **Status** | ✅ Pass |

---

### TC-21 — Walk Away: Correct Prize Awarded

| Field | Value |
|-------|-------|
| **Test Item** | TI-02 Game Engine |
| **Objective** | Verify that walking away awards the current prize |
| **Preconditions** | Player has answered at least one question correctly |
| **Input** | Click "Walk Away" → confirm |
| **Expected Result** | End Screen shows the prize earned at the time of walking away |
| **Actual Result** | Correct prize displayed. |
| **Status** | ✅ Pass |

---

### TC-22 — Leaderboard: Score Saved After Game

| Field | Value |
|-------|-------|
| **Test Item** | TI-06 Leaderboard |
| **Objective** | Verify that the player's score is saved to the Supabase database after a game ends |
| **Preconditions** | Supabase backend is online; game has just ended |
| **Input** | Complete a full game (win, lose, or walk away) |
| **Expected Result** | Player name, score, and result appear in the leaderboard on the End Screen and Welcome Screen |
| **Actual Result** | Score saved and visible. |
| **Status** | ✅ Pass |

---

### TC-23 — Leaderboard: Real-Time Update

| Field | Value |
|-------|-------|
| **Test Item** | TI-06 Leaderboard |
| **Objective** | Verify that the leaderboard updates in real time when another player finishes |
| **Preconditions** | Two devices are open; leaderboard is visible on device A |
| **Input** | Complete a game on device B |
| **Expected Result** | Device A's leaderboard updates automatically without a page refresh |
| **Actual Result** | Real-time update observed within 1–2 seconds. |
| **Status** | ✅ Pass |

---

### TC-24 — Dark/Light Mode Toggle

| Field | Value |
|-------|-------|
| **Test Item** | TI-08 UI |
| **Objective** | Verify that the theme toggle switches between dark and light mode and persists |
| **Preconditions** | Application is open |
| **Input** | Click the theme toggle button; reload the page |
| **Expected Result** | Theme switches immediately; the selected theme is remembered after reload |
| **Actual Result** | Toggle and persistence both work correctly. |
| **Status** | ✅ Pass |

---

### TC-25 — Mobile Portrait Layout

| Field | Value |
|-------|-------|
| **Test Item** | TI-08 UI / Responsiveness |
| **Objective** | Verify that the game screen renders correctly in mobile portrait mode without overflow |
| **Preconditions** | Application opened in Chrome DevTools mobile simulation (390×844) or a real mobile device |
| **Input** | Navigate through the welcome screen, start a game, observe all question types |
| **Expected Result** | All content fits within the viewport; no horizontal scrollbar; buttons are tappable |
| **Actual Result** | Layout correct after responsive fix (see IR-29119M-003). |
| **Status** | ✅ Pass (after fix) |
