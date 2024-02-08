class Articul {
  constructor(ArticulNumber, ArticulName, ArticulCost, ArticulAll, ArticulFirm, ArticulPost) {
      this.number = ArticulNumber;
      this.name = ArticulName;
      this.cost = ArticulCost;
      this.all = ArticulAll;
      this.firm = ArticulFirm;
      this.post = ArticulPost;
  }

  myPrint() {
      return `Артикуль: ${this.number}<br> Название: ${this.name}<br> Цена: ${this.cost}<br> Количество: ${this.all}<br> Фирма: ${this.firm}<br> Поставщик: ${this.post}`;
  }
}

let myArr = [
  new Articul("AB001", "Яблоко", 150, 200, "Свежие фрукты", "ООО Фрукты и ягоды"),
  new Articul("AB002", "Груша", 200, 150, "Свежие фрукты", "ООО Фрукты и ягоды"),
  new Articul("AB003", "Брокколи", 75, 50, "Зеленые поля", "ООО Овощи и зелень"),
  new Articul("AB004", "Картофель", 80, 300, "Зеленые поля", "ООО Фермерские продукты"),
  new Articul("AB005", "Огурцы", 50, 80, "Зеленые поля", "ООО Овощи и зелень")
];

let enter1 = document.getElementById('enter1');

function getArticul(numb) {
  let foundedArticle = myArr.find(el => el.number === numb);
  if (!foundedArticle) {
      return alert('Артикуль не найден');
  }
  return foundedArticle;
}

document.getElementById('listArticlesButton').onclick = function () {
  enter1.innerHTML = "";
  for (elem of myArr) {
      enter1.innerHTML += elem.number + "<br><br>";
  }
};

document.getElementById('listProductsButton').onclick = function () {
  let artic = document.querySelector("#number");
  if (!artic.value) return alert('Артикуль не прописан');
  let foundedArticle = getArticul(artic.value?.trim());
  enter1.innerHTML = "";
  enter1.innerHTML = foundedArticle.myPrint() + "<br>";
};

document.getElementById('listAllButton').onclick = function () {
  enter1.innerHTML = "";
  for (elem of myArr) {
      enter1.innerHTML += elem.myPrint() + "<br><br>";
  }
};

document.getElementById('clearButton').onclick = function () {
  document.getElementById('number').value = "";
  enter1.innerHTML = "";
};

document.getElementById('addButton').onclick = function () {
  let articul_1 = prompt("Введите артикуль для добавления");
  let name_1 = prompt("Введите название для добавления");
  let cost = prompt("Введите цену для добавления");
  let all = prompt("Введите количество для добавления");
  let firm = prompt("Введите фирму для добавления");
  let post = prompt("Введите поставщика для добавления");
  if (!articul_1 || !name_1 || !cost || !all || !firm || !post) {
      return alert("Поле для добавления не указано");
  }
  let newArticul = new Articul(articul_1, name_1, cost, all, firm, post);
  myArr.push(newArticul);
  enter1.innerHTML = "";
  enter1.innerHTML = newArticul.myPrint();
};

document.getElementById('removeButton').onclick = function () {
  let delete2 = prompt("Какой артикуль вы хотите удалить?");
  let foundedArticle = getArticul(delete2.trim());
  myArr = myArr.filter(el => el.number !== foundedArticle.number);
  enter1.innerHTML = "";
  for (elem of myArr) {
      enter1.innerHTML += elem.myPrint() + "<br><br>";
  }
};

