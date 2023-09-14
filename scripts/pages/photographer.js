//Mettre le code JavaScript lié à la page photographer.html

//getting the id from the url
let url = new URL(location.href);
let intPhotographerId = parseInt(url.searchParams.get("id"));

//fetches a single photographer's data and photo data
async function getPhotographer(intPhotographerId) {
  return fetch("../data/photographers.json")
    .then((res) => res.json())
    .then(
      (res) =>
        (res = {
          photographers: [
            ...res.photographers.filter((val) => val.id === intPhotographerId),
          ],
          media: [
            ...res.media.filter(
              (val) => val.photographerId === intPhotographerId
            ),
          ],
        })
    )
    .catch(console.error);
}

//displays the photographer's info in the DOM
async function displayData(photographer) {
  const photographersSection = document.querySelector(
    ".select_photographer_section"
  );

  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.appendChild(userCardDOM);
}

//displays the photographer's photos in the DOM
async function displayPhotos(photos) {
  console.log(photos);
  const portfolioSection = document.querySelector(".portfolio_section");

  photos.forEach((photo) => {
    console.log(photo);
    const photoModel = photoTemplate(photo);
    const photoCardDOM = photoModel.getPhotoCardDOM();
    portfolioSection.appendChild(photoCardDOM);
  });
}

//runs the fetch and display functions
async function init(intPhotographerId) {
  const objPhotographerData = await getPhotographer(intPhotographerId);

  displayData(objPhotographerData.photographers[0]);
  displayPhotos(objPhotographerData.media);
}

init(intPhotographerId);
