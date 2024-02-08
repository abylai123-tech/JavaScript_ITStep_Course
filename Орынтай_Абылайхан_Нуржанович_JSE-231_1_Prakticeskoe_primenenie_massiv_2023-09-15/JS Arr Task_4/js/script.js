// Задание 4
let dynamicArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь
for (let i = 0; i < size; i++) {
  dynamicArray[i] = +prompt("Введите значение элемента с индексом " + i);
}

console.log("Ваш динамический массив:", dynamicArray);

// Запрашиваем у пользователя индексы элементов для перестановки
let index1 = +prompt("Введите индекс первого элемента для перестановки");
let index2 = +prompt("Введите индекс второго элемента для перестановки");

// Проверяем, что введенные индексы действительны
if (index1 >= 0 && index1 < dynamicArray.length && index2 >= 0 && index2 < dynamicArray.length) {
  // Перезаписываем элементы местами
  let temp = dynamicArray[index1];
  dynamicArray[index1] = dynamicArray[index2];
  dynamicArray[index2] = temp;

  console.log("Массив после перестановки элементов:", dynamicArray);
} else {
  console.log("Введенные индексы недействительны. Пожалуйста, введите корректные индексы.");
}