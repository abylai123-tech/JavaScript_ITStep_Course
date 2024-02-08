//Задание 1
let proverka;

do{
    let a =+prompt("Введите первое число:");
    let b =+prompt("Введите второе число:");
    let c =+prompt("Введите третье число:");
    let result = a + b * c;
    if(result === 6) {
      alert("Правильно! Результат: " + result);
      break;
    } else {
        alert("Неправильно. Попробуйте еще раз.")
    }
}while(true);