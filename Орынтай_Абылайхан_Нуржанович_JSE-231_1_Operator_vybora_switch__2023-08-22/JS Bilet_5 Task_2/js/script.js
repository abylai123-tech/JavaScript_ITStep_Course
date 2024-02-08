// Задание 2
let bracket = prompt("Введите скобку");

switch(bracket) {
    case "{":
        console.log("Это фигуная скобка открытая");
        break;
    case "}":
        console.log("Это фигуная скобка закрытая");
        break;
    case "(":
        console.log("Это круглая скобка открытая");
        break;
    case ")":
        console.log("Это круглая скобка закрытая");
        break;
    case "[":
        console.log("Это квадратная скобка открыта");
        break;
    case "]":
        console.log("Это квадртная скобка закрыта");
        break;
    default:
        console.log("Вы введете не правильные данные");
        break;
}
