import { Math as PhaserMath, Scene, Utils } from 'phaser';
import { PRIZE_LADDER, QUESTIONS } from '../questions';

const ANSWER_LABELS = ['A', 'B', 'C', 'D'];
const DIFFICULTY_LABELS = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard'
};
const DIFFICULTY_PLAN = ['easy', 'easy', 'easy', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard', 'hard'];
const LEADERBOARD_KEY = 'iso29119MillionaireLeaderboard';
const PLAYER_NAME_KEY = 'iso29119MillionairePlayerName';
const MAX_PLAYER_NAME_LENGTH = 16;
const PHONE_EXPERTS = [
    {
        key: 'expertAlex',
        file: 'Screenshot from 2026-04-22 10-26-32.png',
        name: 'Recep'
    },
    {
        key: 'expertMorgan',
        file: 'Screenshot from 2026-04-22 10-50-45.png',
        name: 'Johnny'
    },
    {
        key: 'expertTaylor',
        file: 'Screenshot from 2026-04-22 10-52-21.png',
        name: 'Sadullah'
    }
];

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        this.load.image('background', 'bg.png');
        this.load.image('callIcon', 'Screenshot from 2026-04-22 10-26-32.png');
        PHONE_EXPERTS.forEach((expert) => {
            this.load.image(expert.key, expert.file);
        });
    }

    create ()
    {
        this.width = this.scale.width;
        this.height = this.scale.height;
        this.playerName = this.getSavedPlayerName();
        this.createWelcomePage();
    }

    startGame ()
    {
        const name = this.playerName.trim();
        if (!name) {
            this.nameFeedbackText?.setText('Please enter a username before starting.');
            return;
        }

        this.playerName = name;
        this.savePlayerName(name);
        this.clearWelcomeInteractions();
        this.answerButtons = [];
        this.lifelineButtons = {};
        this.usedLifelines = {
            fifty: false,
            phone: false,
            audience: false
        };
        this.hiddenAnswers = new Set();
        this.currentQuestionIndex = 0;
        this.gameOver = false;

        this.children.removeAll();
        this.buildQuestionSet();
        this.createBoard();
        this.renderQuestion();
    }

    createWelcomePage ()
    {
        this.children.removeAll();
        this.welcomeInteractiveObjects = [];
        this.infoPanelObjects = [];
        this.input.keyboard?.off('keydown', this.handleNameInput, this);
        this.input.keyboard?.on('keydown', this.handleNameInput, this);
        this.infoPanelOpen = false;
        this.nameCaretVisible = true;

        this.add.image(512, 384, 'background').setDisplaySize(1024, 768).setAlpha(0.22);
        this.add.rectangle(512, 384, 1024, 768, 0x07111f, 0.88);
        this.add.rectangle(512, 92, 1024, 184, 0x0b2545, 0.9);

        const title = this.add.text(512, 74, 'ISO 29119 Millionaire', {
            fontFamily: 'Arial Black',
            fontSize: 46,
            color: '#f8f4d8',
            align: 'center'
        }).setOrigin(0.5);
        this.tweens.add({
            targets: title,
            y: 82,
            duration: 1400,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        this.add.text(512, 130, 'Test your knowledge of ISO/IEC/IEEE 29119 and keyword-driven testing.', {
            fontFamily: 'Arial',
            fontSize: 22,
            color: '#b9d7ff',
            align: 'center',
            wordWrap: { width: 820, useAdvancedWrap: true }
        }).setOrigin(0.5);

        this.add.text(328, 218, 'Username', {
            fontFamily: 'Arial Black',
            fontSize: 22,
            color: '#93f2c4'
        }).setOrigin(0, 0.5);

        const nameInputBox = this.add.rectangle(512, 266, 370, 56, 0x102b4c, 0.98)
            .setStrokeStyle(2, 0x6db7ff)
            .setInteractive({ useHandCursor: true });
        this.welcomeInteractiveObjects.push(nameInputBox);
        this.nameInputText = this.add.text(512, 266, '', {
            fontFamily: 'Arial Black',
            fontSize: 23,
            color: '#ffffff',
            align: 'center',
            wordWrap: { width: 330, useAdvancedWrap: true }
        }).setOrigin(0.5);
        this.updateNameInputText();
        this.nameCaretTimer = this.time.addEvent({
            delay: 500,
            loop: true,
            callback: () => {
                this.nameCaretVisible = !this.nameCaretVisible;
                this.updateNameInputText();
            }
        });

        this.nameFeedbackText = this.add.text(512, 310, 'Type your name, then press Start Game.', {
            fontFamily: 'Arial',
            fontSize: 16,
            color: '#b9d7ff',
            align: 'center'
        }).setOrigin(0.5);

        this.createMenuButton(512, 372, 320, 62, 'Start Game', () => this.startGame(), {
            fill: 0x1c6f4a,
            stroke: 0x7cffb2
        });

        this.createMenuButton(512, 468, 420, 58, 'What is ISO 29119?', () => {
            this.showInfoPanel(
                'What is ISO 29119?',
                'ISO/IEC/IEEE 29119 is an international family of software testing standards. It provides guidance for test processes, test documentation, test design techniques, and related testing activities. The goal is to help teams plan, perform, monitor, control, and improve testing in a consistent and structured way.'
            );
        });

        this.createMenuButton(512, 540, 420, 56, 'What is ISO 29119-5?', () => {
            this.showInfoPanel(
                'What is ISO 29119-5?',
                'ISO/IEC/IEEE 29119-5 focuses on keyword-driven testing. In this approach, reusable keywords represent test actions or business steps. Testers can combine keywords with data to create readable, maintainable, and reusable test cases, especially for automation.'
            );
        });

        this.createMenuButton(512, 622, 320, 54, 'Leaderboard', () => this.showLeaderboardPanel(), {
            fill: 0x163c62,
            stroke: 0x6db7ff
        });
    }

    createMenuButton (x, y, width, height, label, callback, colors = {})
    {
        const box = this.add.rectangle(x, y, width, height, colors.fill ?? 0x173c67, 1)
            .setStrokeStyle(2, colors.stroke ?? 0xffd56a)
            .setInteractive({ useHandCursor: true });
        const text = this.add.text(x, y, label, {
            fontFamily: 'Arial Black',
            fontSize: 22,
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        box.on('pointerover', () => {
            box.setFillStyle(colors.hover ?? 0x22517f);
            this.tweens.add({
                targets: [box, text],
                scaleX: 1.04,
                scaleY: 1.04,
                duration: 120,
                ease: 'Sine.easeOut'
            });
        });
        box.on('pointerout', () => {
            box.setFillStyle(colors.fill ?? 0x173c67);
            this.tweens.add({
                targets: [box, text],
                scaleX: 1,
                scaleY: 1,
                duration: 120,
                ease: 'Sine.easeOut'
            });
        });
        box.on('pointerdown', callback);
        text.setInteractive({ useHandCursor: true });
        text.on('pointerdown', callback);
        this.welcomeInteractiveObjects?.push(box, text);

        return { box, text };
    }

    showInfoPanel (title, body)
    {
        this.infoPanelOpen = true;
        const overlay = this.add.rectangle(512, 384, 1024, 768, 0x000000, 0.62)
            .setInteractive();
        const panel = this.add.rectangle(512, 384, 760, 390, 0x102b4c, 0.98)
            .setStrokeStyle(3, 0x6db7ff);
        const titleText = this.add.text(512, 260, title, {
            fontFamily: 'Arial Black',
            fontSize: 30,
            color: '#ffd56a',
            align: 'center'
        }).setOrigin(0.5);
        const bodyText = this.add.text(512, 388, body, {
            fontFamily: 'Arial',
            fontSize: 21,
            color: '#ffffff',
            align: 'center',
            wordWrap: { width: 650, useAdvancedWrap: true },
            lineSpacing: 8
        }).setOrigin(0.5);

        const closeBox = this.add.rectangle(512, 544, 190, 54, 0x173c67, 1)
            .setStrokeStyle(2, 0xffd56a)
            .setInteractive({ useHandCursor: true });
        const closeText = this.add.text(512, 544, 'Close', {
            fontFamily: 'Arial Black',
            fontSize: 21,
            color: '#ffffff'
        }).setOrigin(0.5);

        const closePanel = () => {
            this.infoPanelOpen = false;
            overlay.destroy();
            panel.destroy();
            titleText.destroy();
            bodyText.destroy();
            closeBox.destroy();
            closeText.destroy();
        };

        closeBox.on('pointerdown', closePanel);
        closeText.setInteractive({ useHandCursor: true });
        closeText.on('pointerdown', closePanel);
        this.infoPanelObjects = [overlay, panel, titleText, bodyText, closeBox, closeText];
    }

    showLeaderboardPanel ()
    {
        this.infoPanelOpen = true;
        const overlay = this.add.rectangle(512, 384, 1024, 768, 0x000000, 0.62)
            .setInteractive();
        const panelObjects = this.renderLeaderboard(512, 384, 720, 430, 'Leaderboard', 10);

        const closeBox = this.add.rectangle(512, 608, 190, 54, 0x173c67, 1)
            .setStrokeStyle(2, 0xffd56a)
            .setInteractive({ useHandCursor: true });
        const closeText = this.add.text(512, 608, 'Close', {
            fontFamily: 'Arial Black',
            fontSize: 21,
            color: '#ffffff'
        }).setOrigin(0.5);

        const modalObjects = [overlay, ...panelObjects, closeBox, closeText];
        modalObjects.forEach((object) => {
            object.setAlpha(0);
            object.setScale(0.9);
        });
        overlay.setScale(1);

        this.tweens.add({
            targets: overlay,
            alpha: 0.62,
            duration: 180,
            ease: 'Sine.easeOut'
        });
        this.tweens.add({
            targets: [...panelObjects, closeBox, closeText],
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 260,
            ease: 'Back.easeOut'
        });

        const closePanel = () => {
            this.tweens.add({
                targets: [...panelObjects, closeBox, closeText],
                alpha: 0,
                scaleX: 0.92,
                scaleY: 0.92,
                duration: 150,
                ease: 'Sine.easeIn'
            });
            this.tweens.add({
                targets: overlay,
                alpha: 0,
                duration: 150,
                ease: 'Sine.easeIn',
                onComplete: () => {
                    this.infoPanelOpen = false;
                    modalObjects.forEach((object) => object.destroy());
                    this.infoPanelObjects = [];
                }
            });
        };

        closeBox.on('pointerover', () => {
            closeBox.setFillStyle(0x22517f);
            this.tweens.add({
                targets: [closeBox, closeText],
                scaleX: 1.05,
                scaleY: 1.05,
                duration: 110,
                ease: 'Sine.easeOut'
            });
        });
        closeBox.on('pointerout', () => {
            closeBox.setFillStyle(0x173c67);
            this.tweens.add({
                targets: [closeBox, closeText],
                scaleX: 1,
                scaleY: 1,
                duration: 110,
                ease: 'Sine.easeOut'
            });
        });
        closeBox.on('pointerdown', closePanel);
        closeText.setInteractive({ useHandCursor: true });
        closeText.on('pointerdown', closePanel);
        this.infoPanelObjects = modalObjects;
    }

    clearWelcomeInteractions ()
    {
        this.input.keyboard?.off('keydown', this.handleNameInput, this);
        this.nameCaretTimer?.remove(false);
        this.nameCaretTimer = null;

        [...(this.welcomeInteractiveObjects ?? []), ...(this.infoPanelObjects ?? [])].forEach((object) => {
            object?.removeAllListeners?.();
            object?.disableInteractive?.();
        });

        this.welcomeInteractiveObjects = [];
        this.infoPanelObjects = [];
        this.infoPanelOpen = false;
        this.nameInputText = null;
        this.nameFeedbackText = null;
    }

    handleNameInput (event)
    {
        if (!this.nameInputText || this.infoPanelOpen) {
            return;
        }

        if (event.key === 'Backspace') {
            this.playerName = this.playerName.slice(0, -1);
        } else if (event.key === 'Enter') {
            this.startGame();
            return;
        } else if (event.key.length === 1 && /^[a-zA-Z0-9 _-]$/.test(event.key) && this.playerName.length < MAX_PLAYER_NAME_LENGTH) {
            this.playerName += event.key;
        } else {
            return;
        }

        this.nameCaretVisible = true;
        this.nameFeedbackText?.setText('Type your name, then press Start Game.');
        this.updateNameInputText();
    }

    updateNameInputText ()
    {
        const caret = this.nameCaretVisible ? '|' : '';
        const label = this.playerName ? `${this.playerName}${caret}` : `Your name${caret}`;
        this.nameInputText?.setText(label);
        this.nameInputText?.setColor(this.playerName ? '#ffffff' : '#7f99bd');
    }

    buildQuestionSet ()
    {
        const pools = QUESTIONS.reduce((acc, question) => {
            acc[question.difficulty] ??= [];
            acc[question.difficulty].push(question);
            return acc;
        }, {});

        Object.values(pools).forEach((pool) => Utils.Array.Shuffle(pool));

        this.questions = DIFFICULTY_PLAN.map((difficulty) => {
            const pool = pools[difficulty] ?? [];
            return pool.shift() ?? QUESTIONS.find((question) => question.difficulty === difficulty) ?? QUESTIONS[0];
        });
    }

    createBoard ()
    {
        this.add.image(512, 384, 'background').setDisplaySize(1024, 768).setAlpha(0.24);
        this.add.rectangle(512, 384, 1024, 768, 0x07111f, 0.84);
        this.add.rectangle(512, 70, 1024, 140, 0x0b2545, 0.9);
        this.add.rectangle(512, 705, 1024, 126, 0x081827, 0.9);

        this.titleText = this.add.text(44, 30, 'ISO 29119 Millionaire', {
            fontFamily: 'Arial Black',
            fontSize: 34,
            color: '#f8f4d8'
        });
        this.subtitleText = this.add.text(48, 78, 'ISO/IEC/IEEE 29119 and 29119-5 quiz game', {
            fontFamily: 'Arial',
            fontSize: 18,
            color: '#b9d7ff'
        });

        this.progressText = this.add.text(690, 34, '', {
            fontFamily: 'Arial Black',
            fontSize: 22,
            color: '#ffffff',
            align: 'right'
        }).setOrigin(0, 0);

        this.prizeText = this.add.text(690, 68, '', {
            fontFamily: 'Arial Black',
            fontSize: 30,
            color: '#ffd56a',
            align: 'right'
        }).setOrigin(0, 0);

        this.questionPanel = this.add.rectangle(512, 258, 890, 186, 0x102b4c, 0.96)
            .setStrokeStyle(3, 0x6db7ff);
        this.questionText = this.add.text(512, 258, '', {
            fontFamily: 'Arial',
            fontSize: 26,
            color: '#ffffff',
            align: 'center',
            wordWrap: { width: 790, useAdvancedWrap: true },
            lineSpacing: 8
        }).setOrigin(0.5);

        this.metaText = this.add.text(512, 153, '', {
            fontFamily: 'Arial Black',
            fontSize: 18,
            color: '#93f2c4',
            align: 'center'
        }).setOrigin(0.5);

        this.createAnswers();
        this.createLifelines();

        this.feedbackText = this.add.text(512, 628, '', {
            fontFamily: 'Arial Black',
            fontSize: 22,
            color: '#ffffff',
            align: 'center',
            wordWrap: { width: 840, useAdvancedWrap: true }
        }).setOrigin(0.5);
    }

    createAnswers ()
    {
        const positions = [
            [282, 430],
            [742, 430],
            [282, 538],
            [742, 538]
        ];

        positions.forEach(([x, y], index) => {
            const box = this.add.rectangle(x, y, 410, 76, 0x12365d, 1)
                .setStrokeStyle(2, 0x5d9ee8)
                .setInteractive({ useHandCursor: true });
            const text = this.add.text(x, y, '', {
                fontFamily: 'Arial',
                fontSize: 20,
                color: '#ffffff',
                align: 'left',
                wordWrap: { width: 340, useAdvancedWrap: true }
            }).setOrigin(0.5);

            box.on('pointerover', () => {
                if (!this.gameOver && !this.hiddenAnswers.has(index)) {
                    box.setFillStyle(0x194c81);
                }
            });
            box.on('pointerout', () => {
                if (!this.gameOver && !this.hiddenAnswers.has(index)) {
                    box.setFillStyle(0x12365d);
                }
            });
            box.on('pointerdown', () => this.selectAnswer(index));

            this.answerButtons.push({ box, text });
        });
    }

    createLifelines ()
    {
        const lifelines = [
            ['fifty', '%50', 315],
            ['phone', 'Call', 512],
            ['audience', 'Audience', 709]
        ];

        lifelines.forEach(([key, label, x]) => {
            const box = this.add.rectangle(x, 704, 156, 50, 0x173c67, 1)
                .setStrokeStyle(2, 0xffd56a)
                .setInteractive({ useHandCursor: true });
            const icon = key === 'phone'
                ? this.add.image(x - 42, 704, 'callIcon').setDisplaySize(30, 30)
                : null;
            const text = this.add.text(key === 'phone' ? x + 16 : x, 704, label, {
                fontFamily: 'Arial Black',
                fontSize: 20,
                color: '#ffffff'
            }).setOrigin(0.5);
            box.on('pointerdown', () => this.useLifeline(key));
            this.lifelineButtons[key] = { box, text, icon };
        });
    }

    renderQuestion ()
    {
        const question = this.questions[this.currentQuestionIndex];
        const prize = PRIZE_LADDER[this.currentQuestionIndex];

        this.gameOver = false;
        this.hiddenAnswers.clear();
        this.feedbackText.setText('');
        this.progressText.setText(`Question ${this.currentQuestionIndex + 1}/${this.questions.length}`);
        this.prizeText.setText(`${this.formatMoney(prize)} TL`);
        this.metaText.setText(`${question.standard} | ${DIFFICULTY_LABELS[question.difficulty]}`);
        this.questionText.setText(question.question);

        this.answerButtons.forEach(({ box, text }, index) => {
            box.setVisible(true).setInteractive({ useHandCursor: true }).setFillStyle(0x12365d).setStrokeStyle(2, 0x5d9ee8);
            text.setVisible(true).setText(`${ANSWER_LABELS[index]}: ${question.options[index]}`);
        });
    }

    selectAnswer (index)
    {
        if (this.gameOver || this.hiddenAnswers.has(index)) {
            return;
        }

        this.gameOver = true;
        const question = this.questions[this.currentQuestionIndex];
        const correctIndex = question.answer;

        this.answerButtons.forEach(({ box }) => box.disableInteractive());
        this.feedbackText.setText('Locking in your answer...');
        this.animateAnswerLock(index, () => this.revealAnswer(index, correctIndex, question));
    }

    animateAnswerLock (index, onComplete)
    {
        const selected = this.answerButtons[index];
        selected.box.setFillStyle(0x245f9f).setStrokeStyle(3, 0xffd56a);

        this.tweens.add({
            targets: [selected.box, selected.text],
            scaleX: 1.06,
            scaleY: 1.06,
            duration: 160,
            yoyo: true,
            repeat: 2,
            ease: 'Sine.easeInOut',
            onComplete
        });
    }

    revealAnswer (index, correctIndex, question)
    {
        this.answerButtons.forEach(({ box, text }, buttonIndex) => {
            if (this.hiddenAnswers.has(buttonIndex)) {
                return;
            }

            const isCorrect = buttonIndex === correctIndex;
            const isSelectedWrong = buttonIndex === index && index !== correctIndex;
            const fill = isCorrect ? 0x118553 : isSelectedWrong ? 0xa83232 : 0x12365d;
            const stroke = isCorrect ? 0x7cffb2 : isSelectedWrong ? 0xff8e8e : 0x5d9ee8;

            box.setFillStyle(fill).setStrokeStyle(isCorrect || isSelectedWrong ? 3 : 2, stroke);

            if (isCorrect || isSelectedWrong) {
                this.tweens.add({
                    targets: [box, text],
                    scaleX: 1.04,
                    scaleY: 1.04,
                    duration: 180,
                    yoyo: true,
                    ease: 'Back.easeOut'
                });
            }
        });

        if (index !== correctIndex) {
            this.feedbackText.setText(`Incorrect answer. The correct answer was ${ANSWER_LABELS[correctIndex]}. Opening explanation...`);
            this.time.delayedCall(1800, () => this.showEndScreen(false, question, index));
            return;
        }

        const currentPrize = PRIZE_LADDER[this.currentQuestionIndex];
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.feedbackText.setText(`Correct! The grand prize is yours: ${this.formatMoney(currentPrize)} TL`);
            this.time.delayedCall(1800, () => this.showEndScreen(true));
            return;
        }

        this.feedbackText.setText(`Correct! You won ${this.formatMoney(currentPrize)} TL. Next question coming up...`);
        this.time.delayedCall(1500, () => {
            this.currentQuestionIndex += 1;
            this.renderQuestion();
        });
    }

    useLifeline (key)
    {
        if (this.gameOver || this.usedLifelines[key]) {
            return;
        }

        this.usedLifelines[key] = true;
        this.lifelineButtons[key].box.disableInteractive().setFillStyle(0x35445a).setStrokeStyle(2, 0x778296);
        this.lifelineButtons[key].text.setColor('#aab3c2');
        this.lifelineButtons[key].icon?.setAlpha(0.45);

        if (key === 'fifty') {
            this.useFiftyFifty();
        } else if (key === 'phone') {
            this.usePhone();
        } else {
            this.useAudience();
        }
    }

    useFiftyFifty ()
    {
        const question = this.questions[this.currentQuestionIndex];
        const wrongIndexes = [0, 1, 2, 3].filter((index) => index !== question.answer);
        Utils.Array.Shuffle(wrongIndexes).slice(0, 2).forEach((index) => {
            this.hiddenAnswers.add(index);
            this.answerButtons[index].box.disableInteractive();
            this.tweens.add({
                targets: [this.answerButtons[index].box, this.answerButtons[index].text],
                alpha: 0,
                scaleX: 0.82,
                scaleY: 0.82,
                duration: 520,
                ease: 'Sine.easeIn',
                onComplete: () => {
                    this.answerButtons[index].box.setVisible(false).setAlpha(1).setScale(1);
                    this.answerButtons[index].text.setVisible(false).setAlpha(1).setScale(1);
                }
            });
        });
        this.feedbackText.setText('The 50:50 lifeline is removing two incorrect answers...');
    }

    usePhone ()
    {
        this.showPhoneExpertSelection();
    }

    showPhoneExpertSelection ()
    {
        this.feedbackText.setText('Choose who you want to call.');

        const overlay = this.add.rectangle(512, 384, 1024, 768, 0x000000, 0.48)
            .setInteractive();
        const panel = this.add.rectangle(512, 342, 640, 300, 0x102b4c, 0.98)
            .setStrokeStyle(3, 0x6db7ff);
        const title = this.add.text(512, 222, 'Choose Your Call Expert', {
            fontFamily: 'Arial Black',
            fontSize: 26,
            color: '#ffd56a',
            align: 'center'
        }).setOrigin(0.5);

        const objects = [overlay, panel, title];
        const positions = [342, 512, 682];

        PHONE_EXPERTS.forEach((expert, index) => {
            const x = positions[index];
            const card = this.add.rectangle(x, 362, 128, 176, 0x173c67, 1)
                .setStrokeStyle(2, 0xffd56a)
                .setInteractive({ useHandCursor: true });
            const portrait = this.add.image(x, 326, expert.key)
                .setDisplaySize(78, 78)
                .setInteractive({ useHandCursor: true });
            const name = this.add.text(x, 404, expert.name, {
                fontFamily: 'Arial Black',
                fontSize: 18,
                color: '#ffffff',
                align: 'center'
            }).setOrigin(0.5);
            const hint = this.add.text(x, 434, 'Call', {
                fontFamily: 'Arial',
                fontSize: 15,
                color: '#b9d7ff',
                align: 'center'
            }).setOrigin(0.5);
            const cardObjects = [card, portrait, name, hint];
            const hoverObjects = [card, name, hint];

            const selectExpert = () => {
                this.tweens.add({
                    targets: hoverObjects,
                    scaleX: 1.08,
                    scaleY: 1.08,
                    duration: 130,
                    yoyo: true,
                    ease: 'Sine.easeOut',
                    onComplete: () => {
                        objects.forEach((object) => object.destroy());
                        this.finishPhoneCall(expert);
                    }
                });
            };

            card.on('pointerover', () => {
                card.setFillStyle(0x22517f);
                this.tweens.add({
                    targets: hoverObjects,
                    scaleX: 1.04,
                    scaleY: 1.04,
                    duration: 120,
                    ease: 'Sine.easeOut'
                });
            });
            card.on('pointerout', () => {
                card.setFillStyle(0x173c67);
                this.tweens.add({
                    targets: hoverObjects,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 120,
                    ease: 'Sine.easeOut'
                });
            });
            card.on('pointerdown', selectExpert);
            portrait.on('pointerdown', selectExpert);
            objects.push(...cardObjects);
        });

        objects.forEach((object) => object.setAlpha(0));
        overlay.setScale(1);
        const scaleTargets = objects.filter((object) => object !== overlay && object.type !== 'Image');
        scaleTargets.forEach((object) => object.setScale(0.92));
        this.tweens.add({
            targets: overlay,
            alpha: 0.48,
            duration: 180,
            ease: 'Sine.easeOut'
        });
        this.tweens.add({
            targets: scaleTargets,
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 260,
            ease: 'Back.easeOut'
        });
        this.tweens.add({
            targets: objects.filter((object) => object.type === 'Image'),
            alpha: 1,
            duration: 220,
            ease: 'Sine.easeOut'
        });
    }

    finishPhoneCall (expert)
    {
        const question = this.questions[this.currentQuestionIndex];
        const givesCorrectAnswer = Math.random() < 0.9;
        const availableWrong = [0, 1, 2, 3].filter((index) => index !== question.answer && !this.hiddenAnswers.has(index));
        const suggestion = givesCorrectAnswer || availableWrong.length === 0
            ? question.answer
            : Utils.Array.GetRandom(availableWrong);

        this.showPhoneAnimation(
            `I think the answer is ${ANSWER_LABELS[suggestion]}.`,
            givesCorrectAnswer ? 'I am pretty confident.' : 'But I am not completely sure.',
            expert
        );
    }

    useAudience ()
    {
        const question = this.questions[this.currentQuestionIndex];
        this.showAudienceAnimation(question.answer);
    }

    showPhoneAnimation (suggestion, confidence, expert)
    {
        this.feedbackText.setText(`Calling ${expert.name}...`);

        const panel = this.add.rectangle(512, 338, 430, 250, 0x102b4c, 0.98)
            .setStrokeStyle(3, 0x6db7ff);
        const icon = this.add.image(512, 260, expert.key).setDisplaySize(56, 56);
        const callingText = this.add.text(512, 342, `Calling ${expert.name}...`, {
            fontFamily: 'Arial Black',
            fontSize: 26,
            color: '#ffd56a',
            align: 'center'
        }).setOrigin(0.5);
        const answerText = this.add.text(512, 412, '', {
            fontFamily: 'Arial',
            fontSize: 21,
            color: '#ffffff',
            align: 'center',
            wordWrap: { width: 360, useAdvancedWrap: true },
            lineSpacing: 6
        }).setOrigin(0.5);

        const objects = [panel, icon, callingText, answerText];
        const scaleObjects = [panel, callingText, answerText];
        objects.forEach((object) => object.setAlpha(0));
        scaleObjects.forEach((object) => object.setScale(0.88));
        icon.setScale(0.7);
        this.tweens.add({
            targets: scaleObjects,
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 260,
            ease: 'Back.easeOut'
        });
        this.tweens.add({
            targets: icon,
            alpha: 1,
            scaleX: 1.55,
            scaleY: 1.55,
            duration: 220,
            ease: 'Back.easeOut'
        });
        this.tweens.add({
            targets: icon,
            angle: 8,
            duration: 90,
            yoyo: true,
            repeat: 11,
            ease: 'Sine.easeInOut'
        });

        this.time.delayedCall(1100, () => {
            callingText.setText(`${expert.name} says:`);
            answerText.setText(`${suggestion}\n${confidence}`);
            this.feedbackText.setText(`Phone lifeline (${expert.name}): ${suggestion} ${confidence}`);
        });

        this.time.delayedCall(3100, () => {
            this.tweens.add({
                targets: scaleObjects,
                alpha: 0,
                scaleX: 0.92,
                scaleY: 0.92,
                duration: 260,
                ease: 'Sine.easeIn',
                onComplete: () => objects.forEach((object) => object.destroy())
            });
            this.tweens.add({
                targets: icon,
                alpha: 0,
                scaleX: 1.25,
                scaleY: 1.25,
                duration: 220,
                ease: 'Sine.easeIn'
            });
        });
    }

    showAudienceAnimation (correctIndex)
    {
        this.feedbackText.setText('The audience is voting...');

        const percentages = this.createAudiencePercentages(correctIndex);
        const panel = this.add.rectangle(512, 338, 520, 286, 0x102b4c, 0.98)
            .setStrokeStyle(3, 0x6db7ff);
        const title = this.add.text(512, 224, 'Audience Vote', {
            fontFamily: 'Arial Black',
            fontSize: 28,
            color: '#ffd56a',
            align: 'center'
        }).setOrigin(0.5);
        const objects = [panel, title];
        const bars = [];

        ANSWER_LABELS.forEach((label, index) => {
            const y = 278 + (index * 42);
            const labelText = this.add.text(300, y, label, {
                fontFamily: 'Arial Black',
                fontSize: 20,
                color: index === correctIndex ? '#93f2c4' : '#ffffff'
            }).setOrigin(0.5);
            const barBg = this.add.rectangle(512, y, 300, 24, 0x07111f, 1)
                .setStrokeStyle(1, 0x5d9ee8);
            const bar = this.add.rectangle(362, y, 1, 18, index === correctIndex ? 0x118553 : 0x245f9f, 1)
                .setOrigin(0, 0.5);
            const percentText = this.add.text(690, y, '0%', {
                fontFamily: 'Arial Black',
                fontSize: 18,
                color: '#ffffff'
            }).setOrigin(0.5);

            objects.push(labelText, barBg, bar, percentText);
            bars.push({ bar, percentText, targetWidth: percentages[index] * 3, percentage: percentages[index] });
        });

        objects.forEach((object) => object.setAlpha(0));
        this.tweens.add({
            targets: objects,
            alpha: 1,
            duration: 220,
            ease: 'Sine.easeOut'
        });

        bars.forEach(({ bar, percentText, targetWidth, percentage }, index) => {
            this.tweens.add({
                targets: bar,
                displayWidth: targetWidth,
                duration: 850 + (index * 90),
                ease: 'Cubic.easeOut',
                onUpdate: () => {
                    const current = Math.round(bar.displayWidth / 3);
                    percentText.setText(`${current}%`);
                },
                onComplete: () => percentText.setText(`${percentage}%`)
            });
        });

        this.time.delayedCall(1200, () => {
            this.feedbackText.setText(`Audience lifeline: The audience chose ${ANSWER_LABELS[correctIndex]} with ${percentages[correctIndex]}%.`);
        });

        this.time.delayedCall(3600, () => {
            this.tweens.add({
                targets: objects,
                alpha: 0,
                duration: 250,
                ease: 'Sine.easeIn',
                onComplete: () => objects.forEach((object) => object.destroy())
            });
        });
    }

    createAudiencePercentages (correctIndex)
    {
        const correctPercentage = PhaserMath.Between(55, 75);
        let remaining = 100 - correctPercentage;
        const percentages = [0, 0, 0, 0];
        percentages[correctIndex] = correctPercentage;
        const wrongIndexes = [0, 1, 2, 3].filter((index) => index !== correctIndex);

        wrongIndexes.forEach((index, order) => {
            if (order === wrongIndexes.length - 1) {
                percentages[index] = remaining;
                return;
            }

            const max = remaining - (wrongIndexes.length - order - 1);
            const value = PhaserMath.Between(1, Math.max(1, max));
            percentages[index] = value;
            remaining -= value;
        });
        return percentages;
    }

    showEndScreen (won, lostQuestion = null, selectedIndex = null)
    {
        const finalPrize = won ? PRIZE_LADDER.at(-1) : this.getSafePrize();
        const rank = this.saveScore(finalPrize, won);

        this.children.removeAll();
        this.cameras.main.fadeIn(450, 7, 17, 31);
        this.add.rectangle(512, 384, 1024, 768, 0x07111f, 1);
        const endTitle = this.add.text(512, won ? 238 : 72, won ? 'Congratulations!' : 'Game Over', {
            fontFamily: 'Arial Black',
            fontSize: won ? 56 : 48,
            color: won ? '#ffd56a' : '#ffffff'
        }).setOrigin(0.5);
        endTitle.setScale(0.8).setAlpha(0);
        this.tweens.add({
            targets: endTitle,
            scaleX: 1,
            scaleY: 1,
            alpha: 1,
            duration: 420,
            ease: 'Back.easeOut'
        });

        this.add.text(512, won ? 326 : 130, `Prize: ${this.formatMoney(finalPrize)} TL`, {
            fontFamily: 'Arial Black',
            fontSize: won ? 34 : 28,
            color: '#93f2c4'
        }).setOrigin(0.5);

        this.add.text(512, won ? 365 : 165, `${this.playerName} placed #${rank}`, {
            fontFamily: 'Arial Black',
            fontSize: won ? 22 : 18,
            color: '#ffd56a',
            align: 'center'
        }).setOrigin(0.5);

        if (won) {
            this.add.text(512, 420, 'Use your ISO 29119 knowledge to reach the top again.', {
                fontFamily: 'Arial',
                fontSize: 22,
                color: '#cfe4ff',
                align: 'center'
            }).setOrigin(0.5);

            this.renderLeaderboard(512, 565, 620, 140, 'Leaderboard', 5);
        } else if (lostQuestion) {
            const correctIndex = lostQuestion.answer;
            const selectedAnswer = selectedIndex === null ? 'No answer selected' : `${ANSWER_LABELS[selectedIndex]}: ${lostQuestion.options[selectedIndex]}`;
            const correctAnswer = `${ANSWER_LABELS[correctIndex]}: ${lostQuestion.options[correctIndex]}`;

            this.add.rectangle(512, 378, 884, 404, 0x102b4c, 0.96)
                .setStrokeStyle(3, 0x6db7ff);

            this.add.text(512, 205, lostQuestion.question, {
                fontFamily: 'Arial Black',
                fontSize: 22,
                color: '#ffffff',
                align: 'center',
                wordWrap: { width: 800, useAdvancedWrap: true },
                lineSpacing: 6
            }).setOrigin(0.5);

            this.add.text(114, 286, `Your answer: ${selectedAnswer}`, {
                fontFamily: 'Arial',
                fontSize: 20,
                color: '#ffb2b2',
                wordWrap: { width: 800, useAdvancedWrap: true }
            }).setOrigin(0, 0.5);

            this.add.text(114, 332, `Correct answer: ${correctAnswer}`, {
                fontFamily: 'Arial Black',
                fontSize: 21,
                color: '#93f2c4',
                wordWrap: { width: 800, useAdvancedWrap: true }
            }).setOrigin(0, 0.5);

            this.add.text(114, 390, 'Explanation', {
                fontFamily: 'Arial Black',
                fontSize: 20,
                color: '#ffd56a'
            }).setOrigin(0, 0.5);

            this.add.text(114, 462, lostQuestion.explanation ?? 'This answer matches the concept tested by the question.', {
                fontFamily: 'Arial',
                fontSize: 19,
                color: '#d9e8ff',
                wordWrap: { width: 800, useAdvancedWrap: true },
                lineSpacing: 7
            }).setOrigin(0, 0.5);
        }

        const restartBox = this.add.rectangle(512, won ? 700 : 670, 260, 58, 0x173c67, 1)
            .setStrokeStyle(2, 0xffd56a)
            .setInteractive({ useHandCursor: true });
        this.add.text(512, won ? 700 : 670, 'Play Again', {
            fontFamily: 'Arial Black',
            fontSize: 22,
            color: '#ffffff'
        }).setOrigin(0.5);
        restartBox.on('pointerdown', () => this.scene.restart());
    }

    renderLeaderboard (x, y, width, height, title, limit)
    {
        const entries = this.getLeaderboard().slice(0, limit);
        const objects = [];
        const panel = this.add.rectangle(x, y, width, height, 0x102b4c, 0.92)
            .setStrokeStyle(2, 0x6db7ff);
        const titleText = this.add.text(x, y - (height / 2) + 34, title, {
            fontFamily: 'Arial Black',
            fontSize: 28,
            color: '#ffd56a',
            align: 'center'
        }).setOrigin(0.5);
        objects.push(panel, titleText);

        if (entries.length === 0) {
            const emptyText = this.add.text(x, y + 18, 'No scores yet.', {
                fontFamily: 'Arial',
                fontSize: 22,
                color: '#b9d7ff',
                align: 'center'
            }).setOrigin(0.5);
            objects.push(emptyText);
            return objects;
        }

        const lines = entries.map((entry, index) => {
            const result = entry.won ? 'WIN' : 'OUT';
            return `${index + 1}. ${entry.name} - ${this.formatMoney(entry.score)} TL (${result})`;
        });

        const scoreText = this.add.text(x, y + 32, lines.join('\n'), {
            fontFamily: 'Arial',
            fontSize: limit > 5 ? 18 : 17,
            color: '#ffffff',
            align: 'center',
            lineSpacing: 6,
            wordWrap: { width: width - 60, useAdvancedWrap: true }
        }).setOrigin(0.5);
        objects.push(scoreText);
        return objects;
    }

    saveScore (score, won)
    {
        const entry = {
            name: this.playerName || 'Player',
            score,
            won,
            date: Date.now()
        };
        const sortedLeaderboard = [...this.getLeaderboard(), entry]
            .sort((a, b) => b.score - a.score || a.date - b.date);
        const rank = sortedLeaderboard.findIndex((item) => item.date === entry.date && item.name === entry.name) + 1;
        const leaderboard = sortedLeaderboard.slice(0, 10);

        try {
            localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
        } catch {
            // Ignore storage failures; the game can still finish normally.
        }

        return rank;
    }

    getLeaderboard ()
    {
        try {
            const parsed = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) ?? '[]');
            if (Array.isArray(parsed)) {
                return parsed
                    .filter((entry) => typeof entry.name === 'string' && Number.isFinite(entry.score))
                    .sort((a, b) => b.score - a.score || a.date - b.date);
            }
        } catch {
            // Ignore malformed storage and fall back to an empty leaderboard.
        }

        return [];
    }

    getSavedPlayerName ()
    {
        try {
            return localStorage.getItem(PLAYER_NAME_KEY) ?? '';
        } catch {
            return '';
        }
    }

    savePlayerName (name)
    {
        try {
            localStorage.setItem(PLAYER_NAME_KEY, name);
        } catch {
            // Ignore storage failures; the typed name remains available this session.
        }
    }

    getSafePrize ()
    {
        if (this.currentQuestionIndex >= 6) {
            return PRIZE_LADDER[5];
        }
        if (this.currentQuestionIndex >= 3) {
            return PRIZE_LADDER[2];
        }
        return 0;
    }

    formatMoney (amount)
    {
        return new Intl.NumberFormat('en-US').format(amount);
    }
}
