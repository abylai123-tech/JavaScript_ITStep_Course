function changeFontSize() {
  let newSize = prompt("Введите новый размер шрифта (например, '16px'):");
  if (newSize) {
      document.getElementById("textParagraph").style.fontSize = newSize;
  }
}

let changeFontSizeButton = document.getElementById("changeFontSizeButton");
changeFontSizeButton.addEventListener("click", changeFontSize);