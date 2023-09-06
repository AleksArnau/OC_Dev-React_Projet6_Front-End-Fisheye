//Mettre le code JavaScript lié à la page photographer.html
let url = new URL(location.href);
let kanapPageId = url.searchParams.get("id");

//fetches photographers' data and picture/video properties
async function getPhotographers() {
  return fetch("../data/photographers.json")
    .then((res) => res.json())
    .catch(console.error);
}

//fetches a photographer's data etc.
async function getPhotographer() {
  return fetch("../data/photographers.json")
    .then((res) => res.json())
    .then((object) => object.id) //TODO
    .catch(console.error);
}

//displays all the photographers' info in the DOM from a set
async function displayData(photographers) {
  const photographersSection = document.querySelector(".select_photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

//runs the fetch and display functions
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
