// Задание 9
// Функция для смещения прямоугольника по оси X
function moveRectangleX(rectangle, offset) {
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

  // Смещаем прямоугольник по оси X
  rectangle.topLeft.x += offset;
  rectangle.bottomRight.x += offset;

  return rectangle; // Возвращаем объект-прямоугольник с обновленным по оси X
}

// Создаем объект-прямоугольник
let rectangle = {
  topLeft: {x: 10, y: 30},
  bottomRight: {x: 20, y: 15}
};

// Вызываем функцию для смещения прямоугольника на 5 единиц по оси X
let xOffset = 5;
let updatedRectangle = moveRectangleX(rectangle,xOffset);

if(updatedRectangle !== undefined) {
  console.log('Измененный прямоугольник:');
  console.log('Левая верхняя точка: (' + updatedRectangle.topLeft.x + ', ' + updatedRectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + updatedRectangle.bottomRight.x + ', ' + updatedRectangle.bottomRight.y + ')');
  console.log('Ширина: ' + (updatedRectangle.bottomRight.x - updatedRectangle.topLeft.x));
  console.log('Высота: ' + (updatedRectangle.topLeft.y - updatedRectangle.bottomRight.y));
}