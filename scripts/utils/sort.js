const buttonIds = ["dropBtnPop", "dropBtnDate", "dropBtnTitle"];
//Handle the keyboard navigation eventlistener of the sort menu
function sortEventListener(evt) {
  const dropBtns = document.querySelectorAll(".dropBtn");
  if (evt.key === "Escape") {
    closeSort(sortEventListener);
  } else if (evt.key === "ArrowUp") {
    evt.preventDefault();
    let currentFocusedButton = document.activeElement;
    let currentIndex = Array.from(dropBtns).indexOf(currentFocusedButton);

    // Handle wrapping around to the last button on Up arrow
    if (currentIndex === 0) {
      currentIndex = dropBtns.length - 1;
    } else {
      currentIndex--;
    }
    dropBtns[currentIndex].focus();
  } else if (evt.key === "ArrowDown") {
    evt.preventDefault();
    let currentFocusedButton = document.activeElement;
    let currentIndex = Array.from(dropBtns).indexOf(currentFocusedButton);

    // Handle wrapping around to the first button on Down arrow
    if (currentIndex === dropBtns.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    dropBtns[currentIndex].focus();
  }
}

//displays the sortmenu and puts focus on the Pop element
function displaySort() {
  const sortMenu = document.getElementById("sortDropdown");
  sortMenu.style.display = "block";

  const btnSortOpen = document.getElementById("btnSortOpen");
  let currentSort = btnSortOpen.dataset.currentsortid;

  buttonIds.forEach((id) => {
    const button = document.getElementById(id);

    const existingImage = button.querySelector("img");
    if (existingImage) {
      existingImage.remove();
    }

    if (id === currentSort) {
      button.innerHTML += `<img src="assets/icons/dropdownClose.svg" alt="dropdown menu button">`;
    }
  });
  
  btnSortOpen.setAttribute("aria-hidden", "true");
  btnSortOpen.setAttribute("tabindex", "-1");

  const dropBtns = document.querySelectorAll(".dropBtn");
  dropBtns[0].focus();

  document.addEventListener("keydown", sortEventListener);
}

//closes the sortmenu
function closeSort() {
  document.getElementById("btnSortOpen").setAttribute("aria-hidden", "false");
  document.getElementById("btnSortOpen").setAttribute("tabindex", "0");
  const sortMenu = document.getElementById("sortDropdown");
  sortMenu.style.display = "none";

  document.removeEventListener("keydown", sortEventListener);
  document.getElementById("btnSortOpen").focus();
}

function sortAscending(list, sortByKey) {
  const sortedList = Array.from(list);
  sortedList.sort((a, b) => {
    if (a[sortByKey] === null) return 1; //null at the end
    if (b[sortByKey] === null) return -1;
    if (a[sortByKey] === b[sortByKey]) return 0;
    if (typeof a[sortByKey] === "string")
      return a[sortByKey].localeCompare(b[sortByKey], "fr");
    return a[sortByKey] > b[sortByKey] ? 1 : -1;
  });
  return sortedList;
}

//Sorts a list of objects in descending order by a key, values can be number or string
function sortDescending(list, sortByKey) {
  const sortedList = Array.from(list);
  sortedList.sort((b, a) => {
    if (a[sortByKey] === null) return 1; //null at the start
    if (b[sortByKey] === null) return -1;
    if (a[sortByKey] === b[sortByKey]) return 0;
    if (typeof a[sortByKey] === "string")
      return a[sortByKey].localeCompare(b[sortByKey], "fr");
    return a[sortByKey] > b[sortByKey] ? 1 : -1;
  });
  return sortedList;
}

export { displaySort, closeSort, sortAscending, sortDescending };
