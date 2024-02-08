// Задание 2
let MyNum = parseInt(prompt("Введите начальное число (например, 1000):"));
let MyLimit = parseInt(prompt("Введите предел (например, 50):"));
let divisions = 0;

do {
  MyNum /= 2;
  divisions++;
  if(MyNum < 50) {
    break; // Проверяем цикл, если MyNum стало меньше 50
  }
}while(true); // Можно оставить так, чтобы цикл выполнялся бесконечно

alert("Результат: " +MyNum);
console.log("Результат:", MyNum);
console.log("Количество делений:",divisions);
