// Задание 1
let a = parseFloat(prompt("Введите размер a двери:"));
let b = parseFloat(prompt("Введите размера b двери"));

let x = parseFloat(prompt("Введите размера x шкафа:"));
let y = parseFloat(prompt("Введите размер y шкафа:"));
let z = parseFloat(prompt("Введите размер z шкафа:"));

if((x <= a && y <= b) || (x <= b && y <= a) || 
   (x <= a && z <= b) || (x <= b && z <= a) ||
   (y <= a && z <= b) || (y <= b && z <= a)) {
    console.log("ДА, можно пронести шкаф сквозь двери:!");
}
else {
    console.log("НЕТ, нельзя пронести шкаф сквозь двери:(");
}