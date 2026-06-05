// Web Audio API Programmatic Synthesizer
// This utility synthesizes sound effects in real-time, eliminating network latency or broken asset issues.

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 1. Cricket Shot ("Thwack" + small echo)
export function playCricketShot() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // The impact oscillator (bat striking ball)
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(120, now);
  osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);

  gain.gain.setValueAtTime(0.8, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.09);

  // The high frequency click
  const clickOsc = ctx.createOscillator();
  const clickGain = ctx.createGain();

  clickOsc.type = 'sine';
  clickOsc.frequency.setValueAtTime(900, now);
  clickOsc.frequency.exponentialRampToValueAtTime(200, now + 0.02);

  clickGain.gain.setValueAtTime(0.4, now);
  clickGain.gain.exponentialRampToValueAtTime(0.01, now + 0.02);

  clickOsc.connect(clickGain);
  clickGain.connect(ctx.destination);
  clickOsc.start(now);
  clickOsc.stop(now + 0.03);

  // Faint stadium cheer noise
  synthesizeStadiumCheer(ctx, now + 0.03, 1.2);
}

// 2. Cinema Projector Hum + Ambient String Swell
export function playCinemaSwell() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Warm hum
  const humOsc = ctx.createOscillator();
  const humGain = ctx.createGain();

  humOsc.type = 'sine';
  humOsc.frequency.setValueAtTime(80, now); // Low frequency hum
  // Slight LFO modulation
  humOsc.frequency.linearRampToValueAtTime(85, now + 0.5);
  humOsc.frequency.linearRampToValueAtTime(80, now + 1.0);

  humGain.gain.setValueAtTime(0.2, now);
  humGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);

  humOsc.connect(humGain);
  humGain.connect(ctx.destination);
  humOsc.start(now);
  humOsc.stop(now + 1.3);

  // Spotlight chord swell
  const chords = [196.00, 261.63, 329.63, 392.00]; // G3, C4, E4, G4 major chord
  chords.forEach((freq, index) => {
    const oscNode = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscNode.type = 'sine';
    oscNode.frequency.setValueAtTime(freq - 10, now);
    oscNode.frequency.linearRampToValueAtTime(freq, now + 0.8);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.15, now + 0.4);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

    oscNode.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscNode.start(now);
    oscNode.stop(now + 1.6);
  });
}

// 3. Achievement / Success Ring (Bell chime / Crowd Cheers "Six!")
export function playAchievementSound(isCricket) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  if (isCricket) {
    // Crowd roaring "Sixer!"
    playCricketShot(); // Double hit
    synthesizeStadiumCheer(ctx, now, 2.0);
  } else {
    // Camera flash click + dramatic bell ring
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    osc1.frequency.exponentialRampToValueAtTime(1046.50, now + 0.3); // Sweep up

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(659.25, now); // E5

    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    gain2.gain.setValueAtTime(0.15, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(ctx.destination);
    gain2.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.9);
    osc2.stop(now + 0.9);
  }
}

// Helper: Programmatic noise generator for crowd cheer
function synthesizeStadiumCheer(ctx, startTime, duration) {
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  // Generate white noise with random samples
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  // Create noise source
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  // Filter the noise to sound like a distant crowd roar (bandpass filter around 400Hz - 1000Hz)
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(600, startTime);
  filter.Q.setValueAtTime(1.2, startTime);

  // Fade in and out gain envelope
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.15, startTime + 0.15); // Quick swell
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration); // Long fade

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(startTime);
  noise.stop(startTime + duration);
}
