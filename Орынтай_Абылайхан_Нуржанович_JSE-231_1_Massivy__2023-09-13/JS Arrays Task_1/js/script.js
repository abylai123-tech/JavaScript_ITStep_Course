// Задание 1
let numbers = [];
let i = 0;

while (i < 10) {
  let input = prompt(" Введите число " + (i + 1));
  let number = parseFloat(input);

  if (Number.isInteger(number)) {
    numbers.push(number);
    i++;
  } else {
    alert("Вы ввели некорректное число. Пожалуйста, попробуйте снова.");
  }
}

let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

console.log(" Наибольшее значение: " + maxNumber);
console.log(" Наименьшее значение: " + minNumber);
