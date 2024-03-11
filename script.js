const gridsize = 700;

const container = document.querySelector('.square-container');
container.setAttribute("style", `height: ${gridsize}px; width: ${gridsize}px`);

const newGridBtn = document.querySelector('.newGridBtn');
newGridBtn.addEventListener('click', () => handleBtnClick("Pick a number between 1 and 100."));


function createGrid (squarePerSide) {
    const totalSquares = (squarePerSide * squarePerSide);
    const squareSize = `${(gridsize / squarePerSide) }px`;

    for(let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.setAttribute("style", `height: ${squareSize}; width: ${squareSize}`);
        square.setAttribute("class", "square");

        square.addEventListener('mouseover', (e) => onHover(e.target))

        container.appendChild(square);
    }
}

function onHover (square) {
    square.setAttribute("class", "square-hover")
}

function handleBtnClick (text) {
    let answer = prompt(text);
    if(isNaN(answer) || Number(answer) > 100 || Number(answer) < 1) {
        handleBtnClick("Try again. The number should be between 1 and 100.");
    }

    container.innerHTML = "";

    createGrid(answer);
    
}


createGrid(16);