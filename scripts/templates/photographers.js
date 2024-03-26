function photographersTemplate(data) {
  const { name, portrait, tagline, price, city, country, id } = data;
  const path = `assets/photographers/${portrait}`;

  const sessionsList = document.querySelector(".photographer_section");
  sessionsList.insertAdjacentHTML(
    "beforeend",
    `
    <article class="photographerArticle">
      <a href="./photographer.html?id=${id}" class="photographerLink" alt="${name}">
        <div class="photographerImgFrame">
          <img
            class="photographerImg"
            alt="${name}'s portrait"
            src="${path}"
          />
        </div>
        <h2 class="photographerH2">${name}</h2>
      </a>
      <div class="photographerDetails">
        <p class="photographerLocation">${city}, ${country}</p>
        <p class="photographerTagline">${tagline}</p>
        <p class="photographerPrice">${price}€/jour</p>
      </div>
    </article>
    `
  );
  return { name, path };
}

export { photographersTemplate };
