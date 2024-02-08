const svet_1 = document.querySelector("#block-1"); 
const svet_2 = document.querySelector("#block-2"); 
const svet_3 = document.querySelector("#block-3"); 
 
let number = 1; 
 
const button = document.getElementById("But1"); 
 
button.onclick = function () { 
    svet_1.style.backgroundColor = "white"; 
    svet_2.style.backgroundColor = "white"; 
    svet_3.style.backgroundColor = "white"; 
 
     
    if (number === 1) { 
        svet_1.style.backgroundColor = "red"; 
    } else if (number === 2) { 
        svet_2.style.backgroundColor = "blue";  
    } else if (number === 3) { 
        svet_3.style.backgroundColor = "green";  
    } else { 
        number = 0; 
    } 
    number++; 
};