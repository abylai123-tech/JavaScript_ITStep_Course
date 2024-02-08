let likeButton = document.getElementById('likeButton');
let likeCount = document.getElementById('likeCount');

let count = 0;

likeButton.addEventListener('click', () => {
    count++;
    likeCount.textContent = count;
});
