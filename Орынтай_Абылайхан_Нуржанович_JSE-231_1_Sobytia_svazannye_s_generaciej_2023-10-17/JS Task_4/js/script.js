function addComment() {
    let nameInput = document.getElementById('name');
    let commentInput = document.getElementById('comment');
    let commentsContainer = document.getElementById('comments');

    let name = nameInput.value;
    let comment = commentInput.value;
    let date = new Date().toLocaleString();

    if (name && comment) {
        let commentDiv = document.createElement('div');
        commentDiv.style.border = '1px solid #ccc';
        commentDiv.style.padding = '10px';
        commentDiv.style.margin = '10px';
        commentDiv.style.borderRadius = '5px';
        commentDiv.innerHTML = `
            <strong>${name}</strong> (${date}):<br>
            ${comment}
        `;
        commentsContainer.appendChild(commentDiv);

        nameInput.value = '';
        commentInput.value = '';
    }
}