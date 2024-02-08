// Задание 12
// Функция для проверки, находится ли точка внутри прямоугольника
function isPointInsideRectangle(rectangle, pointX, pointY) {
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
    typeof pointX !== 'number' ||
    typeof pointY !== 'number'
  ) {
    return false; // Возвращаем false в случае некорректных данных
  }

  // Проверяем, находится ли точка внутри прямоугольника
  if (
    pointX >= rectangle.topLeft.x &&
    pointX <= rectangle.bottomRight.x &&
    pointY >= rectangle.bottomRight.y &&
    pointY <= rectangle.topLeft.y
  ) {
    return true;
  }

  return false;
}

// Создаем объект-прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30 },
  bottomRight: { x: 20, y: 15 }
};

// Координаты точки для проверки
let pointX = 15;
let pointY = 20;

// Проверяем, находится ли точка внутри прямоугольника
let isInside = isPointInsideRectangle(rectangle, pointX, pointY);

if (isInside) {
  console.log('Точка находится внутри прямоугольника.');
} else {
  console.log('Точка не находится внутри прямоугольника.');
}