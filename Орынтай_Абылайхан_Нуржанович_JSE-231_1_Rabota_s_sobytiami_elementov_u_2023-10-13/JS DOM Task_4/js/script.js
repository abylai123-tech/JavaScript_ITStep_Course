let currentInput = '';
let currentOperator = '';
let currentResult = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator;
        currentResult = currentInput;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    currentResult = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (currentOperator === '+' && currentInput !== '') {
        currentResult = String(Number(currentResult) + Number(currentInput));
    } else if (currentOperator === '-' && currentInput !== '') {
        currentResult = String(Number(currentResult) - Number(currentInput));
    } else if (currentOperator === '*' && currentInput !== '') {
        currentResult = String(Number(currentResult) * Number(currentInput));
    } else if (currentOperator === '/' && currentInput !== '') {
        if (Number(currentInput) !== 0) {
            currentResult = String(Number(currentResult) / Number(currentInput));
        } else {
            currentResult = 'Error';
        }
    }

    document.getElementById('display').value = currentResult;
    currentInput = currentResult;
    currentOperator = '';
}
