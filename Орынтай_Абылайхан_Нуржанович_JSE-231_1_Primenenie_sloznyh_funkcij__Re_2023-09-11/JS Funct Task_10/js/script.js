// Задание 10
// Функция для смещения прямоугольника по оси Y
function moveRectangleY(rectangle, offset) {
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
    !('y' in rectangle.bottomRight) ||
    typeof offset !== 'number'
  ) {
    return undefined;
  }

  // Смещаем прямоугольник по оси Y
  rectangle.topLeft.y += offset;
  rectangle.bottomRight.y += offset;

  return rectangle; // Возвращаем объект-прямоугольник с обновленным смещением по оси Y
}

// Cоздаем объект-прямоугольник
let rectangle = {
  topLeft: {x: 10, y: 30},
  bottomRight: {x: 20, y: 15}
};

// Вызываем функцию для смещения прямоугольника еа 5 единиц по оси Y
let yOffset = 5;
let updatedRectangle = moveRectangleY(rectangle, yOffset);

if(updatedRectangle !== undefined) {
  console.log('Измененный прямоугольник:');
  console.log('Левая верхняя точка: (' + updatedRectangle.topLeft.x + ', ' + updatedRectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + updatedRectangle.bottomRight.x + ', ' + updatedRectangle.bottomRight.y + ')');
  console.log('Ширина: ' + (updatedRectangle.bottomRight.x - updatedRectangle.topLeft.x));
  console.log('Высота: ' + (updatedRectangle.topLeft.y - updatedRectangle.bottomRight.y));
}