// Задание 1
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число");

let userAnswer = prompt("Cколько будет" +num1+ "*" +num2 +"?");
let corrrectAnswer = num1 * num2;

if(parseInt(userAnswer)===corrrectAnswer) {
    console.log("Правильно!");
}
else{
    console.log("Неправильно. Правильный ответ:" + corrrectAnswer);
}
