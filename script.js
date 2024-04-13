const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const button = document.querySelector('button');
const buttonDiv = document.querySelector('.button');

let numberOfSquares = '';

button.addEventListener('click', () => {
  numberOfSquares = prompt('Enter number of squares per side(Max 100)');
  if (numberOfSquares !== null) {
    if (numberOfSquares > 100) {
      const errorParagraph = document.createElement('p');
      errorParagraph.textContent =
        'Error. Number of squares(' +
        numberOfSquares +
        ') entered is greater than 100. Try again';
      errorParagraph.classList.add('error');
      container.appendChild(errorParagraph);
    } else if (numberOfSquares > 0) {
      drawGrid(numberOfSquares);
    }
  }
});

function drawGrid(squares) {
  grid.replaceChildren(); // Clear the grid before drawing again
  for (let i = 1; i <= squares; i++) {
    for (let y = 1; y <= squares; y++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'salmon';
      });
      gridItem.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'green';
      });
      grid.appendChild(gridItem);
    }
  }
}
