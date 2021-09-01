const KEYS = document.querySelectorAll('.key');

function setActiveKeyboard(event) {
  const targetKey = document.querySelector(`.key[data-key="${event.code}"]`);
  const targetAudio = document.querySelector(`audio[data-key="${event.code}"]`);
  if (!targetKey || !targetAudio) return;
  if (targetKey.classList.contains('active')) return;
  targetAudio.currentTime = 0;
  targetAudio.play();
  targetKey.classList.add('active');
}

function setInactiveKeyboard(event) {
  const targetKey = document.querySelector(`.key[data-key="${event.code}"]`);
  const targetAudio = document.querySelector(`audio[data-key="${event.code}"]`);
  if (!targetKey || !targetAudio) return;
  targetKey.classList.remove('active');
}

KEYS.forEach(item => {
  item.addEventListener('mousedown', () => {
    if (item.classList.contains('active')) return;
    const targetAudio = document.querySelector(`audio[data-key="${item.dataset.key}"]`);
    targetAudio.currentTime = 0;
    targetAudio.play();
    item.classList.add('active');
  });
});

KEYS.forEach(item => {
  item.addEventListener('mouseup', () => {
    item.classList.remove('active');
  });
});

window.addEventListener('keydown', setActiveKeyboard);
window.addEventListener('keyup', setInactiveKeyboard);