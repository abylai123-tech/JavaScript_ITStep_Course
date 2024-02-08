let tabElement = document.getElementById('tab');

function disableTextSelection(event) {
    event.preventDefault();
}

function disableContextMenu(event) {
    event.preventDefault();
}

tabElement.addEventListener('selectstart', disableTextSelection);
tabElement.addEventListener('contextmenu', disableContextMenu);