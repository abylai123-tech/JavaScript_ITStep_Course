// Задание 3
let dynamicArray = [];
let size = +prompt("Введите размер массива");

// Заполняем массив значениями, которые вводит пользователь
for (let i = 0; i < size; i++) {
  dynamicArray[i] = +prompt("Введите значение элемента с индексом " + i);
}

console.log("Ваш динамический массив:", dynamicArray);

// Проверяем, что в массиве есть хотя бы два элемента
if (dynamicArray.length >= 2) {
    // Обмен значениями первого и последнего элементов
    let temp = dynamicArray[0];
    dynamicArray[0] = dynamicArray[dynamicArray.length - 1];
    dynamicArray[dynamicArray.length - 1] = temp;
  
    console.log("Массив с первым и последним элементами, перезаписанными местами:", dynamicArray);
  } else {
    console.log("Массив должен содержать хотя бы два элемента для обмена.");
  }