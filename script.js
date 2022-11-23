function makeGrid(perSide) {
    container.innerHTML = "";
    for (let row = 1; row <= perSide; row++) {
        for (let column = 1; column <= perSide; column++) {
            const item = document.createElement('div');
            item.classList.add('item');
            item.style.gridRow = `${row} / ${row}`;
            item.style.gridColumn = `${column} / ${column}`;
            container.appendChild(item);
            item.addEventListener('mouseover', event => event.target.classList.add('hover'))
        }
    }
} 

function newGrid() {
    let gridSize = prompt('Enter new grid size\nMaximum: 100 :)');
    if (gridSize > 100)
        while (gridSize > 100) gridSize = prompt('Incorrect size :/\nPlz choose size not bigger than 100')
    makeGrid(gridSize);
}

const container = document.querySelector('.container');

makeGrid(16);

const newGridButton = document.querySelector('button.newGridButton');
newGridButton.addEventListener('click', newGrid);