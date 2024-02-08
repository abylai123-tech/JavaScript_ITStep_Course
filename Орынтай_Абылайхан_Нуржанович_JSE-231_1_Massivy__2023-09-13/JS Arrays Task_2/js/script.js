// Задание 2
let numbers = [];

// Заполняем массив при помощи prompt
for (let i = 0; i < 5; i++) {
  let input = prompt("Введите число: " + (i + 1));
  let number = parseFloat(input);

  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    alert("Вы ввели некорректное число. Пожалуйста, попробуйте снова.");
    i--; 
  }
}

// Выводим массив
console.log("Массив чисел: " + numbers);

// Вычисляем сумму значений массива
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Вычисляем среднее значение
let average = sum / numbers.length;

// Выводим сумму и среднее значение
console.log("Сумма значений: " + sum);
console.log("Среднее значение: " + average);
