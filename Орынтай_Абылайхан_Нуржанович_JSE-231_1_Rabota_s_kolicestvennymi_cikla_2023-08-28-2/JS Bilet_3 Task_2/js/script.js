//Задание 2
let start = parseInt(prompt("Введите начало диапазона:"));
let end = parseInt(prompt("Введите конец диапазона:"));
let sum = 0;
let count = 0;

if (start <= end) {
    for (let i = start; i <= end; i++) {
        sum += i;
        count++;
    }
} else {
    for (let i = start; i >= end; i--) {
        sum += i;
        count++;
    }
}

let average = sum / count;

console.log("Среднее арифметическое чисел в диапазоне: " + average);