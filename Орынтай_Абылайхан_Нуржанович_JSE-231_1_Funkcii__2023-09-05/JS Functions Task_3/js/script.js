// Задание 3
// Объявление функции combineDigits, которая принимает три цифры и объединяет их в одно число
function combineDigits(digit1,digit2,digit3) {
  // Вычисляем комбинированное число, умножая первую цифру на 100, вторую на 10 и добавляя третью
  let combineNumber = digit1 * 100 + digit2 * 10 + digit3;
  return combineNumber; // Возвращаем полученное число
}
// Запрос пользователя на ввод первой цифры через prompt
let digit1 = parseInt(prompt("Введите первую цифру:"));
// Запрос пользователя на ввод второй цифры через prompt
let digit2 = parseInt(prompt("Введите второю цифру:"));
// Запрос пользователя на ввод третьей цифры через prompt
let digit3 = parseInt(prompt("Введите третью цифру:"));

// Вызов функции combineDigits c введенными цифрами и сохранение результата в переменной combined
let combined = combineDigits(digit1,digit2,digit3);
// Вывод результата (объединенного числа) в консоль
console.log("Объединенное число: " + combined);