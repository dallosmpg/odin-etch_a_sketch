const divContainer = document.querySelector('.div-container')

for (let i = 0; i < (16 * 16); i++) {
    let newCell = document.createElement('div');
    /* Naming the cell 1-256 */newCell.innerText = i + 1;
    divContainer.appendChild(newCell).className = `grid-item grid-item-${i}`
}
