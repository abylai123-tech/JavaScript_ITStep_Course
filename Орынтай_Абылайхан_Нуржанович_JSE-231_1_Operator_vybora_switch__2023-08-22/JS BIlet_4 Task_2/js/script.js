//Задание 2
let numberofWeek = Number(prompt("Введите номер дня недели"));
let dayName;

switch (numberofWeek) {
    case 1:
        dayName = "Понедельник";
        break;
    case 2: 
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресенье";
        break;
    default:
        dayName = "Такого номера дня не существует";
        break;
}

console.log(dayName);