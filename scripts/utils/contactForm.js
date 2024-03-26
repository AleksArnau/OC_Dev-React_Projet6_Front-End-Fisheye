//displays the modal and starts the eventlisteners to close it
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";

  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("main").setAttribute("tabindex", "-1");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "false");
  document.getElementById("body").classList.add("noScroll");

  document.querySelector(".btnModalClose").focus();

  document.addEventListener("keydown", (evt) => {
    if (
      evt.key === "Escape" &&
      document.getElementById("main").getAttribute("aria-hidden") === "true"
    ) {
      closeModal();
    }
  });

  return modal;
}

//closes the modal and resets the aria properties
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.getElementById("body").classList.remove("noScroll");

  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "true");

  setTimeout(() => {
    document.querySelector(".btnModalOpen").focus();
  }, 100);
}

export { displayModal, closeModal };
