//Задание 1
let MyNum = parseInt(prompt("Введите количество раз для вывода символа:#"));
let kol = 0;
let outputString = "";

while(kol < MyNum) {
    outputString += "#";
    kol++;
}

console.log(outputString);