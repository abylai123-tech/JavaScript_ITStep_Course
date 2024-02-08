// Задание 3
// Функция, которая принимает количество секунд и форматирует его в строку "чч:мм:сс".
function secondsToTime(seconds) {
  // Рассчитываем часы, минуты и оставшиеся секунды.
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  // Форматируем часы, минуты и секунды в виде строки с ведущими нулями, если необходимо.
  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  // Формируем строку времени.
  let formattedTime = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;

  return formattedTime;  // Возвращаем отформатированную строку времени.
}
// Запрашиваем у пользователя количество секунд через диалоговое окно.
let inputSeconds = parseInt(prompt("Введите количество секунд:"));

if (Number.isInteger(inputSeconds)) {
  // Если ввод пользователя является целым числом, вызываем функцию для форматирования времени.
  let timeString = secondsToTime(inputSeconds);
   // Выводим отформатированную строку времени.
  alert("Время: " + timeString);
} else {
  // Если ввод пользователя не является числом, выводим сообщение об ошибке.
  alert("Пожалуйста, введите числовое значение для количества секунд.");
}