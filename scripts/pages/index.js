import { photographersTemplate } from "../templates/photographers.js";

//fetches photographers' data and picture/video properties
async function getPhotographers() {
  return fetch("../data/photographers.json")
    .then((res) => res.json())
    .catch(console.error);

  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  //   let photographers = [
  //     {
  //       name: "Ma data test",
  //       id: 1,
  //       city: "Paris",
  //       country: "France",
  //       tagline: "Ceci est ma data test",
  //       price: 400,
  //       portrait: "account.png",
  //     },
  //     {
  //       name: "Autre data test",
  //       id: 2,
  //       city: "Londres",
  //       country: "UK",
  //       tagline: "Ceci est ma data test 2",
  //       price: 500,
  //       portrait: "account.png",
  //     },
  //   ];

  //   // et bien retourner le tableau photographers seulement une fois récupéré
  //   return {
  //     photographers: [...photographers, ...photographers, ...photographers],
  //   };
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
