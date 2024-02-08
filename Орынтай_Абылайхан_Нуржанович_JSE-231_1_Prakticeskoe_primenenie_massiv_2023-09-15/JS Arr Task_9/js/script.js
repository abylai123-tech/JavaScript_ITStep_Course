// Задание 9 
let dynamicArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь
for (let i = 0; i < size; i++) {
  dynamicArray[i] = +prompt("Введите значение элемента с индексом " + i);
}

console.log("Ваш динамический массив:", dynamicArray);

// Запрашиваем у пользователя индекс элемента для удаления
let indexToDelete = +prompt("Введите индекс элемента, который хотите удалить");

// Проверяем, что индекс действительный
if (indexToDelete >= 0 && indexToDelete < dynamicArray.length) {
  // Удаляем элемент по указанному индексу
  dynamicArray.splice(indexToDelete, 1);
  console.log("Массив после удаления элемента:", dynamicArray);
} else {
  console.log("Введенный индекс недействителен. Пожалуйста, введите корректный индекс.");
}