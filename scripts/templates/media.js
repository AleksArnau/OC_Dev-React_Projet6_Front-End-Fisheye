function mediaTemplate(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  const picture =
    `assets/` + (data.image != null ? `images/${image}` : `videos/${video}`);

  function getMediaCardDOM() {
    const articleMedia = document.createElement("article");
    articleMedia.setAttribute("class", "articleMedia");

    const linkMedia = document.createElement("a");
    linkMedia.setAttribute("href", `./video.html?id=${id}`);
    linkMedia.setAttribute("class", "mediaLink");

    const thumbnailMedia = document.createElement(
      data.image != null ? "img" : "video"
    );
    thumbnailMedia.setAttribute("class", "mediaImg");
    thumbnailMedia.setAttribute("src", picture);

    const divDetails = document.createElement("div");
    divDetails.setAttribute("class", "mediaDetails");

    const h3Title = document.createElement("h3");
    h3Title.setAttribute("class", "mediaH3");
    h3Title.textContent = title;

    const pLikes = document.createElement("p");
    pLikes.setAttribute("class", "mediaLikes");
    if (likes === 1) {
      // only 1 like is singular
      pLikes.textContent = likes + " like";
    } else {
      pLikes.textContent = likes + " likes";
    }

    articleMedia.appendChild(linkMedia);
    articleMedia.appendChild(divDetails);
    linkMedia.appendChild(thumbnailMedia);
    divDetails.appendChild(h3Title);
    divDetails.appendChild(pLikes);

    return articleMedia;
  }
  return { title, picture, getMediaCardDOM };
}
