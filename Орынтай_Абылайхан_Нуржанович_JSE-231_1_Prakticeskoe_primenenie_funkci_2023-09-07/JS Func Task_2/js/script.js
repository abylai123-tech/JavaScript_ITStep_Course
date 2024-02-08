// Задание 2
// Создаем функцию, которая принимает часы, минуты и секунды и возвращает их сумму в секундах.
function timeToSeconds(hours, minutes, seconds) {
   // Вычисляем общее количество секунд.
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
}

// Запрашиваем у пользователя ввод часов, минут и секунд через диалоговые окна.
let hours = parseInt(prompt("Введите часы:"));
let minutes = parseInt(prompt("Введите минуты:"));
let seconds = parseInt(prompt("Введите секунды:"));

// Проверяем, что введенные значения для часов, минут и секунд являются целыми числами.
if (Number.isInteger(hours) && Number.isInteger(minutes) && Number.isInteger(seconds)) {
  // Если условие выполняется, вызываем функцию timeToSeconds для преобразования времени в секунды.
  let result = timeToSeconds(hours, minutes, seconds);
  // Выводим результат в диалоговом окне.
  alert("Время в секундах:" + result);
} else {
  // Если введенные значения не являются целыми числами, выводим сообщение об ошибке.
  alert("Пожалуйста, введите числа для часов, минут и секунд.");
}