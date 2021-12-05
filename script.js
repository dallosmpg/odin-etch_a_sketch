const divContainer = document.querySelector('.div-container')

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function() {
    createDivSquares(0);
    let gridSquareNum = parseInt(prompt('Choose how many squares you want! (X*X)'));
    divContainer.style.background='oldlace';
    createDivSquares(gridSquareNum);
})

function createDivSquares(num = 16) {
for (let i = 0; i < (num * num); i++) {
    let newCell = document.createElement('div');
    /* Naming the cell 1-256 */newCell.innerText = i + 1;
    divContainer.appendChild(newCell).className = `grid-item grid-item-${i}`
    }
}   
createDivSquares();
const divElements = document.querySelectorAll('.grid-item');

function colorOnHover(e) {
   e.currentTarget.style.background='red';
};

divElements.forEach(element => element.addEventListener('mouseenter', colorOnHover))

