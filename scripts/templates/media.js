function mediaTemplate(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let path =
    data.image != null ? `assets/images/${image}` : `assets/videos/${video}`;

  const assetType = data.image != null ? "img" : "video";

  const sessionsList = document.querySelector(".portfolio_section");
  sessionsList.insertAdjacentHTML(
    "beforeend",
    `
    <article class="photographerArticle">
      <a src="${path}" class="mediaLink"
        ><${assetType}
          class="mediaImg"
          src="${path}"
          alt="${title}"
      /></a>
      <div class="mediaDetails">
        <h3 class="mediaH3">${title}</h3>
        <div class="divLikes">
          <p class="mediaLikes">${likes}</p>
          <i
            class="fa-solid fa-heart likeIcon"
            aria-label="likes"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </article>
    `
  );

  let totalLikes = document.getElementsByClassName("pTotalLikes")[0];
  totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + likes;

  //old way of handling the media template

  // function getMediaCardDOM() {
  //   const articleMedia = document.createElement("article");
  //   articleMedia.setAttribute("class", "articleMedia");

  //   const assetType = data.image != null ? "img" : "video";

  //   const linkMedia = document.createElement("a");
  //   linkMedia.setAttribute("src", path);
  //   linkMedia.setAttribute("class", "mediaLink");

  //   const thumbnailMedia = document.createElement(assetType);
  //   thumbnailMedia.setAttribute("class", "mediaImg");
  //   thumbnailMedia.setAttribute("src", path);
  //   thumbnailMedia.setAttribute("alt", `${title}`);

  //   const divDetails = document.createElement("div");
  //   divDetails.setAttribute("class", "mediaDetails");

  //   const h3Title = document.createElement("h3");
  //   h3Title.setAttribute("class", "mediaH3");
  //   h3Title.textContent = title;

  //   const divLikes = document.createElement("div");
  //   divLikes.setAttribute("class", "divLikes");

  //   const pLikes = document.createElement("p");
  //   pLikes.setAttribute("class", "mediaLikes");
  //   pLikes.textContent = likes;

  //   //tallies the total likes
  //   let totalLikes = document.getElementsByClassName("pTotalLikes")[0];
  //   totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + likes;

  //   // if (likes === 1) {
  //   //   // only 1 like is singular
  //   //   pLikes.textContent = likes + " like";
  //   // } else {
  //   //   pLikes.textContent = likes + " likes";
  //   // }

  //   const iLikes = document.createElement("i");
  //   iLikes.setAttribute("class", "fa-solid fa-heart likeIcon");
  //   iLikes.setAttribute("aria-label", "likes");

  //   articleMedia.appendChild(linkMedia);
  //   articleMedia.appendChild(divDetails);
  //   linkMedia.appendChild(thumbnailMedia);
  //   divDetails.appendChild(h3Title);
  //   divDetails.appendChild(divLikes);
  //   divLikes.appendChild(pLikes);
  //   divLikes.appendChild(iLikes);

  //   return articleMedia;
  // }
  // return { title, path, getMediaCardDOM };
}
