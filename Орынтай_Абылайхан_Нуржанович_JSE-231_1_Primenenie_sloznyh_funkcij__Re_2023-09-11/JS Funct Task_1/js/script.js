// Задание 1
// Создаем объект-прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30 },
  bottomRight: { x: 20, y: 15 }
};

// Функция для вывода информации о прямоугольнике
function printRectangleInfo(rectangle) {
  console.log('Информация о прямоугольнике:');
  console.log('Левая верхняя точка: (' + rectangle.topLeft.x + ', ' + rectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + rectangle.bottomRight.x + ', ' + rectangle.bottomRight.y + ')');
}

// Вызываем функцию для вывода информации о прямоугольнике
printRectangleInfo(rectangle);