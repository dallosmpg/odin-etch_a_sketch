const root = document.documentElement;
const divContainer = document.querySelector('.div-container')
const resetButton = document.querySelector('.reset');
const newSizeInput = document.querySelector('#newSize');
const newSizeButton = document.querySelector('.reset-color-size');
const newColorInput = document.querySelector('#newColor');
const newColorButton = document.querySelector('.set-new-color');

let currentColor = '#a51d2d';
let isMouseDown = false;

newSizeButton.addEventListener('click', resetAndResizeBoard)

newColorButton.addEventListener('click', function() {
    currentColor = newColorInput.value;
    coloringEventListeners();
})

resetButton.addEventListener('click', resetBoard)

function resetAndResizeBoard() {
    divContainer.innerHTML = "";
    const gridSquareNum = newSizeInput.value;
    createDivSquares(isNaN(gridSquareNum) ? 16
    : gridSquareNum <= 1 ? 16
    : gridSquareNum >= 100 ? 16
    : gridSquareNum);
    returnDivElements();
    coloringEventListeners();
}
function resetBoard() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.background = 'revert';
    })
}

function createDivSquares(num = newSizeInput.value) {
    root.style.setProperty('--gtc', num);
    root.style.setProperty('--gtr', num);
    for (let i = 0; i < (num * num); i++) {
        let newCell = document.createElement('div');
        // /* Naming the cell 1-256 */newCell.innerText = i + 1;
        divContainer.appendChild(newCell).className = `grid-item grid-item-${i}`
        coloringEventListeners();
    }
};

function returnDivElements() {
    const divElements = document.querySelectorAll('.grid-item');
    return divElements;
};

function colorOnHover(e) {
    // rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})
    if (!isMouseDown) return;
    e.currentTarget.style.background=`${currentColor}`
};

function coloringEventListeners() {
    returnDivElements().forEach(element => element.addEventListener('mouseenter', colorOnHover));
};

function checkMouseClick(e) {
    if (e.type === 'mousedown' && e.button === 0) {
        isMouseDown = true;
    }
    else {
        isMouseDown = false
    }
}

divContainer.addEventListener('mousedown', checkMouseClick);
divContainer.addEventListener('mouseup', checkMouseClick);
createDivSquares();