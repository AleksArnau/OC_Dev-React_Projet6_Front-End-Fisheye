//Mettre le code JavaScript lié à la page photographer.html

//getting the id from the url
let url = new URL(location.href);
let intPhotographerId = parseInt(url.searchParams.get("id"));

async function getPhotographerMedia() {
  let url = new URL(location.href);
  let intPhotographerId = parseInt(url.searchParams.get("id"));

  const objPhotographerData = await getPhotographer(intPhotographerId);

  return objPhotographerData.media;
}

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
  const photographersDetails = document.querySelector(
    ".divPhotographerDetails"
  );
  const photographersPortrait = document.querySelector(
    ".divPhotographerPortrait"
  );
  const photographersPricing = document.querySelector(
    ".divPhotographerPricing"
  );
  const h2ModalPhotographerName = document.querySelector(
    ".h2ModalPhotographerName"
  );

  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographersDetails.appendChild(userCardDOM);

  photographersPortrait.appendChild(photographerModel.divPictureFrame);

  photographersPricing.appendChild(photographerModel.divPricing);

  h2ModalPhotographerName.textContent =
    "Contactez-moi \r\n" + photographerModel.name;
}

//displays the photographer's media in the DOM
async function displayMedia(media) {
  const portfolioSection = document.querySelector(".portfolio_section");

  media.forEach((element) => {
    const mediaModel = mediaTemplate(element);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    portfolioSection.appendChild(mediaCardDOM);
  });
}

async function displayModalCall() {
  let btnModalOpen = document.getElementsByClassName("btnModalOpen")[0];
  console.log(btnModalOpen);
  btnModalOpen.onclick = function () {
    displayModal();
    closeModalCall();
  };
}

async function closeModalCall() {
  let btnModalClose = document.getElementsByClassName("btnModalClose")[0];
  btnModalClose.onclick = function () {
    closeModal();
  };
}

async function navigationLightboxCall(mediaList) {
  let mediaLink = document.getElementsByClassName("mediaLink");
  for (const media of mediaLink) {
    media.addEventListener("click", (e) => {
      let path = e.target.attributes.src.value;
      let title = e.target.alt;
      displayLightbox(path, title, mediaList);
      console.log(mediaList);
    });
  }
}

//runs the fetch and display functions
async function init(intPhotographerId) {
  const objPhotographerData = await getPhotographer(intPhotographerId);

  console.log(objPhotographerData);

  displayData(objPhotographerData.photographers[0]);
  displayMedia(objPhotographerData.media);
  //TODO, add total likes and pricing to an absolute div
  //going to need info from both photographers and media

  displayModalCall();
  navigationLightboxCall(objPhotographerData.media);
}

init(intPhotographerId);
