import { photographerTemplate } from "../templates/photographer.js";
import { mediaTemplate } from "../templates/media.js";
import { displayLightbox } from "../utils/mediaLightbox.js";
import { displayModal, closeModal } from "../utils/contactForm.js";
import {
  displaySort,
  closeSort,
  sortAscending,
  sortDescending,
} from "../utils/sort.js";

//getting the id from the url
let url = new URL(location.href);
let intPhotographerId = parseInt(url.searchParams.get("id"));

// async function getPhotographerMedia() {
//   let url = new URL(location.href);
//   let intPhotographerId = parseInt(url.searchParams.get("id"));

//   const objPhotographerData = await getPhotographer(intPhotographerId);

//   return objPhotographerData.media;
// }

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
  const photographerModel = photographerTemplate(photographer);
  const h2ModalPhotographerName = document.querySelector(
    ".h2ModalPhotographerName"
  );
  h2ModalPhotographerName.textContent =
    "Contactez-moi \r\n" + photographerModel.name;
}

//displays the photographer's media in the DOM
async function displayMedia(media) {
  document.querySelector(".portfolio_section").innerHTML = "";
  document.querySelector(".pTotalLikes").innerHTML = "0";
  media.forEach((element) => {
    mediaTemplate(element);
  });
}

//opens the contact modal
async function displayModalCall() {
  let btnModalOpen = document.getElementsByClassName("btnModalOpen")[0];
  btnModalOpen.onclick = function () {
    displayModal();
    closeModalCall();
  };
}

//closes the contact modal
async function closeModalCall() {
  let btnModalClose = document.getElementsByClassName("btnModalClose")[0];
  btnModalClose.onclick = function () {
    closeModal();
  };
}

//surveys every media to open the corresponding lightbox
function navigationLightboxCall(mediaList) {
  let mediaLink = document.getElementsByClassName("mediaLink");
  for (const media of mediaLink) {
    media.addEventListener("click", (e) => {
      let path = e.target.attributes.src.value;
      let title = e.target.alt;
      displayLightbox(path, title, mediaList);
    });
  }
}

//toggle between liking or removing your like from media using innerHTML
async function toggleLike() {
  let mediaIconLike = document.querySelectorAll(".likeIcon");
  console.log(mediaIconLike);
  for (const iLike of mediaIconLike) {
    iLike.addEventListener("click", (e) => {
      console.log(e);
      console.log("clicked");
      console.log(iLike); //TODO redo the like function
    });
  }

  // let totalLikes = document.getElementsByClassName("pTotalLikes")[0];
  // for (const divLike of mediaDivLikes) {
  //   divLike.lastChild.addEventListener("click", (e) => {
  //     divLike.lastChild.classList.toggle("liked");
  //     if (divLike.lastChild.classList.contains("liked")) {
  //       divLike.firstChild.innerHTML =
  //         parseInt(divLike.firstChild.innerHTML) + 1;
  //       totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1;
  //     } else {
  //       divLike.firstChild.innerHTML =
  //         parseInt(divLike.firstChild.innerHTML) - 1;
  //       totalLikes.innerHTML = parseInt(totalLikes.innerHTML) - 1;
  //     }
  //   });
  // }
}

//opens the sorting menu
async function dropdownSort(arrayMedia) {
  let btnSortOpen = document.getElementsByClassName("btnSortOpen")[0];

  btnSortOpen.onclick = function () {
    displaySort();
    closeSortCall(arrayMedia);
  };
}

//closes the sorting menu after sorting
async function closeSortCall(arrayMedia) {
  let btnsSortClose = document.querySelectorAll(".dropBtn");

  for (let i = 0; i < btnsSortClose.length; i++) {
    let btnSortClose = btnsSortClose[i];
    btnSortClose.onclick = function () {
      if (i == 0) {
        arrayMedia = sortDescending(arrayMedia, "likes");
        document.querySelector(".btnSortOpen").innerHTML = "Popularité v";
      } else if (i == 1) {
        arrayMedia = sortAscending(arrayMedia, "date");
        document.querySelector(".btnSortOpen").innerHTML = "Date v";
      } else if (i == 2) {
        arrayMedia = sortAscending(arrayMedia, "title");
        document.querySelector(".btnSortOpen").innerHTML = "Titre v";
      }
      displayMedia(arrayMedia);
      navigationLightboxCall(arrayMedia);
      closeSort();
    };
  }
}

//runs the fetch and display functions
async function init(intPhotographerId) {
  //this is the extract of the photographer and their media's data
  const objPhotographerData = await getPhotographer(intPhotographerId);
  let photographerData = objPhotographerData.photographers[0];
  let arrayMedia = objPhotographerData.media;

  displayData(photographerData);
  displayMedia(arrayMedia);

  displayModalCall();
  dropdownSort(arrayMedia);
  navigationLightboxCall(arrayMedia);
  toggleLike(arrayMedia); //TODO redo the liking
}

init(intPhotographerId);
