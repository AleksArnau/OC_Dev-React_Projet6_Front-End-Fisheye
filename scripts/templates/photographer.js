function photographerTemplate(data) {
  const { name, portrait, tagline, price, city, country, id } = data;
  const path = `assets/photographers/${portrait}`;

  //old way of doing picture

  // const divPictureFrame = document.createElement("div");
  // divPictureFrame.setAttribute("class", "photographerImgFrame");

  // const imgPicture = document.createElement("img");
  // imgPicture.setAttribute("class", "photographerImg");
  // imgPicture.setAttribute("alt", `${name}'s portrait`);
  // imgPicture.setAttribute("src", path);

  // divPictureFrame.appendChild(imgPicture);

  const divPhotographerPortrait = document.querySelector(
    ".divPhotographerPortrait"
  );
  divPhotographerPortrait.insertAdjacentHTML(
    "beforeend",
    `
    <div class="photographerImgFrame">
      <img class="photographerImg" alt="${name}'s portrait" src="${path}" />
    </div>
`
  );

  const photographersDetails = document.querySelector(
    ".divPhotographerDetails"
  );
  photographersDetails.insertAdjacentHTML(
    "beforeend",
    `
      <div class="photographerDiv">
          <h1 class="photographerH1">${name}</h1>
          <div class="photographerDetails">
            <p class="photographerLocation">${city}, ${country}</p>
            <p class="photographerTagline">${tagline}</p>
          </div>
        </div>
      `
  );

  //Likes and pricing tab

  let totalLikes = 0;

  const divTotalLikes = document.querySelector(".divPhotographerPricing");
  divTotalLikes.insertAdjacentHTML(
    "beforeend",
    `
    <div class="divPhotographerPricing">
      <div class="divTotalLikes">
        <p class="pTotalLikes">${totalLikes}</p>
        <i class="fa-solid fa-heart"></i>
      </div>
      <p class="pPricing">${price}€ / jour</p>
    </div>
    `
  );

  //old way of doing likes

  // const divPricing = document.createElement("div");
  // divPricing.setAttribute("class", "divPhotographerPricing");

  // const divTotalLikes = document.createElement("div");
  // divTotalLikes.setAttribute("class", "divTotalLikes");
  // divPricing.appendChild(divTotalLikes);

  // const pTotalLikes = document.createElement("p");
  // pTotalLikes.setAttribute("class", "pTotalLikes");
  // pTotalLikes.textContent = totalLikes;
  // divTotalLikes.appendChild(pTotalLikes);

  // const iHeart = document.createElement("i");
  // iHeart.setAttribute("class", "fa-solid fa-heart");
  // divTotalLikes.appendChild(iHeart);

  // const pPricing = document.createElement("p");
  // pPricing.setAttribute("class", "pPricing");
  // pPricing.textContent = price + "€ / jour";
  // divPricing.appendChild(pPricing);

  //old way of generating DOM

  // function getUserCardDOM() {
  //   const divPhotographer = document.createElement("div");
  //   divPhotographer.setAttribute("class", "photographerDiv");

  //   const h2Name = document.createElement("h1");
  //   h2Name.setAttribute("class", "photographerH1");
  //   h2Name.textContent = name;

  //   const divDetails = document.createElement("div");
  //   divDetails.setAttribute("class", "photographerDetails");

  //   const pLocation = document.createElement("p");
  //   pLocation.setAttribute("class", "photographerLocation");
  //   pLocation.textContent = city + ", " + country;

  //   const pTagline = document.createElement("p");
  //   pTagline.setAttribute("class", "photographerTagline");
  //   pTagline.textContent = tagline;

  //   divPhotographer.appendChild(h2Name);
  //   divPhotographer.appendChild(divDetails);
  //   divDetails.appendChild(pLocation);
  //   divDetails.appendChild(pTagline);

  //   return divPhotographer;
  // }

  // return {
  //   name,
  //   path,
  //   divPictureFrame,
  //   divPricing,
  //   getUserCardDOM,
  // };

  return { name, path };
}
