function createBlock() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let newBlock = document.createElement('div');
    newBlock.className = 'color-block';
    newBlock.style.background = randomColor;
    newBlock.onclick = function () {
        this.remove();
    };

    return newBlock;
}

function addColorBlock() {
    let container = document.getElementById('color-container');
    container.appendChild(createBlock());
}