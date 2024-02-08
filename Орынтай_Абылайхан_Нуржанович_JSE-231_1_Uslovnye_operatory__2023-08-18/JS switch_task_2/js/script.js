// Второе задание
let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
let operation = prompt("Введите операцию (+,-,*,/):");

let result;

switch(operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        alert("Некорректная операция");
}

alert(`Результат: ${result}`);