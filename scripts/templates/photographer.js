export { photographerTemplate };

function photographerTemplate(data) {
  const { name, portrait, tagline, price, city, country } = data;
  const path = `assets/photographers/${portrait}`;

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
  const divTotalLikes = document.querySelector(".divPhotographerPricing");
  divTotalLikes.insertAdjacentHTML(
    "beforeend",
    `
    <div class="divPhotographerPricing">
      <div class="divTotalLikes">
        <p class="pTotalLikes">0</p>
        <i class="fa-solid fa-heart"></i>
      </div>
      <p class="pPricing">${price}€ / jour</p>
    </div>
    `
  );
  return { name, path };
}
