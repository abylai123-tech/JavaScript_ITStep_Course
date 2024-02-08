// Задание 3
let num = parseInt(prompt("Введите простое число"));

if (num <= 1) {
    console.log("Введите число больше 1.");
} else {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " является простым числом.");
    } else {
        console.log(num + " не является простым числом.");
    }
}
