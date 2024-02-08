// Задание 1
function formatTime(hours, minutes, seconds) {
  // Проверяем, чтобы часы, минуты и секунды были в допустимых диапозонах
  if (hours < 0 || hours > 23 || minutes < 0 || minutes
    > 59 || seconds < 0 || seconds > 59)
    return "Неверное время";

// Функция для добавления нуля перед числами меньше 10 (для формата)
function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

// Форматируем часы, минуты и секунды с добавлением нулей
let formattedHours = addLeadingZero(hours);
let formattedMinutes = addLeadingZero(minutes);
let formattedSeconds = addLeadingZero(seconds);

// Склеиваем итоговую строку в формате "чч:мм:сс"
return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

// Использование функции
let hours = parseInt(prompt("Введите часы:"));
let minutes = parseInt(prompt("Введите минуты:"));
let seconds = parseInt(prompt("Введите секунды:"));

let formattedTime = formatTime(hours,minutes,seconds);
console.log("Время в формате 'чч:мм:cc': " + formattedTime);