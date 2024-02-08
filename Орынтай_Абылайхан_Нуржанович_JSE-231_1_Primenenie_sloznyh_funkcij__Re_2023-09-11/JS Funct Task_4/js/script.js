// Задание 4
// Создаем объект-прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30 },
  bottomRight: { x: 20, y: 15 }
};

// Функции для вывода информации о прямоугольнике
function printRectangleInfo(rectangle) {
  console.log('Информация о прямоугольнике:');
  console.log('Левая верхняя точка: (' + rectangle.topLeft.x + ', ' + rectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + rectangle.bottomRight.x + ', ' + rectangle.bottomRight.y + ')');
  console.log('Ширина: ' + (rectangle.bottomRight.x - rectangle.topLeft.x));
  console.log('Высота: ' + (rectangle.topLeft.y - rectangle.bottomRight.y));
}

// Функция для вычисления площади прямоугольника
function getRectangleArea(rectangle) {
  if (
    !rectangle ||
    typeof rectangle !== 'object' ||
    !rectangle.topLeft ||
    !rectangle.bottomRight ||
    typeof rectangle.topLeft !== 'object' ||
    typeof rectangle.bottomRight !== 'object' ||
    !('x' in rectangle.topLeft) ||
    !('y' in rectangle.topLeft) ||
    !('x' in rectangle.bottomRight) ||
    !('y' in rectangle.bottomRight)
  ) {
    return undefined; 
  }

  let width = Math.abs(rectangle.bottomRight.x - rectangle.topLeft.x);
  let height = Math.abs(rectangle.topLeft.y - rectangle.bottomRight.y);

  return width * height;
}

// Вызываем функцию для вывода информации о прямоугольнике
printRectangleInfo(rectangle);

// Вызываем функцию для получения площади прямоугольника и выводим результат
let area = getRectangleArea(rectangle);
if (area !== undefined) {
  console.log('Площадь прямоугольника: ' + area);
}
