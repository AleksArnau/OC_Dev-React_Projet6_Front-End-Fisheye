function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";

  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "false");
  document.getElementById("body").classList.add("noScroll");

  document.querySelector(".btnModalClose").focus();

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";

  document.querySelector(".btnModalOpen").focus();

  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "true");
  document.getElementById("body").classList.remove("noScroll");
}

function handleEnter(e) {
  var keycode = e.keyCode ? e.keyCode : e.which;
  if (keycode == "13") {
    document.activeElement.click();
  }
}
