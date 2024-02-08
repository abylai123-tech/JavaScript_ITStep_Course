function createUserObject(name, age, email) {
    return {
        get getName() {
            return name || "Default Name";
        },
        get getAge() {
            return age || "Default Age";
        },
        get getEmail() {
            return email || "Default Email";
        },
        set setName(value) {
            name = value;
        },
        set setAge(value) {
            age = value;
        },
        set setEmail(value) {
            email = value;
        }
    };
}

function generateObject() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let options = document.querySelector('input[name="options"]:checked').value;

    let user = createUserObject(name, age, email);

    if (options === "custom") {
        let customName = prompt("Enter custom name:");
        let customAge = prompt("Enter custom age:");
        let customEmail = prompt("Enter custom email:");

        user.setName = customName;
        user.setAge = customAge;
        user.setEmail = customEmail;
    }

    displayResult(user);
}

function displayResult(user) {
    document.getElementById("result").innerHTML =
        `Name: ${user.getName}<br>Age: ${user.getAge}<br>Email: ${user.getEmail}`;

    document.getElementById("result-container").style.display = "block";
}