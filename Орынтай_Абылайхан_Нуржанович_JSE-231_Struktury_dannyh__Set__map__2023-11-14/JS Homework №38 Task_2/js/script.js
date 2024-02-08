// Используем set для хранения уникальных товаров
let uniqueProducts = new Set();

function addProduct() {
    let productInput = document.getElementById("productInput");
    let productList = document.getElementById("productList");

    let productName = productInput.value.trim();

    if (productName === "") {
        alert("Введите название товара.");
        return;
    }

    // Проверяем, есть ли товар уже в списке
    if (uniqueProducts.has(productName)) {
        alert("Такой товар уже существует в списке.");
        return;
    }

    // Добавляем товар в set и отображаем на странице
    uniqueProducts.add(productName);
    let listItem = document.createElement("li");
    listItem.textContent = productName;
    productList.appendChild(listItem);

    // Очищаем поле ввода
    productInput.value = "";
}