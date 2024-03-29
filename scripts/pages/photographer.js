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
import { focusTrap } from "../utils/focusTrap.js";

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
  btnModalOpen.onclick = () => {
    const modal = displayModal();
    focusTrap(modal);
    closeModalCall();
  };
}

//handles closing the modal and the submit button
async function closeModalCall() {
  const btnModalClose = document.getElementById("btnModalClose");
  btnModalClose.onclick = () => {
    closeModal();
  };
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  });

  const form = document.querySelector("#contact_modal form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      const firstName = document.getElementById("contactFirstName").value;
      const lastName = document.getElementById("contactLastName").value;
      const email = document.getElementById("contactEmail").value;
      const message = document.getElementById("contactMessage").value;

      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Message:", message);

      form.reset();
    }
    closeModal();
  });
}

//surveys every media to open the corresponding lightbox
function navigationLightboxCall(mediaList) {
  let mediaLink = document.getElementsByClassName("mediaLink");
  for (const media of mediaLink) {
    media.addEventListener("click", (e) => {
      let path = e.target.attributes.src.value;
      let title = e.target.dataset.title;
      const lightbox = displayLightbox(path, title, mediaList);
      focusTrap(lightbox);
    });
  }
}

//toggle between liking or removing your like from media using innerHTML
async function toggleLike() {
  let mediaIconLike = document.querySelectorAll(".likeIcon");
  let totalLikes = document.getElementsByClassName("pTotalLikes")[0];
  for (const iLike of mediaIconLike) {
    iLike.addEventListener("click", () => {
      iLike.classList.toggle("liked");
      const mediaLikes = iLike
        .closest(".divLikes")
        .querySelector(".mediaLikes");
      if (iLike.classList.contains("liked")) {
        mediaLikes.innerHTML = parseInt(mediaLikes.innerHTML) + 1;
        totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1;
      } else {
        mediaLikes.innerHTML = parseInt(mediaLikes.innerHTML) - 1;
        totalLikes.innerHTML = parseInt(totalLikes.innerHTML) - 1;
      }
    });
  }
}

//opens the sorting menu
async function dropdownSort(arrayMedia) {
  let btnSortOpen = document.getElementById("btnSortOpen");
  btnSortOpen.onclick = () => {
    displaySort();
    closeSortCall(arrayMedia);
  };
}

//closes the sorting menu after sorting or with "esc"
async function closeSortCall(arrayMedia) {
  let btnsSortClose = document.querySelectorAll(".dropBtn");

  for (let i = 0; i < btnsSortClose.length; i++) {
    let btnSortClose = btnsSortClose[i];
    btnSortClose.onclick = () => {
      let menuSort = document.querySelector(".menuSort");
      let btnSortOpen = document.getElementById("btnSortOpen");
      btnSortOpen.remove();
      if (i == 0) {
        arrayMedia = sortDescending(arrayMedia, "likes");
        menuSort.insertAdjacentHTML(
          "afterbegin",
          `<button id="btnSortOpen" class="btnSortOpen" data-currentsortid="dropBtnPop">
            Popularité
            <img src="assets/icons/dropdownClose.svg" alt="dropdown menu button">
          </button>`
        );
      } else if (i == 1) {
        arrayMedia = sortAscending(arrayMedia, "date");
        menuSort.insertAdjacentHTML(
          "afterbegin",
          `<button id="btnSortOpen" class="btnSortOpen" data-currentsortid="dropBtnDate">
            Date
            <img src="assets/icons/dropdownClose.svg" alt="dropdown menu button">
          </button>`
        );
      } else if (i == 2) {
        arrayMedia = sortAscending(arrayMedia, "title");
        menuSort.insertAdjacentHTML(
          "afterbegin",
          `<button id="btnSortOpen" class="btnSortOpen" data-currentsortid="dropBtnTitle">
            Titre
            <img src="assets/icons/dropdownClose.svg" alt="dropdown menu button">
          </button>`
        );
      }

      displayMedia(arrayMedia);
      navigationLightboxCall(arrayMedia);
      closeSort();
      toggleLike();
      dropdownSort(arrayMedia);
    };
  }
}

// handles enter keypresses as clicks for the sorting menu
function handleEnter() {
  const sectionSort = document.querySelector(".sectionSort");
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "Enter") {
      if (!sectionSort.contains(event.target)) {
        document.activeElement.click();
      }
    }
  });
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
  toggleLike();
  handleEnter();
}

init(intPhotographerId);
