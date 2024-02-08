// Задание 3
let array1 = [];
let array2 = [];

// Заполняем первый массив
for (let i = 0; i < 7; i++) {
  let input1 = prompt("Введите число для первого массива (элемент с индексом " + i + "):");
  let number1 = parseFloat(input1);
  array1.push(number1);
}

// Заполняем второй массив
for (let i = 0; i < 7; i++) {
  let input2 = prompt("Введите число для второго массива (элемент с индексом " + i + "):");
  let number2 = parseFloat(input2);
  array2.push(number2);
}

// Сравниваем значения по индексам и выводим информацию
for( let i = 0; i < 7; i++) {
  if(array1[i] === array2[i]) {
    console.log("Элемент с индексом " + i + " в обоих массивах равен " + array1[i]);
  } else {
    console.log("Элемент с индексом " + i + " в первом массиве равен " + array1[i] + ", а во втором массиве - " + array2[i]);
  }
}