//Задание 1
let monthNumber;
let daysInMonth;

while (true) {
    monthNumber = parseInt(prompt("Введите номер месяца (от 1 до 12):"));

    if (monthNumber >= 1 && monthNumber <= 12) {
        if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {
            daysInMonth = 31;
        } else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
            daysInMonth = 30;
        } else {
            // Для февраля делаем дополнительную проверку на високосный год
            let year = parseInt(prompt("Введите год:"));
            if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
        }

        // Выводим результат
        console.log(" В месяце " + monthNumber + " "  + daysInMonth + " дней ");
        break; // Выход из цикла, так как введен правильный месяц
    } else {
        alert("Введите корректный номер месяца (от 1 до 12).");
    }
}