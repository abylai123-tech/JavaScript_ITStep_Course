// Задание 7
// Функция для изменения высоты прямоугольника
function changeRectangleHeight(rectangle, newHeight) {
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
    typeof newHeight !== 'number'
  ) {
    return undefined; 
  }

  // Изменяем высоту прямоугольника
  rectangle.topLeft.y = rectangle.bottomRight.y + newHeight;

  return rectangle; // Возвращаем объект-прямоугольник с обновленной высотой
}
  
// Создаем объект-прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30 },
  bottomRight: { x: 20, y: 15 }
};

// Вызываем функцию для изменения высоты прямоугольника на 5 единиц
let newHeight = 5;
let updatedRectangle = changeRectangleHeight(rectangle, newHeight);

if (updatedRectangle !== undefined) {
  console.log('Измененный прямоугольник:');
  console.log('Левая верхняя точка: (' + updatedRectangle.topLeft.x + ', ' + updatedRectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' + updatedRectangle.bottomRight.x + ', ' + updatedRectangle.bottomRight.y + ')');
  console.log('Ширина: ' + (updatedRectangle.bottomRight.x - updatedRectangle.topLeft.x));
  console.log('Новая высота: ' + (updatedRectangle.topLeft.y - updatedRectangle.bottomRight.y));
}
