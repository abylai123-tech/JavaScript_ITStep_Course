// Задание 8
let dynamicArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь
for (let i = 0; i < size; i++) {
  dynamicArray[i] = +prompt("Введите значение элемента с индексом " + i);
}

console.log("Ваш динамический массив:", dynamicArray);

// Находим наибольшее и наименьшее число в массиве
let minValue = dynamicArray[0];
let maxValue = dynamicArray[0];

for (let i = 1; i < dynamicArray.length; i++) {
  if (dynamicArray[i] < minValue) {
    minValue = dynamicArray[i];
  }
  if (dynamicArray[i] > maxValue) {
    maxValue = dynamicArray[i];
  }
}

console.log("Наименьшее число в массиве:", minValue);
console.log("Наибольшее число в массиве:", maxValue);

// Меняем местами наименьшее и наибольшее значение
let minIndex = dynamicArray.indexOf(minValue);
let maxIndex = dynamicArray.indexOf(maxValue);

dynamicArray[minIndex] = maxValue;
dynamicArray[maxIndex] = minValue;

console.log("Массив после замены наименьшего и наибольшего значения:", dynamicArray);