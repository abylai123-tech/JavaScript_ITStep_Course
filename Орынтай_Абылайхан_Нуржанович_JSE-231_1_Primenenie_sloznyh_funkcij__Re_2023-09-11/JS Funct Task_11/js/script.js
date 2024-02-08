// Задание 11
// Функция для смещения прямоугольника по осям X и Y
function moveRectangleXY(rectangle, xOffset, yOffset) {
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
    typeof xOffset !== 'number' ||
    typeof yOffset !== 'number'
  ) {
    return undefined;
  }

  // Смещяем прямоугольник по осям X и Y
  rectangle.topLeft.x += xOffset;
  rectangle.bottomRight.x += xOffset;
  rectangle.topLeft.y += yOffset;
  rectangle.bottomRight.y += yOffset;

  return rectangle; // Возвращаем объект-прямоугольник с обновленным смещением по осям X и Y
}

// Создаем объект-прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30 },
  bottomRight: { x: 20, y: 15 }
};


// Вызываем функцию для смещения прямоугольника на 5 единиц по осям X и Y
let xOffset = 5;
let yOffset = -10;
let updatedRectangle = moveRectangleXY(rectangle, xOffset, yOffset);

if(updatedRectangle !== undefined) {
  console.log('Измененный прямоугольник:');
  console.log('Левая верхняя точка: (' + updatedRectangle.topLeft.x + ', ' + updatedRectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + updatedRectangle.bottomRight.x + ', ' + updatedRectangle.bottomRight.y + ')');
  console.log('Ширина: ' + (updatedRectangle.bottomRight.x - updatedRectangle.topLeft.x));
  console.log('Высота: ' + (updatedRectangle.topLeft.y - updatedRectangle.bottomRight.y));
}