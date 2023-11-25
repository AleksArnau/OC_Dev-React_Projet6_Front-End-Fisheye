//displays the lightbox modal and turns on the eventlisteners
function displayLightbox(path, title, mediaList) {
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "block";

  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("main").setAttribute("tabindex", "-1");
  document
    .getElementById("lightbox_modal")
    .setAttribute("aria-hidden", "false");
  document.getElementById("body").classList.add("noScroll");

  displayMediaLightbox(path, title);

  document.querySelector(".btnLightboxClose").focus();

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeLightbox();
    } else if (evt.key === "ArrowRight") {
      nextLightbox(mediaList);
    } else if (evt.key == "ArrowLeft") {
      previousLightbox(mediaList);
    }
  });

  let btnLightboxClose = document.getElementsByClassName("btnLightboxClose")[0];
  btnLightboxClose.onclick = function () {
    closeLightbox();
  };

  let btnRight = document.getElementsByClassName("btnRight")[0];
  btnRight.onclick = function () {
    nextLightbox(mediaList);
  };

  let btnLeft = document.getElementsByClassName("btnLeft")[0];
  btnLeft.onclick = function () {
    previousLightbox(mediaList);
  };
}

//closes the lightbox and turns back the aria labels
function closeLightbox() {
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "none";
  document.getElementById("body").classList.remove("noScroll");

  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("lightbox_modal").setAttribute("aria-hidden", "true");
}

//displays the media in the lightbox
function displayMediaLightbox(path, title) {
  let mediaElement;

  if (path.includes("video")) {
    mediaElement = document.createElement("video");
    mediaElement.setAttribute("class", "imgLightbox");
    mediaElement.setAttribute("autoplay", ``);
    mediaElement.setAttribute("loop", ``);

    const mediaElementSource = document.createElement("source");
    mediaElementSource.setAttribute("src", `${path}`);
    mediaElementSource.setAttribute("type", `video/mp4`);

    mediaElement.appendChild(mediaElementSource);
  } else {
    mediaElement = document.createElement("img");
    mediaElement.setAttribute("src", `${path}`);
  }

  mediaElement.setAttribute("class", "imgLightbox");
  mediaElement.setAttribute("alt", `${title}`);

  const divLightbox = document.getElementById("divLightbox");
  divLightbox.removeChild(divLightbox.firstChild);
  divLightbox.appendChild(mediaElement);

  document.getElementById("h3Lightbox").textContent = title;
}

//creates the mediapath string
function createMediaPath(media) {
  return media.image != null
    ? `assets/images/${media.image}`
    : `assets/videos/${media.video}`;
}

//changes the index and goes to the next media
async function nextLightbox(mediaList) {
  let mediaTitle = document.getElementById("h3Lightbox").innerHTML;
  let index = mediaList.findIndex((object) => {
    return object.title === mediaTitle;
  });

  let newIndex = index + 1;
  if (newIndex >= mediaList.length) {
    newIndex = 0;
  }
  if (newIndex < 0) {
    newIndex = mediaList.length - 1;
  }

  let mediaPath = createMediaPath(mediaList[newIndex]);
  displayMediaLightbox(mediaPath, mediaList[newIndex].title);
}

//changes the index and goes to the previous media
function previousLightbox(mediaList) {
  let mediaTitle = document.getElementById("h3Lightbox").innerHTML;
  let index = mediaList.findIndex((object) => {
    return object.title === mediaTitle;
  });

  let newIndex = index - 1;
  if (newIndex >= mediaList.length) {
    newIndex = 0;
  }
  if (newIndex < 0) {
    newIndex = mediaList.length - 1;
  }

  let mediaPath = createMediaPath(mediaList[newIndex]);
  displayMediaLightbox(mediaPath, mediaList[newIndex].title);
}
