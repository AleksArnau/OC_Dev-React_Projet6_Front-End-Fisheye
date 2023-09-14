//Mettre le code JavaScript lié à la page photographer.html
let url = new URL(location.href);
let photographerId = url.searchParams.get("id");

//fetches photographers' data and picture/video properties
async function getPhotographers() {
  return fetch("../data/photographers.json")
    .then((res) => res.json())
    .catch(console.error);
}

//fetches a photographer's data etc.
async function getPhotographer() {
  let test = {
    photo: [
      {
        name: "Mimi Keel",
        id: 243,
        city: "London",
        country: "UK",
        tagline: "Voir le beau dans le quotidien",
        price: 400,
        portrait: "MimiKeel.jpg",
      },
      {
        name: "Ellie-Rose Wilkens",
        id: 930,
        city: "Paris",
        country: "france",
        tagline: "Capturer des compositions complexes",
        price: 250,
        portrait: "EllieRoseWilkens.jpg",
      },
    ],
    grapherite: [
      {
        value: "1",
        label: "one",
        country: "france",
      },
      {
        value: "2",
        label: "two",
        country: "france",
      },
      {
        value: "3",
        label: "three",
        country: "uk",
      },
      {
        value: "4",
        label: "four",
        country: "uk",
      },
      {
        value: "5",
        label: "five",
        country: "france",
      },
      {
        value: "6",
        label: "six",
        country: "uk",
      },
      {
        value: "7",
        label: "seven",
        country: "france",
      },
    ],
  };
  let test2 = (({ grapherite }) => ({ grapherite }))(test);
  let test3 = test.grapherite.filter((val) => val.country === "france");
  let test4 = {};
  test4.photo = test.photo.filter((val) => val.country === "france");
  test4.grapherite = test.grapherite.filter((val) => val.country === "france");
  console.log(test)
  console.log(test2)
  console.log(test.grapherite)

  return (
    fetch("../data/photographers.json")
      .then((res) => res.json())
      .then((oped) => console.log())
      //object=tableau de données(photographes)
      //filtrer object pour ne recuperer que l'object correspondant à l'id recuperé dans l'url (photographerId)
      //le resultat doit etre un object {} (pas un object contenu contenu dans un tableau [{}])
      //     {
      //       name: "Autre data test",
      //       id: 2,
      //       city: "Londres",
      //       country: "UK",
      //       tagline: "Ceci est ma data test 2",
      //       price: 500,
      //       portrait: "account.png",
      //     }
      //
      //TODO
      .catch(console.error)
  );
}

//displays all the photographers' info in the DOM from a set
async function displayData(photographers) {
  const photographersSection = document.querySelector(
    ".select_photographer_section"
  );

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

//runs the fetch and display functions
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographer(photographerId);
  displayData(photographers);
}

init(photographerId);
