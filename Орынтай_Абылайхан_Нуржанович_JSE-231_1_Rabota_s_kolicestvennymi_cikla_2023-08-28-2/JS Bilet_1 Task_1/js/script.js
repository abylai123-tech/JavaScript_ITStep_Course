//Задание 1
let angle1, angle2, angle3, triangleType;

do {
    angle1 = parseFloat(prompt("Введите первый угол треугольника:"));
    angle2 = parseFloat(prompt("Введите второй угол треугольника:"));
    angle3 = parseFloat(prompt("Введите третий угол треугольника:"));

    let anglesSum = angle1 + angle2 +angle3;

    if (anglesSum == 180) {
        if(angle1 <= 90 && angle2 <= 90 && angle3 <= 90) {
            triangleType = " остроугольный";
        }
        else if(angle1 == 90 || angle2 == 90 || angle3 == 90){
            triangleType = " прямоугольный";
        }
        else{
            triangleType = " тупоугольный";
        }
    
        if(angle1 == angle2 || angle1 == angle3 || angle2 == angle3) {
            triangleType += " равнобедренный";
        }
    
        if(angle1 == angle2 && angle1 == angle3 && angle2 == angle3) {
            triangleType += " равносторонний";
        }
        break;
        
    } else {
        alert("Сумма углов треугольника должна быть равна 180 градусов. Пожалуйста, введите углы заново.");
    }

}while(true);

console.log("Треугольник" +  triangleType);