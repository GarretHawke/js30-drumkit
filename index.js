const KEYS = document.querySelectorAll('.key');

function playSound(event) {
  const drumKick = document.querySelector(`audio[data-key=${event.key}]`);
  const key = document.querySelector(`.key[data-key=${event.key}]`);
  key.classList.add('active');
  if (!drumKick) return;
  drumKick.currentTime = 0;
  drumKick.play();
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('active');
}

KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
