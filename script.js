const divContainer = document.querySelector('.div-container')

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function() {
    divContainer.innerHTML="";
    let gridSquareNum = parseInt(prompt('Choose how many squares you want! (X*X)'));
    createDivSquares(isNaN(gridSquareNum) ? 16
    : gridSquareNum <= 1 ? 16
    : gridSquareNum);
    divContainer.insertAdjacentElement('afterbegin', resetButton);
    returnDivElements()
    red();
})

function createDivSquares(num = 16) {
for (let i = 0; i < (num * num); i++) {
    let newCell = document.createElement('div');
    /* Naming the cell 1-256 */newCell.innerText = i + 1;
    divContainer.appendChild(newCell).className = `grid-item grid-item-${i}`
    }
};
createDivSquares();
function returnDivElements() {
const divElements = document.querySelectorAll('.grid-item');
return divElements;
};

function colorOnHover(e) {
   e.currentTarget.style.background='red';
};
function red() {
returnDivElements().forEach(element => element.addEventListener('mouseenter', colorOnHover))
};
red();