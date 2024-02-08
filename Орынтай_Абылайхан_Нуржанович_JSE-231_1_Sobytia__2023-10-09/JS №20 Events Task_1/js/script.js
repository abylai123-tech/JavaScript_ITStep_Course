  function changeBackgroundColor() {
    let newColor = prompt("Введите цвет для фона (например, 'green' или '#008000'):");

    if (newColor) {
        document.body.style.backgroundColor = newColor;
    }
}

let changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeBackgroundColor);