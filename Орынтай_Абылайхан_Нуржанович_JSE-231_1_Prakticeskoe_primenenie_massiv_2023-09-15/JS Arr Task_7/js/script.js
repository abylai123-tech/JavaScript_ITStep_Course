// Задание 7
let dynamicArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь
for (let i = 0; i < size; i++) {
  dynamicArray[i] = +prompt("Введите значение элемента с индексом " + i);
}

console.log("Ваш динамический массив:", dynamicArray);

// Находим наибольшее число в массиве
let maxValue = dynamicArray[0]; // Предполагаем, что первый элемент - наибольшее значение

for (let i = 1; i < dynamicArray.length; i++) {
  if (dynamicArray[i] > maxValue) {
    maxValue = dynamicArray[i];
  }
}

console.log("Наибольшее число в массиве:", maxValue);