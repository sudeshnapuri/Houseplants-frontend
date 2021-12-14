"use strict";

const getOutput = document.querySelector("#getOutput");

const getPlants = () => {
    axios
    .get("http://localhost:8081/getAll")
    .then(response => {
}