# Test Plan — ISO/IEC/IEEE 29119 Millionaire

**Document ID:** TP-29119M-001  
**Version:** 1.0  
**Date:** 2026-05-20  
**Course:** CMPE 480 — International Standards on Software Engineering  
**Team:** Team 9  
**Prepared by:** Kaan Aytekin, Müslüm Türker Kırtız, Yaren Atılgan  

---

## 1. Introduction

### 1.1 Purpose

This Test Plan defines the test approach, scope, resources, and schedule for the system-level testing of the **ISO/IEC/IEEE 29119 Millionaire** web application. It is prepared in conformance with **ISO/IEC/IEEE 29119-3** (Test Documentation) and guided by the test process framework defined in **ISO/IEC/IEEE 29119-2** (Test Processes).

### 1.2 Project Overview

ISO/IEC/IEEE 29119 Millionaire is a browser-based educational quiz game that simulates the *Who Wants to Be a Millionaire* format. It is designed for classroom use in CMPE 480, supporting up to 30 concurrent players. The application is built with React 19, Vite 6, and Supabase, and is deployed on Vercel.

### 1.3 Document Scope

This plan covers functional testing of all game features, including question logic, lifelines, the timer system, the leaderboard, and responsive layout. It does not cover load testing beyond 30 concurrent users or security penetration testing.

### 1.4 Definitions and Acronyms

The following terms are used in accordance with **ISO/IEC/IEEE 29119-1** (Concepts and Definitions):

| Term | Definition (per ISO/IEC/IEEE 29119-1) |
|------|---------------------------------------|
| **Test Item** | The object to be tested — the ISO/IEC/IEEE 29119 Millionaire web application |
| **Test Case** | A set of preconditions, inputs, actions, expected results, and postconditions |
| **Test Oracle** | A mechanism that determines whether a test has passed or failed |
| **Test Basis** | The body of knowledge used as the basis for test design (functional requirements, UI behaviour) |
| **Defect** | An imperfection in a work product where it does not meet its requirements |
| **Test Procedure** | A sequence of test cases in execution order with associated actions |
| **MCQ** | Multiple Choice Question |
| **TF** | True/False question type |
| **FITB** | Fill in the Blank question type |
| **Match** | Matching question type |
| **SUT** | System Under Test |

---

## 2. Test Items

The test items covered by this plan are:

| ID | Component | Description |
|----|-----------|-------------|
| TI-01 | Welcome Screen | Name entry, validation, modal dialogs, leaderboard access |
| TI-02 | Game Engine | Question sequencing, answer evaluation, prize ladder |
| TI-03 | Question Types | MCQ, True/False, Fill in the Blank, Matching rendering and scoring |
| TI-04 | Lifeline System | 50:50, Phone a Friend, Ask the Audience |
| TI-05 | Timer System | Per-type and per-difficulty countdown, time expiry handling |
| TI-06 | Leaderboard | Supabase read/write, real-time updates |
| TI-07 | End Screen | Result display, prize amount, wrong-answer review |
| TI-08 | UI / Responsiveness | Dark/light mode, mobile layout |

---

## 3. Features to Be Tested

- Username validation (empty, max length, character restrictions)
- Game start and question progression (3 easy → 3 medium → 4 hard)
- Correct and incorrect answer handling for all four question types
- Prize ladder advancement and safe haven milestone enforcement
- Timer countdown and automatic time-up submission
- 50:50 lifeline removing exactly two wrong options
- Phone a Friend providing a contextually valid hint for all question types
- Ask the Audience displaying a bar chart with valid percentages summing to 100%
- Each lifeline being usable only once per game
- Walk Away triggering with current prize and confirmation dialog
- Leaderboard saving a score after game completion
- Leaderboard updating in real time when another player finishes
- Dark/light mode toggle persisting across screens
- Mobile portrait layout rendering without overflow or clipping

---

## 4. Features Not to Be Tested

| Feature | Reason |
|---------|--------|
| Load testing (>30 users) | Out of classroom scope |
| Cross-browser compatibility (Safari, Firefox) | Deployment target is Chrome/Edge |
| Supabase infrastructure reliability | Third-party service, not under project control |
| Accessibility (WCAG) | Not a stated project requirement |

---

## 5. Test Approach

### 5.1 Test Strategy

