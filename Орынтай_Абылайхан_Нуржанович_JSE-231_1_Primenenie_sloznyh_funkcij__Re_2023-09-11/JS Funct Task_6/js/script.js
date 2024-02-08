// Задание 6
// Создаем объект-прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30 },
  bottomRight: { x: 20, y: 15 }
};

// Функция для изменения ширины прямоугольника
function changeRectangleWidth(rectangle, newWidth) {
  if(
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
    typeof newWidth !== 'number'
  ) {
    return undefined;
  }

  // Изменяем ширину прямоугольника
  rectangle.bottomRight.x = rectangle.topLeft.x + newWidth;

  return rectangle; // Возвращаем объект-прямогуольник с обновленной шириной
}

// Вызываем функцию для изменения ширины прямоугольника на 5 единиц
let newWidth = 5;
let updatedRectangle = changeRectangleWidth(rectangle, newWidth);

if(updatedRectangle !== undefined) {
  console.log('Измененный прямоугольник:');
  console.log('Левая верхняя точка: (' + updatedRectangle.topLeft.x + ', ' + updatedRectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + updatedRectangle.bottomRight.x + ', ' +updatedRectangle.bottomRight.y + ')');
  console.log('Новая ширина: ' + (updatedRectangle.bottomRight.x -updatedRectangle.topLeft.x));
  console.log('Высота: ' + (updatedRectangle.topLeft.y - updatedRectangle.bottomRight.y));
}