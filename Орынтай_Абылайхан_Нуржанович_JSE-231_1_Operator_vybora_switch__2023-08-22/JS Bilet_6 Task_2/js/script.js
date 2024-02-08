// Задание 2
let color = parseInt(prompt("Введи число от 1 до 7 для цвета:")); 
let сolorName;

switch(color) {
    case 1:
        colorName = "Красный";
        break;
    case 2:
        colorName = "Синий";
        break;
    case 3:
        colorName = "Зеленый";
        break;
    case 4:
        colorName = "Желтый";
        break;
    case 5:
        colorName = "Оранжевый";
        break;
    case 6:
        colorName = "Фиолетовый";
        break;
    case 7:
        colorName = "Белый";
        break;
    default:
        colorName = "Вы ввели неправильное  число";
        break;
}
console.log(colorName);