Testing was conducted **iteratively alongside development** (test-as-you-build), meaning each feature was manually verified immediately after implementation before the next feature was started. This approach was chosen due to the single-sprint timeline of the project.

All tests follow a **black-box, specification-based approach** as described in **ISO/IEC/IEEE 29119-4**, using the following techniques:

- **Equivalence Partitioning** — for username input validation and FITB answer matching
- **Boundary Value Analysis** — for timer thresholds and prize ladder boundaries
- **Decision Table Testing** — for lifeline availability rules per question type
- **State Transition Testing** — for game state (`idle → locking → revealed → next question`)
- **Use Case Testing** — for full end-to-end game plays (win, lose, walk away, time up)

### 5.2 Test Levels

| Level | Scope | Approach |
|-------|-------|----------|
| Component Testing | Individual React hooks (`useGame`, `useLifelines`, `useTimer`) | Manual inspection of state transitions |
| Integration Testing | Interaction between game engine, lifelines, and timer | Manual scenario-based testing |
| System Testing | Full game flows from welcome screen to end screen | Manual test execution against test cases |

### 5.3 Regression Approach

After any defect fix, the affected test case and its direct neighbours on the prize ladder are re-executed manually.

---

## 6. Test Environment

| Attribute | Value |
|-----------|-------|
| Operating System | Windows 11 / macOS |
| Browser | Google Chrome (latest) |
| Screen resolution | 1920×1080 (desktop), 390×844 (iPhone 14 portrait simulation) |
| Network | Standard broadband; Supabase cloud backend |
| Deployment URL | https://iso29119-millionaire.vercel.app |
| Local dev URL | http://localhost:5173 |
| Database | Supabase PostgreSQL (`scores` table) |

---

## 7. Test Deliverables

| Deliverable | Document ID | Description |
|-------------|-------------|-------------|
| Test Plan | TP-29119M-001 | This document |
| Test Case Specification | TCS-29119M-001 | Detailed test cases for all features |
| Test Procedure Specification | TPS-29119M-001 | Step-by-step execution procedures |
| Test Completion Report | TCR-29119M-001 | Summary of results, defects found, pass/fail status |
| Incident Reports | IR-29119M-001 … | One report per confirmed defect |
| KDT Script | KDT-29119M-001 | Keyword-driven test scripts per ISO/IEC/IEEE 29119-5 |

---

## 8. Testing Tasks and Schedule

Testing was conducted iteratively during the development sprint (2026-04-01 — 2026-05-20).

| # | Task | Responsible | Completed |
|---|------|-------------|-----------|
| 1 | Component-level testing during development | All team members | 2026-05-15 |
| 2 | System test execution (full game flows) | Kaan Aytekin | 2026-05-18 |
| 3 | Defect logging and resolution | Kaan Aytekin | 2026-05-19 |
| 4 | Regression testing after fixes | Kaan Aytekin | 2026-05-19 |
| 5 | Test documentation (plan, cases, procedures) | Kaan Aytekin | 2026-05-20 |
| 6 | KDT script authoring | Kaan Aytekin | 2026-05-20 |
| 7 | Test completion report | Kaan Aytekin | 2026-05-20 |

---

## 9. Risks and Contingencies

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Supabase service outage during demo | Low | High | Test locally with fallback empty state |
| Timer behaviour inconsistent across devices | Medium | Medium | Test on at least two devices/browsers |
| FITB answer matching too strict/too lenient | Medium | High | Verify against `acceptedAnswers` array in source |
| Real-time leaderboard not updating | Low | Medium | Confirm Realtime replication is enabled in Supabase dashboard |

---

## 10. Entry and Exit Criteria

### Entry Criteria (start testing when)
- The application builds without errors (`npm run build`)
- The production URL is accessible
- All four question types are present in the question pool
- Supabase `scores` table is live and Realtime is enabled

### Exit Criteria (testing is complete when)
- All test cases have been executed at least once
- All critical and high-priority defects are resolved or deferred with documented justification
- Test Completion Report is signed off

---

## 11. Team

| Role | Name |
|------|------|
| Lead Developer & Test Manager | Kaan Aytekin |
| Developer & Tester | Müslüm Türker Kırtız |
| Developer & Tester | Yaren Atılgan |
| Course Instructor | — |
