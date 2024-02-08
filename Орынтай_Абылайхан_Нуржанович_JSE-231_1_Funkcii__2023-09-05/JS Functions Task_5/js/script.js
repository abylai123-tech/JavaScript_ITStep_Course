// Задание 5
// Объявление функции isPerfectNumber, которая проверяет, является ли число совершенным
function isPerfectNumber(number) {
    if (number <= 0) {
        return false; // Отрицательные числа и ноль не могут быть совершенными
    }

    let sumofDivisors = 0; // Инициализация переменной для суммы делителей
    
    // Итерируемся от 1 до (number -1), проверяя каждое число на делитель number
    for(let i = 1; i < number; i++) {
        if (number % i === 0) { // Если i является делителем number
            sumofDivisors += i;  // Добавляем i к сумме делителей
        }
    }
    // Если сумма делителей равна number, то число считается совершенным 
    return sumofDivisors === number;
}
// Запрос числа у пользователя через prompt для проверки на совершенность
let numberToCheck = parseInt(prompt("Введите число для проверки на совершенность:"));
// Вызов функции isPerfectNumber для проверки числа
if(isPerfectNumber(numberToCheck)) {
    console.log(numberToCheck + " является совершенным числом. ");
} else {
    console.log(numberToCheck + " не является совершенным числом. ");
}