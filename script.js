const container = document.querySelector('.container');

// loopa och skapa 16 squares
//appenda de till container 

for(let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.setAttribute("class", "square");
    container.appendChild(square);
}