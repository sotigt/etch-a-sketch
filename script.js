const gridsize = 700;
let count = 1.0;

const container = document.querySelector('.square-container');
container.setAttribute("style", `height: ${gridsize}px; width: ${gridsize}px`);

const newGridBtn = document.querySelector('.newGridBtn');
newGridBtn.addEventListener('click', () => handleBtnClick("Pick a number between 1 and 100."));


function createGrid (squarePerSide) {
    container.innerHTML = "";
    const totalSquares = (squarePerSide * squarePerSide);
    const squareSize = `${(gridsize / squarePerSide) }px`;

    for(let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.setAttribute("style", `height: ${squareSize}; width: ${squareSize}`);
        square.setAttribute("class", "square");

        square.addEventListener('mouseenter', (e) => onHover(e.target))

        container.appendChild(square);
    }
}

function onHover (square) {
    square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);  
    square.style.transitionDuration = "0.5s";
    square.style.filter = `brightness(${count})`;

    count = count - 0.1;
   
    if(count <= 0.1){
    count = 1.0;
   }
}

function handleBtnClick (text) {
    let answer = prompt(text);
    if(isNaN(answer) || Number(answer) > 100 || Number(answer) < 1) {
        handleBtnClick("Try again. The number should be between 1 and 100.");
        return;
    }

    createGrid(answer);
    
}


createGrid(16);