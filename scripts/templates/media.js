function mediaTemplate(data) {
  const { title, image, video, likes } = data;

  let path =
    data.image != null ? `assets/images/${image}` : `assets/videos/${video}`;

  const assetType = data.image != null ? "img" : "video";

  const sectionMedia = document.querySelector(".portfolio_section");
  sectionMedia.insertAdjacentHTML(
    "beforeend",
    `
    <article class="photographerArticle">
      <a src="${path}" class="mediaLink"
        ><${assetType}
          class="mediaType"
          src="${path}"
          alt="${title}"
          data-title="${title}"
          tabindex="0"
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
}

export { mediaTemplate };
