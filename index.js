const KEYS = document.querySelectorAll('.key');

function playSound(event) {
  const drumKick = document.querySelector(`audio[data-key="${event.key}"]`);
  const key = document.querySelector(`.key[data-key="${event.key}"]`);
  if (!drumKick || !key) return;
  key.classList.add('active');
  drumKick.currentTime = 0;
  drumKick.play();
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('active');
}

KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
