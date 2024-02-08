//Задание 3
let userCount = parseFloat(prompt("Введите число"));
let userDegree = parseFloat(prompt("Введите указанную степень:"));
let result = 1;
let i = 0;

while ( i < userDegree) {
    result *= userCount;
    i++;
}

console.log(result);