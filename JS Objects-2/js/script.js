let products = {
    '12345': {
        name: 'Ноутбук',
        price: 1000,
        quantity: 5,
        brand: 'Asus',
        supplier: 'ООО "Техника"'
    },
    '67890': {
        name: 'Смартфон',
        price: 500,
        quantity: 10,
        brand: 'Samsung',
        supplier: 'ГлавТех'
    },
    '54321': {
        name: 'Планшет',
        price: 800,
        quantity: 3,
        brand: 'Apple',
        supplier: 'iShop'
    },
    '13579': {
        name: 'Телевизор',
        price: 1200,
        quantity: 7,
        brand: 'Sony',
        supplier: 'ЭлектроМир'
    },
    '24680': {
        name: 'Ноутбук',
        price: 900,
        quantity: 4,
        brand: 'Dell',
        supplier: 'IT Про'
    },
    '98765': {
        name: 'Фотокамера',
        price: 600,
        quantity: 8,
        brand: 'Canon',
        supplier: 'ФотоТех'
    }
};

let articleInput = document.getElementById('articleInput'); 
let productInfo = document.getElementById('productInfo'); 
let checkButton = document.getElementById('checkButton'); 
let clearButton = document.getElementById('clearButton');  

checkButton.onclick = searchProduct;
clearButton.onclick = clearProductInfo;

function searchProduct() {
    let article = articleInput.value;

    if (article in products) {
        let product = products[article];
        productInfo.innerHTML = `
            <p>Название: ${product.name}</p>
            <p>Цена: $${product.price}</p>
            <p>Количество: ${product.quantity} шт.</p>
            <p>Фирма: ${product.brand}</p>
            <p>Поставщик: ${product.supplier}</p>
        `;
    } else {
        productInfo.textContent = 'Товар не найден';
    }
}

function clearProductInfo() {
    articleInput.value = '';
    productInfo.textContent = '';
}
