class Item {
    constructor(article, name, firm, supplier, price, quantity) {
        this.article = article;
        this.name = name;
        this.firm = firm;
        this.supplier = supplier;
        this.price = price;
        this.quantity = quantity;
    }

    
    toString() {
        return `Артикул: ${this.article}, Название: ${this.name}, Фирма: ${this.firm}, Поставщик: ${this.supplier}, Цена: ${this.price}, Количество: ${this.quantity}`;
    }

    calculateTotal() {
        return this.price * this.quantity;
    }
}

let items = [];

function addItem() {
    let article = document.getElementById('article').value;
    let name = document.getElementById('name').value;
    let firm = document.getElementById('firm').value;
    let supplier = document.getElementById('supplier').value;
    let price = parseFloat(document.getElementById('price').value);
    let quantity = parseInt(document.getElementById('quantity').value);

    let newItem = new Item(article, name, firm, supplier, price, quantity);
    items.push(newItem);

    document.getElementById('article').value = '';
    document.getElementById('name').value = '';
    document.getElementById('firm').value = '';
    document.getElementById('supplier').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
}

function viewItem() {
    let article = prompt('Введите артикул товара:');
    let item = items.find(item => item.article === article);

    if (item) {
        document.getElementById('output').innerText = item.toString();
    } else {
        document.getElementById('output').innerText = 'Товар не найден.';
    }
}

function calculateTotal() {
    let total = 0;
    items.forEach(item => {
        total += item.calculateTotal();
    });
    document.getElementById('output').innerText = `Общая стоимость товаров: ${total}`;
}