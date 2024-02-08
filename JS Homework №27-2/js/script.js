let mainBlock = document.getElementById("mainBlock");
let listNum = 0;

function generatePost(list) {
    for (let i = list; i < list + 10; i++) {
        let block = document.createElement('div');
        block.className = 'block';

        let imgBlock = document.createElement('div');
        imgBlock.className = 'imgBlock';

        let textBlock = document.createElement('div');
        textBlock.className = 'textBlock';
        let title = document.createElement('h2');
        title.className = 'titleBlock';
        let body = document.createElement('p');
        body.className = 'bodyBlock';

        textBlock.appendChild(title);
        textBlock.appendChild(body);

        block.appendChild(imgBlock);
        block.appendChild(textBlock);
        mainBlock.appendChild(block);

        postData(i, title, body);
        postImage(imgBlock);
    }
}

function postData(index, titleElement, bodyElement) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/posts/${index + 1}`);
    xhr.onload = function () {
        let post = JSON.parse(xhr.responseText);
        titleElement.textContent = post.title;
        bodyElement.textContent = post.body;
    };
    xhr.send();
}

function postImage(imgBlock) {
    let xhrImg = new XMLHttpRequest();
    xhrImg.open("GET", "https://random.imagecdn.app/700/180");
    xhrImg.onload = function () {
        imgBlock.style.backgroundImage = `url(${xhrImg.responseURL})`;
    };
    xhrImg.send();
}

generatePost(listNum);

function next() {
    listNum += 10;
    generatePost(listNum);
}