// Задание 5
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
  console.log('Площадь прямоугольника: ' + (Math.abs(rectangle.bottomRight.x - rectangle.topLeft.x) * Math.abs(rectangle.topLeft.y - rectangle.bottomRight.y)));
}

// Функция для вычисления периметра прямоугольника
function getRectanglePerimeter(rectangle) {
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

  return 2 * (width + height);
}

// Вызываем фукницию для вывода информации о прямоугольнике
printRectangleInfo(rectangle);

//Вызываем функцию для получения периметра прямоугольника и выводим результат
let perimeter = getRectanglePerimeter(rectangle);
if (perimeter !== undefined) {
  console.log('Периметр прямоугольника ' + perimeter);
}