// Задание 2
// Создаем объект прямоугольник
let rectangle = {
  topLeft: { x: 10, y: 30 },
  bottomRight: { x: 20, y: 15 }
};

// Функции для вывода информации о прямоугольнике
function printRectangleInfo(rectangle) {
  console.log('Информация о прямоугольнике:');
  console.log('Левая верхняя точка: (' +rectangle.topLeft.x +  ', ' +  rectangle.topLeft.y + ')');
  console.log('Правая нижняя точка: (' +rectangle.bottomRight.x + ', ' + rectangle.bottomRight.y + ')');
}

// Функция для получения ширины прямоугольника
function getRectangleWidth(rectangle) {
  if (
    !rectangle ||
    typeof rectangle !== 'object' ||
    !rectangle.topLeft ||
    !rectangle.bottomRight ||
    typeof rectangle.topLeft !== 'object' ||
    typeof rectangle.bottomRight !== 'object' ||
    !rectangle.topLeft.x ||
    !rectangle.bottomRight.x
  ) {
    return undefined; 
  }

  return Math.abs(rectangle.bottomRight.x - rectangle.topLeft.x);
}

// Вызываем фукницию для вывожа информации о прямоугольнике
printRectangleInfo(rectangle);

// Вызываем функцию для получения ширины прямоугольника и выводим результат
let width = getRectangleWidth(rectangle);
if(width !== undefined) {
  console.log('Ширина прямоугольника: ' + width);
}