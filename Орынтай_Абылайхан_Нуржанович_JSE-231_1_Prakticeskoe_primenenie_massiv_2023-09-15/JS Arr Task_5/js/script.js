// Задание 5
let dynamicArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь
for (let i = 0; i < size; i++) {
  dynamicArray[i] = +prompt("Введите значение элемента с индексом " + i);
}

console.log("Ваш динамический массив:", dynamicArray);

// Перезаписываем массив в обратном порядке без использования reverse()
let reversedArray = [];
for (let i = dynamicArray.length - 1; i >= 0; i--) {
  reversedArray.push(dynamicArray[i]);
}

console.log("Массив в обратном порядке:", reversedArray);