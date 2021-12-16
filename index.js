"use strict";

const getOutput = document.querySelector("#getOutput");
const getIdOutput = document.querySelector("#getIdOutput");
const getNameOutput = document.querySelector("#getNameOutput");

// GET ALL HOUSEPLANTS
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

            const houseplantDelete = document.createElement("button");
            houseplantDelete.innerText = "Delete";
            houseplantDelete.classList.add("btn", "btn-danger");
            houseplantDelete.addEventListener("click", () => {
                axios
                    .delete(`http://localhost:8081/remove/${houseplant.id}`)
                    .then(response => getPlants())
                    .catch(err => console.error(err))
                });

            houseplantBody.appendChild(houseplantDelete)
            houseplantCard.appendChild(houseplantBody);
            houseplantCol.appendChild(houseplantCard);

            getOutput.appendChild(houseplantCol);
        }
    })
    .catch(err => console.error(err));
}
getPlants();


// CREATE/POST HOUSEPLANTS
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

// DELETE HOUSEPLANT BY ID
    document.querySelector("#deleteForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const form = this;
    
        const plantIdDelete = form.plantIdDelete.value;
        axios
            .delete(`http://localhost:8081/remove/${plantIdDelete}`)
            .then(res => {
                console.log(res);
                form.reset();
                form.plantIdDelete.focus();
                getDucks();
            })
            .catch(err => console.error(err));
    });
// GET HOUSEPLANT BY ID
        document.querySelector("#houseplantIdForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = this;
        const plantIdFind = form.plantIdFind.value;
        
            axios
            .get(`http://localhost:8081/get/${plantIdFind}`)
            .then(response => {
                form.reset();
                form.plantIdFind.focus();
                const houseplant = response.data;
                getIdOutput.innerHTML = "";

                const houseplantIdCol = document.createElement("div");
                houseplantIdCol.classList.add("col");

                const houseplantIdCard = document.createElement("div");
                houseplantIdCard.classList.add("card");

                const houseplantIdBody = document.createElement("div");
                houseplantIdBody.classList.add("card-body");

                const houseplantId = document.createElement("h5");
                houseplantId.classList.add("card-title");
                houseplantId.innerText = `ID: ${houseplant.id}`;
                houseplantIdBody.appendChild(houseplantId);

                const houseplantName = document.createElement("p");
                houseplantName.classList.add("card-text");
                houseplantName.innerText = `Plant Name: ${houseplant.plantName}`;
                houseplantIdBody.appendChild(houseplantName);

                const houseplantWater = document.createElement("p");
                houseplantWater.classList.add("card-text");
                houseplantWater.innerText = `Water: ${houseplant.water}`;
                houseplantIdBody.appendChild(houseplantWater);

                const houseplantSunlight = document.createElement("p");
                houseplantSunlight.classList.add("card-text");
                houseplantSunlight.innerText = `Sunlight: ${houseplant.sunlight}`;
                houseplantIdBody.appendChild(houseplantSunlight);

                const houseplantHumidity = document.createElement("p");
                houseplantHumidity.classList.add("card-text");
                houseplantHumidity.innerText = `Humidity: ${houseplant.humidity}`;
                houseplantIdBody.appendChild(houseplantHumidity);

                const houseplantQuantity = document.createElement("p");
                houseplantQuantity.classList.add("card-text");
                houseplantQuantity.innerText = `Quantity: ${houseplant.quantity}`;
                houseplantIdBody.appendChild(houseplantQuantity);

                houseplantIdCard.appendChild(houseplantIdBody);
                houseplantIdCol.appendChild(houseplantIdCard);

                getIdOutput.appendChild(houseplantIdCol);
            })
            .catch(err => console.error(err));
            })

// UPDATE HOUSEPLANTS
document.querySelector("#houseplantUpdateIdForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const plantIdUpdate = form.plantIdUpdate.value;

    const updateData = {
        plantName: form.plantName.value,
        water: form.water.value,
        sunlight: form.sunlight.value,
        humidity: form.humidity.value,
        quantity: form.quantity.value,
    };

    axios
        .put(`http://localhost:8081/replace/${plantIdUpdate}`, updateData)
        .then((response) => {
                getPlants();
                form.reset();
                form.plantName.focus();
                console.log(response);
        })
        .catch(err => console.error(err));
    });

// GET HOUSEPLANT BY PLANT NAME
document.querySelector("#houseplantNameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = this;
    const plantNameFind = form.plantNameFind.value;
    
    const getPlantsByName = () => {
        axios
        .get(`http://localhost:8081/getByPlantName/${plantNameFind}`)
        .then(response => {
            const houseplants = response.data;
            getNameOutput.innerHTML = "";
            for (let houseplant of houseplants) {
                const houseplantNameCol = document.createElement("div");
                houseplantNameCol.classList.add("col");

                const houseplantNameCard = document.createElement("div");
                houseplantNameCard.classList.add("card");

                const houseplantNameBody = document.createElement("div");
                houseplantNameBody.classList.add("card-body");

                const houseplantId = document.createElement("h5");
                houseplantId.classList.add("card-title");
                houseplantId.innerText = `ID: ${houseplant.id}`;
                houseplantNameBody.appendChild(houseplantId);

                const houseplantName = document.createElement("p");
                houseplantName.classList.add("card-text");
                houseplantName.innerText = `Plant Name: ${houseplant.plantName}`;
                houseplantNameBody.appendChild(houseplantName);

                const houseplantWater = document.createElement("p");
                houseplantWater.classList.add("card-text");
                houseplantWater.innerText = `Water: ${houseplant.water}`;
                houseplantNameBody.appendChild(houseplantWater);

                const houseplantSunlight = document.createElement("p");
                houseplantSunlight.classList.add("card-text");
                houseplantSunlight.innerText = `Sunlight: ${houseplant.sunlight}`;
                houseplantNameBody.appendChild(houseplantSunlight);

                const houseplantHumidity = document.createElement("p");
                houseplantHumidity.classList.add("card-text");
                houseplantHumidity.innerText = `Humidity: ${houseplant.humidity}`;
                houseplantNameBody.appendChild(houseplantHumidity);

                const houseplantQuantity = document.createElement("p");
                houseplantQuantity.classList.add("card-text");
                houseplantQuantity.innerText = `Quantity: ${houseplant.quantity}`;
                houseplantNameBody.appendChild(houseplantQuantity);

                houseplantNameCard.appendChild(houseplantNameBody);
                houseplantNameCol.appendChild(houseplantNameCard);

                getNameOutput.appendChild(houseplantNameCol);
            }
        })
        .catch(err => console.error(err));
    }

    getPlantsByName();
})
