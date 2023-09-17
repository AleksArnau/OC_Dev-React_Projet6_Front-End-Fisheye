function photographerTemplate(data) {
  const { name, portrait, tagline, price, city, country, id } = data;

  const picture = `assets/photographers/${portrait}`;

  const divPictureFrame = document.createElement("div");
  divPictureFrame.setAttribute("class", "photographerImgFrame");

  const imgPicture = document.createElement("img");
  imgPicture.setAttribute("class", "photographerImg");
  imgPicture.setAttribute("alt", `${data.name}'s portrait`);
  imgPicture.setAttribute("src", picture);

  divPictureFrame.appendChild(imgPicture);

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

  return { name, picture, divPictureFrame, getUserCardDOM };
}
