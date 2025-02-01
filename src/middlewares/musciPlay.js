export const musikPlaying = (audio, mulai) => {
  if (mulai) {
    audio.play();
  } else {
    audio.pause();
  }
};
