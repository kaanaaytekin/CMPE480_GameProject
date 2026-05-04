let _ctx = null;
let _muted = false;

function ac() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
}

function tone(freq, dur, type = 'sine', vol = 0.22, delay = 0) {
    if (_muted) return;
    const c = ac();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    const t = c.currentTime + delay;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.start(t);
    osc.stop(t + dur + 0.02);
}

function sweep(fromFreq, toFreq, dur, type = 'sine', vol = 0.2) {
    if (_muted) return;
    const c = ac();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(fromFreq, c.currentTime);
    osc.frequency.exponentialRampToValueAtTime(toFreq, c.currentTime + dur);
    gain.gain.setValueAtTime(vol, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + dur + 0.02);
}

export const sound = {
    // Correct answer — ascending arpeggio (C5 E5 G5 C6)
    correct() {
        [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.18, 'sine', 0.22, i * 0.1));
    },

    // Win (all 10 correct) — brighter fanfare
    win() {
        const notes = [523, 659, 784, 659, 784, 1047, 1047];
        const times = [0, 0.12, 0.24, 0.36, 0.44, 0.56, 0.72];
        notes.forEach((f, i) => tone(f, 0.22, 'sine', 0.28, times[i]));
        // Add a shimmer on top
        setTimeout(() => tone(2093, 0.5, 'sine', 0.15), 800);
    },

    // Wrong answer — dissonant descending buzz
    wrong() {
        tone(280, 0.14, 'sawtooth', 0.28, 0);
        tone(200, 0.38, 'sawtooth', 0.22, 0.15);
    },

    // Timer tick — played when ≤5 seconds remain
    tick() {
        tone(880, 0.04, 'square', 0.1, 0);
    },

    // Lock in answer — short confirmation beep pair
    lock() {
        tone(660, 0.07, 'sine', 0.16, 0);
        tone(550, 0.07, 'sine', 0.12, 0.09);
    },

    // Lifeline used — rising sweep
    lifeline() {
        sweep(350, 750, 0.3, 'sine', 0.18);
    },

    // Time's up — dramatic descending
    timeUp() {
        tone(440, 0.1, 'sawtooth', 0.28, 0);
        tone(330, 0.1, 'sawtooth', 0.25, 0.13);
        tone(220, 0.45, 'sawtooth', 0.2, 0.26);
    },

    // Walk away — gentle descending farewell
    walkAway() {
        [440, 370, 294].forEach((f, i) => tone(f, 0.22, 'sine', 0.18, i * 0.14));
    },

    toggleMute() { _muted = !_muted; return _muted; },
    isMuted() { return _muted; },
};
