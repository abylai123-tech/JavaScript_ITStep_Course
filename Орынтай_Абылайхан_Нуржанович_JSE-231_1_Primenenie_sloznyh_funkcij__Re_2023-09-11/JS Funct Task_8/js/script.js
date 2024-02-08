// Задание 8
// Функция для изменения ширины и высоты прямоугольника
function changeRectangleSize(rectangle, newWidth, newHeight) {
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
    typeof newWidth !== 'number' ||
    typeof newHeight !== 'number'
  ) {
    return undefined;
  }

// Изменяем ширину и высоту прямоугольника
rectangle.bottomRight.x = rectangle.topLeft.x + newWidth;
rectangle.topLeft.y = rectangle.bottomRight.y + newHeight;

return rectangle;
}

// Создаем объект-прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30},
  bottomRight: { x: 20, y:15}
};

// Вызываем функцию для изменения ширины на 5 единиц и высоты на 10 единиц
let newWidth = 5;
let newHeight = 10;
let updatedRectangle = changeRectangleSize(rectangle, newWidth, newHeight);

if(updatedRectangle !== undefined) {
  console.log('Измененный прямоугольник:');
  console.log('Левая верхняя точка: (' + updatedRectangle.topLeft.x +  ', ' + updatedRectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + updatedRectangle.bottomRight.x + ', ' + updatedRectangle.bottomRight.y + ')');
  console.log('Новая ширина: ' + (updatedRectangle.bottomRight.x - updatedRectangle.topLeft.x));
  console.log('Новая высота: ' + (updatedRectangle.topLeft.y - updatedRectangle.bottomRight.y));
}