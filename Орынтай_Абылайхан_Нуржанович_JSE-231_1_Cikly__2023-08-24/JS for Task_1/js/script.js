// Задание 1
let divisor = parseInt(prompt("Введите число, для которого будем искать кратный:"));
for(let i=1;i<=100;i++) {
  if(i % divisor === 0) {  
    console.log(i);
  }
}
