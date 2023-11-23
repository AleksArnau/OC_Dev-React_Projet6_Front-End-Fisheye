function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";

  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("main").setAttribute("tabindex", "-1");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "false");
  document.getElementById("body").classList.add("noScroll");

  document.querySelector(".btnModalClose").focus();

  document.addEventListener(
    "keydown",
    (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    },
    { once: true }
  );
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.getElementById("body").classList.remove("noScroll");

  document.querySelector(".btnModalOpen").focus();

  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "true");
}

function handleEnter(e) {
  var keycode = e.keyCode ? e.keyCode : e.which;
  if (keycode == "13") {
    document.activeElement.click();
  }
}
