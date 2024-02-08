// Задание 6
let dynamicArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь
for (let i = 0; i < size; i++) {
  dynamicArray[i] = +prompt("Введите значение элемента с индексом " + i);
}

console.log("Ваш динамический массив:", dynamicArray);

// Находим наименьшее число в массиве
let minValue = dynamicArray[0]; // Предполагаем, что первый элемент - минимальное значение

for (let i = 1; i < dynamicArray.length; i++) {
  if (dynamicArray[i] < minValue) {
    minValue = dynamicArray[i];
  }
}

console.log("Наименьшее число в массиве:", minValue);