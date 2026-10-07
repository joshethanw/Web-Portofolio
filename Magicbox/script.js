
const boxes = document.getElementById('boxes');
const magicButton = document.getElementById('btn');
const gridSize = 4;
const tileSize = 125;

function createBoxes() {
  for (let row = 0; row < gridSize; row += 1) {
    for (let column = 0; column < gridSize; column += 1) {
      const box = document.createElement('div');

      box.className = 'box';
      box.style.backgroundPosition = `${-column * tileSize}px ${-row * tileSize}px`;
      boxes.appendChild(box);
    }
  }
}

magicButton.addEventListener('click', () => {
  boxes.classList.toggle('big');
});

createBoxes();
