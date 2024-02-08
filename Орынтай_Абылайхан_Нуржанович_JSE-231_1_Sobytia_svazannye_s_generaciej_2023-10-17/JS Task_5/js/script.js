let cisCountries = ["Азербайджан", "Армения", "Беларусь", "Казахстан", "Киргизия", "Молдавия", "Россия", "Таджикистан", "Туркмения", "Узбекистан", "Украина"];
let suggestionsContainer = document.getElementById("suggestions");

function handleInput(inputValue) {
    inputValue = inputValue.toLowerCase();
    suggestionsContainer.innerHTML = "";

    for (let country of cisCountries) {
        if (country.toLowerCase().startsWith(inputValue)) {
          let suggestionElement = document.createElement("div");
          suggestionElement.className = "suggestion";
          suggestionElement.textContent = country;
          suggestionElement.onclick = function() {
            document.getElementById("country-input").value = country;
            suggestionsContainer.style.display = "none";
          };
          suggestionsContainer.appendChild(suggestionElement);
        }
      }

      suggestionsContainer.style.display = "block";
    }

    document.onclick = function(event) {
      if (event.target !== document.getElementById("country-input") && event.target !== suggestionsContainer) {
        suggestionsContainer.style.display = "none";
      }
    };