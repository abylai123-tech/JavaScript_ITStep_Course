let table = document.getElementById('myTable');
let cells = table.getElementsByTagName('td');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = 'lightblue'; 
    });
    cells[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = ''; 
    });
}