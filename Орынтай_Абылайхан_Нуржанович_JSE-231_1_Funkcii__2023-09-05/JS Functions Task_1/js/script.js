// Задание 1
function сompareNumbers(number1, number2) {
  if (number1 < number2) {
    return -1;
  } else if (number1 > number2) {
    return 1;
  } else {
    return 0;
  }
}

let x = +prompt("Введите первое число ");
let y = +prompt("Введите второе число ");
let result = сompareNumbers(x, y); // Вызываем функцию с аргументами x и y

console.log(result);
