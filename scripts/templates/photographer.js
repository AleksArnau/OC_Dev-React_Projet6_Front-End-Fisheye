function photographerTemplate(data) {
  const { name, portrait, tagline, price, city, country, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const articlePhotographer = document.createElement("article");

    const imgPicture = document.createElement("img");
    imgPicture.setAttribute("src", picture);

    const h2Name = document.createElement("h2");
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

    articlePhotographer.appendChild(imgPicture);
    articlePhotographer.appendChild(h2Name);
    articlePhotographer.appendChild(divDetails);
    divDetails.appendChild(pLocation);
    divDetails.appendChild(pTagline);
    divDetails.appendChild(pPrice);

    return articlePhotographer;
  }
  return { name, picture, getUserCardDOM };
}
