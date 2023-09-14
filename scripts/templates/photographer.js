function photographerTemplate(data) {
  const { name, portrait, tagline, price, city, country, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const articlePhotographer = document.createElement("article");
    articlePhotographer.setAttribute("class", "photographerArticle");

    const linkPhotographer = document.createElement("a");
    linkPhotographer.setAttribute("href", `./photographer.html?id=${id}`);
    linkPhotographer.setAttribute("class", "photographerLink");

    const imgPicture = document.createElement("img");
    imgPicture.setAttribute("class", "photographerImg");
    imgPicture.setAttribute("src", picture);

    const h2Name = document.createElement("h2");
    h2Name.setAttribute("class", "photographerH2");
    h2Name.textContent = name;

    const divDetails = document.createElement("div");
    divDetails.setAttribute("class", "photographerDetails");

    const pLocation = document.createElement("p");
    pLocation.setAttribute("class", "photographerLocation");
    pLocation.textContent = city + ", " + country;

    const pTagline = document.createElement("p");
    pTagline.setAttribute("class", "photographerTagline");
    pTagline.textContent = tagline;

    const pPrice = document.createElement("p");
    pPrice.setAttribute("class", "photographerPrice");
    pPrice.textContent = price + "€/jour";

    articlePhotographer.appendChild(linkPhotographer);
    articlePhotographer.appendChild(divDetails);
    linkPhotographer.appendChild(imgPicture);
    linkPhotographer.appendChild(h2Name);
    divDetails.appendChild(pLocation);
    divDetails.appendChild(pTagline);
    divDetails.appendChild(pPrice);

    return articlePhotographer;
  }
  return { name, picture, getUserCardDOM };
}

function photoTemplate(data) {
  const { id, photographerId, title, image, likes, date, price } = data;

  const picture = `assets/images/${image}`;

  function getPhotoCardDOM() {
    const articlePhoto = document.createElement("article");
    articlePhoto.setAttribute("class", "articlePhoto");

    const linkPhoto = document.createElement("a");
    linkPhoto.setAttribute("href", `./photo.html?id=${id}`);
    linkPhoto.setAttribute("class", "photoLink");

    const imgPicture = document.createElement("img");
    imgPicture.setAttribute("class", "photoImg");
    imgPicture.setAttribute("src", picture);

    const divDetails = document.createElement("div");
    divDetails.setAttribute("class", "photoDetails");

    const h3Title = document.createElement("h3");
    h3Title.setAttribute("class", "photoH3");
    h3Title.textContent = title;

    const pLikes = document.createElement("p");
    pLikes.setAttribute("class", "photoLikes");
    pLikes.textContent = likes + " likes";

    articlePhoto.appendChild(linkPhoto);
    articlePhoto.appendChild(divDetails);
    linkPhoto.appendChild(imgPicture);
    divDetails.appendChild(h3Title);
    divDetails.appendChild(pLikes);

    return articlePhoto;
  }
  return { title, picture, getPhotoCardDOM };
}
