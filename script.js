const containerDiv = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
  for (let y = 1; y <= 16; y++) {
    const squareDiv = document.createElement('div');
    squareDiv.textContent = i * y;
    containerDiv.appendChild(squareDiv);
  }
}
