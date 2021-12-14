"use strict";

const getOutput = document.querySelector("#getOutput");

const getPlants = () => {
    axios
    .get("http://localhost:8081/getAll")
    .then(response => {
        const houseplants= response.data;
        getOutput.innerHTML = "";
        for (let houseplant of houseplants) {
            const houseplantCol = document.createElement("div");
            houseplantCol.classList.add("col");

            const houseplantCard = document.createElement("div");
            houseplantCard.classList.add("card");

            const houseplantBody = document.createElement("div");
            houseplantBody.classList.add("card-body");

            const houseplantId = document.createElement("h5");
            houseplantId.classList.add("card-title");
            houseplantId.innerText = `ID: ${houseplant.id}`;
            houseplantBody.appendChild(houseplantId);

            const houseplantName = document.createElement("p");
            houseplantName.classList.add("card-text");
            houseplantName.innerText = `Plant Name: ${houseplant.plantName}`;
            houseplantBody.appendChild(houseplantName);

            const houseplantWater = document.createElement("p");
            houseplantWater.classList.add("card-text");
            houseplantWater.innerText = `Water: ${houseplant.water}`;
            houseplantBody.appendChild(houseplantWater);

            const houseplantSunlight = document.createElement("p");
            houseplantSunlight.classList.add("card-text");
            houseplantSunlight.innerText = `Sunlight: ${houseplant.sunlight}`;
            houseplantBody.appendChild(houseplantSunlight);

            const houseplantHumidity = document.createElement("p");
            houseplantHumidity.classList.add("card-text");
            houseplantHumidity.innerText = `Humidity: ${houseplant.humidity}`;
            houseplantBody.appendChild(houseplantHumidity);

            const houseplantQuantity = document.createElement("p");
            houseplantQuantity.classList.add("card-text");
            houseplantQuantity.innerText = `Quantity: ${houseplant.quantity}`;
            houseplantBody.appendChild(houseplantQuantity);

            houseplantCard.appendChild(houseplantBody);
            houseplantCol.appendChild(houseplantCard);

            getOutput.appendChild(houseplantCol);
        }
    })
    .catch(err => console.error(err));
}
getPlants();

document.querySelector("#houseplantForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const data = {
        plantName: form.plantName.value,
        water: form.water.value,
        sunlight: form.sunlight.value,
        humidity: form.humidity.value,
        quantity: form.quantity.value,
    };

    axios
        .post("http://localhost:8081/create", data)
        .then((response) => {
                getPlants();
                form.reset();
                form.plantName.focus();
                console.log(response);
        })
        .catch(err => console.error(err));
    });