//Задание 1
let dayNumber;
let lessonsCount;

do {
    dayNumber = parseInt(prompt("Введите номер дня недели (от 1 до 7):"));

    if (dayNumber >= 1 && dayNumber <= 7) {
        switch (dayNumber) {
            case 1: // Понедельник
            case 2: // Вторник
            case 3: // Среда
            case 4: // Четверг
            case 5: // Пятница
                lessonsCount = 6; // Обычно 6 уроков
                break;
            case 6: // Суббота
                lessonsCount = 4; // Обычно 4 урока
                break;
            case 7: // Воскресенье
                lessonsCount = 0; // Нет уроков
                break;
        }

        console.log("В день " + dayNumber + " ой недели уроков: " + lessonsCount);
    } else {
        console.log("Некорректный номер дня недели. Попробуйте еще раз.");
    }
} while (dayNumber < 1 || dayNumber > 7);