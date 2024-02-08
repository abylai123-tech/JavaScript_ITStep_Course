 function changeListToNumbers() {
            let numberList = document.getElementById("numberList");
            let listItems = numberList.getElementsByTagName("li");

            for (var i = 0; i < listItems.length; i++) {
                listItems[i].textContent = i + 1;
            }
        }

        let changeListButton = document.getElementById("changeListButton");
        changeListButton.addEventListener("click", changeListToNumbers);