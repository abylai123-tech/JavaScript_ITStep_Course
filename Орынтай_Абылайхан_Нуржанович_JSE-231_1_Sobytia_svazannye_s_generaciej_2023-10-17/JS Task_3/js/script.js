let textElement = document.getElementById('text');
let colorOptions = document.querySelectorAll('.color-option');

for (let option of colorOptions) {
    option.addEventListener('click', function() {
        let selectedColor = option.getAttribute('data-color');
        textElement.style.color = selectedColor;
    });
}