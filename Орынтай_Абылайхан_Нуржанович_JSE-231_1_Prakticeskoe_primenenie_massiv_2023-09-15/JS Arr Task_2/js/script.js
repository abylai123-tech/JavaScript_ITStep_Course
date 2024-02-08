// Задание 2
let inputArray = [];
let negativeArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь, и сразу создаем новый массив отрицательных элементов
for (let i = 0; i < size; i++) {
  let value = +prompt("Введите значение элемента с индексом " + i);
  inputArray[i] = value;
  if (value < 0) {
    negativeArray[negativeArray.length] = value; // Добавляем элемент напрямую
  }
}

console.log("Ваш массив:", inputArray);
console.log("Новый массив из отрицательных элементов:", negativeArray);