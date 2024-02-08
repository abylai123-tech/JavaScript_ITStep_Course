//Задание 2
let start = parseInt(prompt("Введите начало диапазона:"));
let end = parseInt(prompt("Введите конец диапазона:"));
let count = 0;

if (start <= end) {
    for (let i = start; i <= end; i++) {
        if (i > 0) {
            count++;
        }
    }
} else {
    for (let i = start; i >= end; i--) {
        if (i > 0) {
            count++;
        }
    }
}

console.log("Количество положительных чисел в диапазоне:" + count);