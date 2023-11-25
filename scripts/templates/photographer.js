function photographerTemplate(data) {
  const { name, portrait, tagline, price, city, country, id } = data;
  const path = `assets/photographers/${portrait}`;

  const divPictureFrame = document.createElement("div");
  divPictureFrame.setAttribute("class", "photographerImgFrame");

  const imgPicture = document.createElement("img");
  imgPicture.setAttribute("class", "photographerImg");
  imgPicture.setAttribute("alt", `${data.name}'s portrait`);
  imgPicture.setAttribute("src", path);

  divPictureFrame.appendChild(imgPicture);

  const divPricing = document.createElement("div");
  divPricing.setAttribute("class", "divPhotographerPricing");

  let totalLikes = 0; //TODO add dynamic likes

  const divTotalLikes = document.createElement("div");
  divTotalLikes.setAttribute("class", "divTotalLikes");
  divPricing.appendChild(divTotalLikes);

  const pTotalLikes = document.createElement("p");
  pTotalLikes.setAttribute("class", "pTotalLikes");
  pTotalLikes.textContent = totalLikes;
  divTotalLikes.appendChild(pTotalLikes);

  const iHeart = document.createElement("i");
  iHeart.setAttribute("class", "fa-solid fa-heart");
  divTotalLikes.appendChild(iHeart);

  const pPricing = document.createElement("p");
  pPricing.setAttribute("class", "pPricing");
  pPricing.textContent = price + "€ / jour";
  divPricing.appendChild(pPricing);

  function getUserCardDOM() {
    const divPhotographer = document.createElement("div");
    divPhotographer.setAttribute("class", "photographerDiv");

    const h2Name = document.createElement("h1");
    h2Name.setAttribute("class", "photographerH1");
    h2Name.textContent = name;

    const divDetails = document.createElement("div");
    divDetails.setAttribute("class", "photographerDetails");

    const pLocation = document.createElement("p");
    pLocation.setAttribute("class", "photographerLocation");
    pLocation.textContent = city + ", " + country;

    const pTagline = document.createElement("p");
    pTagline.setAttribute("class", "photographerTagline");
    pTagline.textContent = tagline;

    divPhotographer.appendChild(h2Name);
    divPhotographer.appendChild(divDetails);
    divDetails.appendChild(pLocation);
    divDetails.appendChild(pTagline);

    return divPhotographer;
  }

  return {
    name,
    path,
    divPictureFrame,
    divPricing,
    getUserCardDOM,
  };
}
