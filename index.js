const KEYS = document.querySelectorAll('.key');

function setActive(event) {
  const targetKey = document.querySelector(`.key[data-key="${event.code}"]`);
  const targetAudio = document.querySelector(`audio[data-key="${event.code}"]`);
  if (!targetKey || !targetAudio) return;
  if (targetKey.classList.contains('active')) return;
  targetAudio.currentTime = 0;
  targetAudio.play();
  targetKey.classList.add('active');
}

function setInactive(event) {
  const targetKey = document.querySelector(`.key[data-key="${event.code}"]`);
  const targetAudio = document.querySelector(`audio[data-key="${event.code}"]`);
  if (!targetKey || !targetAudio) return;
  targetKey.classList.remove('active');
}

window.addEventListener('keydown', setActive);

window.addEventListener('keyup', setInactive);