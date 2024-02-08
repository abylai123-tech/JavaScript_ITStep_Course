// Задание 2
let minValue = parseInt(prompt("Введите минимальное значение:"));
let maxValue = parseInt(prompt("Введите максимальное значение:"));

for(let i = minValue; i <= maxValue; i++) {
  if(i % 4 == 0) {
    console.log(i);
  }
}