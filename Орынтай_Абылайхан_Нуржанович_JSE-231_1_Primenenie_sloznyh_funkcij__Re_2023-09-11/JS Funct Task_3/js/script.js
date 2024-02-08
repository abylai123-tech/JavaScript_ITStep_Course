// Задание 3
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
}

// Функция для получения высоты прямоугольника
function getRectangleHeight(rectangle) {
  if (
    !rectangle ||
    typeof rectangle !== 'object' ||
    !rectangle.topLeft ||
    !rectangle.bottomRight ||
    typeof rectangle.topLeft !== 'object' ||
    typeof rectangle.bottomRight !== 'object' ||
    !rectangle.topLeft.y ||
    !rectangle.bottomRight.y
  ) { 
    return undefined; 
  }

  return Math.abs(rectangle.topLeft.y - rectangle.bottomRight.y);
}

// Вызываем фукницию для вывожа информации о прямоугольнике
printRectangleInfo(rectangle);

// Вызываем функцию для получения высоты прямоугольника и выводим результат
let height = getRectangleHeight(rectangle);
if (height !== undefined) {
  console.log('Высота прямоугольника: ' + height);
}