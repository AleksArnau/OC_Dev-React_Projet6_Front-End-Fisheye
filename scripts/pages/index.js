import { photographersTemplate } from "../templates/photographers.js";

//fetches photographers' data and picture/video properties
async function getPhotographers() {
  return fetch("../data/photographers.json")
    .then((res) => res.json())
    .catch(console.error);
}

//displays all the photographers' info in the DOM from a set
async function displayData(photographers) {
  photographers.forEach((photographer) => {
    photographersTemplate(photographer);
  });
}

//runs the fetch and display functions
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
