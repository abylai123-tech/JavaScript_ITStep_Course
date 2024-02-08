function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    
    reader.readAsText(file, 'UTF-8');

    reader.onload = function() {
        const content = reader.result;
        document.querySelector('.procrutka').innerHTML = content;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function countImages() {
    let imgElements = document.querySelectorAll('.procrutka img');
    return imgElements.length;
}

function test_fun1S() {
    let imageCount = countImages();
    document.getElementById('imgInfo').innerText = `Кол-во картинок в проверяемой странице: ${imageCount}`;
}