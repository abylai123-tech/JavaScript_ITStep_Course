// Задание 1
let dragonAge = prompt("Сколько лет дракону?");
let age = parseInt(dragonAge);
let heads;
let eyes;

if (age < 100) {
    heads = age * 3;
    eyes = heads * 2;
} else if (age > 100) {
    heads = age * 2;
    heads += ((age - 100) * 2) + 300;
    eyes = heads * 2;
} else {
    heads = age * 2;
    eyes = heads * 2;
}

console.log("Возраст дракона: " + age + " лет");
console.log("Количество голов: " + heads);
console.log("Количество глаз: " + eyes);