let valueElement = document.getElementById('value');
let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement');

let numericValue = 0;

incrementButton.addEventListener('click', () => {
    numericValue++;
    updateValue();
});

decrementButton.addEventListener('click', () => {
    numericValue--;
    updateValue();
});

function updateValue() {
    valueElement.textContent = numericValue;
}