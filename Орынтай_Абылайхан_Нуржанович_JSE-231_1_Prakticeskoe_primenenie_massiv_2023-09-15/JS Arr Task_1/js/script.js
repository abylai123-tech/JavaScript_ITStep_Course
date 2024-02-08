// Задание 1
let myArr = [];
let razmer, otr = 0, pol = 0, chet = 0, nechet = 0, nuli = 0;

razmer = +prompt("Введите размер массива");

for (let i = 0; i < razmer; i++) {
  myArr[i] = +prompt("Введите значение в элемент с индексом " + i);

  if (myArr[i] < 0) {
    otr++;
  } else if (myArr[i] > 0) {
    pol++;
  } else {
    nuli++;
  }

  if (myArr[i] % 2 === 0) {
    chet++;
  } else {
    nechet++;
  }
}

console.log("Ваш массив:", myArr);
console.log("Количество положительных:", pol);
console.log("Количество отрицательных:", otr);
console.log("Количество четных:", chet);
console.log("Количество нечетных:", nechet);
console.log("Количество нулей:", nuli);