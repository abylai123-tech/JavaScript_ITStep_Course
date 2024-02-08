class Vehicle {
    constructor(make, model, year, engineVolume, fuelType) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engineVolume = engineVolume;
        this.fuelType = fuelType;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, engineVolume, fuelType, numDoors) {
        super(make, model, year, engineVolume, fuelType);
        this.numDoors = numDoors || '';
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, engineVolume, fuelType, payloadCapacity) {
        super(make, model, year, engineVolume, fuelType);
        this.payloadCapacity = payloadCapacity || '';
    }
}

class Moto extends Vehicle {
    constructor(make, model, year, engineVolume, fuelType, bikeType, mainGearType, hasPassenger, hasWindshield, hasSidecar) {
        super(make, model, year, engineVolume, fuelType);
        this.bikeType = bikeType || '';
        this.mainGearType = mainGearType || '';
        this.hasPassenger = hasPassenger || ''; 
        this.hasWindshield = hasWindshield || ''; 
        this.hasSidecar = hasSidecar || ''; 
    }
}

function showForm() {
    let formFieldsContainer = document.getElementById('formFields');
    let vehicleType = document.querySelector('input[name="vehicleType"]:checked').value;

    switch (vehicleType) {
        case 'car':
            formFieldsContainer.innerHTML = `
                <p>Общие:</p>
                <input type="text" id="make" placeholder="Введите марку"><br>
                <input type="text" id="model" placeholder="Введите модель"><br>
                <input type="text" id="year" placeholder="Введите год"><br>
                <input type="text" id="engineVolume" placeholder="Введите объем двигателя"><br>
                <input type="text" id="fuelType" placeholder="Введите тип топлива"><br>
                <input type="text" id="carNumDoors" placeholder="Введите количество дверей"><br>
                <button onclick="createVehicle('car')">Сформировать</button>
            `;
            break;
        case 'truck':
            formFieldsContainer.innerHTML = `
                <p>Общие:</p>
                <input type="text" id="make" placeholder="Введите год"><br>
                <input type="text" id="model" placeholder="Введите марку"><br>
                <input type="text" id="year" placeholder="Введите модель"><br>
                <input type="text" id="engineVolume" placeholder="Введите объем двигателя"><br>
                <input type="text" id="fuelType" placeholder="Введите тип топлива"><br>
                <input type="text" id="truckPayloadCapacity" placeholder="Введите грузоподъемность"><br>
                <button onclick="createVehicle('truck')">Сформировать</button>
            `;
            break;
        case 'moto':
            formFieldsContainer.innerHTML = `
                <p>Общие:</p>
                <input type="text" id="make" placeholder="Введите год"><br>
                <input type="text" id="model" placeholder="Введите марку"><br>
                <input type="text" id="year" placeholder="Введите модель"><br>
                <input type="text" id="engineVolume" placeholder="Введите объем двигателя"><br>
                <input type="text" id="motoFuelType" placeholder="Введите тип топлива"><br>
                <input type="text" id="motoBikeType" placeholder="Введите вид мотоцикла"><br>
                <input type="text" id="motoMainGearType" placeholder="Введите тип главной передачи"><br>
                <input type="text" id="motoHasPassenger" placeholder="Введите информацию о пассажире"><br>
                <input type="text" id="motoHasWindshield" placeholder="Введите информацию о лобовом"><br>
                <input type="text" id="motoHasSidecar" placeholder="Введите информацию о люльке"><br>
                <button onclick="createVehicle('moto')">Сформировать</button>
            `;
            break;
        default:
            break;
    }
}

function createVehicle(type) {
    let make = document.getElementById('make').value;
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value;
    let engineVolume = document.getElementById('engineVolume').value;

    let vehicle;

    switch (type) {
        case 'car':
            let numDoorsElement = document.getElementById('carNumDoors');
            let numDoors = numDoorsElement ? numDoorsElement.value : '';
            let carFuelType = document.getElementById('fuelType').value;
            vehicle = new Car(make, model, year, engineVolume, carFuelType, numDoors);
            break;
        case 'truck':
            let truckPayloadCapacity = document.getElementById('truckPayloadCapacity').value;
            let truckFuelType = document.getElementById('fuelType').value;
            vehicle = new Truck(make, model, year, engineVolume, truckFuelType, truckPayloadCapacity);
            break;
        case 'moto':
            let motoFuelType = document.getElementById('motoFuelType').value;
            let bikeType = document.getElementById('motoBikeType').value;
            let mainGearType = document.getElementById('motoMainGearType').value;
            let hasPassenger = document.getElementById('motoHasPassenger').value; // Произвольный текст вместо true/false
            let hasWindshield = document.getElementById('motoHasWindshield').value; // Произвольный текст вместо true/false
            let hasSidecar = document.getElementById('motoHasSidecar').value; // Произвольный текст вместо true/false
            vehicle = new Moto(make, model, year, engineVolume, motoFuelType, bikeType, mainGearType, hasPassenger, hasWindshield, hasSidecar);
            break;
        default:
            break;
    }

    displayResult(vehicle);
}

function displayResult(vehicle) {
    let resultContainer = document.getElementById('result');

    let commonInfo = `
        <h2>Информация о транспортном средстве:</h2>
        <p><strong>Марка:</strong> ${vehicle.make}</p>
        <p><strong>Модель:</strong> ${vehicle.model}</p>
        <p><strong>Год:</strong> ${vehicle.year}</p>
        <p><strong>Объем двигателя:</strong> ${vehicle.engineVolume}</p>
        <p><strong>Тип топлива:</strong> ${vehicle.fuelType}</p>
    `;

    let uniqueInfo = '';

    if (vehicle instanceof Car) {
        uniqueInfo = `
            <p><strong>Количество дверей:</strong> ${vehicle.numDoors}</p>
        `;
    } else if (vehicle instanceof Truck) {
        uniqueInfo = `
            <p><strong>Грузоподъемность:</strong> ${vehicle.payloadCapacity}</p>
        `;
    } else if (vehicle instanceof Moto) {
        uniqueInfo = `
            <p><strong>Вид мотоцикла:</strong> ${vehicle.bikeType}</p>
            <p><strong>Тип главной передачи:</strong> ${vehicle.mainGearType}</p>
            <p><strong>Наличие пассажира:</strong> ${vehicle.hasPassenger}</p>
            <p><strong>Наличие лобового:</strong> ${vehicle.hasWindshield}</p>
            <p><strong>Наличие люльки:</strong> ${vehicle.hasSidecar}</p>
        `;
    }

    resultContainer.innerHTML = commonInfo + uniqueInfo;
}
