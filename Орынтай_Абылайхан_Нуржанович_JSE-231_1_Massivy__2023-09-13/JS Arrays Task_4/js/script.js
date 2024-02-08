// Задание 4
let array1 = [];
let array2 = [];

// Заполняем первый массив
for (let i = 0; i < 10; i++) {
  let input = prompt("Введите число: " + (i + 1));
  let number = parseFloat(input);

  if (!isNaN(number)) {
    array1.push(number);
  } else {
    alert("Вы ввели некорректное число. Пожалуйста, попробуйте снова.");
    i--; 
  }
}

// Фильтруем четные числа и заполняем второй массив
for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 0) {
    array2.push(array1[i]);
  }
}

console.log("Первый массив:" + array1);
console.log("Второй массив (четные числа): " + array2);
ы