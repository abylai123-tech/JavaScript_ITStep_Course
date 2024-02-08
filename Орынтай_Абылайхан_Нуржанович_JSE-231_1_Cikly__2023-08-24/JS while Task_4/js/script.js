//Задание 4
// Запрашиваем у пользователя два числа
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

// Инициализируем переменные для цикла и хранения общих делителей
let currentDivisor = 1; // инициализируем переменную, чтобы начать проверку с делителя 1

// сommonDivisor строка где будет хранится все общие делители
let commonDivisors = "";

// Начинаем цикл, который будет выполняться, пока текущий делитель меньше или равен одному из введенных чисел
while(currentDivisor <= num1 && currentDivisor <= num2) {
    // Проверяем, является ли текущий делитель общим делителем для обоих чисел
    if(num1 % currentDivisor == 0 && num2 % currentDivisor == 0) {
       // Если commonDivisors не пуста, добавляем запятую и пробел
       if(commonDivisors !== ""); { 
         commonDivisors += ",";
       }
       // Добавляем текущий делитель к строке commonDivisors
       commonDivisors += currentDivisor;
    }
    // Увеличиваем текущий делитель на 1 для проверки следующего числа
    currentDivisor++;
}
// Проверяем, есть ли общие делители, и все случаи выводим сообщение ошибки
if(commonDivisors === "") {
    console.log("У чисел " + num1 + " и " + num2 + " нет общих делителей.");
} else {
    console.log("Общие делители чисел " + num1 + " и " + num2 + ":" +commonDivisors);
}