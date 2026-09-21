// Safe no-op audio utility functions
export function speakSection(text) {
  // Speech synthesis muted as requested
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function playUiSound() {
  // UI blips muted as requested
}

export function playBootChime() {
  // Boot chime muted as requested
}
