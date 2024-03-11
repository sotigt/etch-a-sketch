const gridsize = 700;
const container = document.querySelector('.square-container');
container.setAttribute("style", `height: ${gridsize}px; width: ${gridsize}px`);


function createGrid (squarePerSide) {
    const totalSquares = (squarePerSide * squarePerSide);
    const squareSize = `${(gridsize / squarePerSide) }px`;

    for(let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.setAttribute("style", `height: ${squareSize}; width: ${squareSize}`);
        square.setAttribute("class", "square");

        container.appendChild(square);
    }
}


createGrid(30)