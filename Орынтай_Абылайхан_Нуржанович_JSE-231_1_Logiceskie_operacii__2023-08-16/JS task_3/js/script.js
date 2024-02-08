// Третье задание
let amountKZT = prompt("Введите количество KZT:");
let desiredCurrency = prompt("Выберите валюту для конвертации (EUR, USD, UAN):");
let result;

if (desiredCurrency === "EUR") {
    result = amountKZT * 0.002;
    alert(amountKZT + " KZT = " + result + " EUR"); // Курс Евро
}
else if(desiredCurrency === "USD") {
    result = amountKZT * 0.0023;
    alert(amountKZT + "KZT = " + result + " USD"); // Курс Доллара
}
else if(desiredCurrency === "UAN") {
    result = amountKZT * 0.065;
    alert(amountKZT + " KZT = " + result + "UAN"); // Курс Юань
}
else {
    alert("Пожалуйста, введите доступную валюту.");
}