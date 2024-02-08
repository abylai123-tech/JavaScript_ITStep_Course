function changeTitleColor() {
  let newColor = prompt("Введите цвет для заголовка (например, 'red' или '#00FF00'):");

  if (newColor) {
      document.getElementById("pageTitle").style.color = newColor;
  }
}
let changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeTitleColor);