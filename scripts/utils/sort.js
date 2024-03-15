//displays the sortmenu and puts focus on the Pop element
function displaySort() {
  const sortMenu = document.getElementById("sortDropdown");
  sortMenu.style.display = "block";

  const btnSortOpen = document.getElementById("btnSortOpen");
  btnSortOpen.setAttribute("aria-hidden", "true");
  btnSortOpen.setAttribute("tabindex", "-1");

  const dropBtns = sortMenu.querySelectorAll(".dropBtn");
  dropBtns[0].focus();

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeSort();
    } else if (evt.key === "ArrowUp") {
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
  });
}

//closes the sortmenu
function closeSort() {
  document.getElementById("btnSortOpen").setAttribute("aria-hidden", "false");
  document.getElementById("btnSortOpen").setAttribute("tabindex", "0");
  const sortMenu = document.getElementById("sortDropdown");
  sortMenu.style.display = "none";

  document.getElementById("btnSortOpen").focus();
}

function sortAscending(list, sortByKey) {
  const sortedList = Array.from(list);
  sortedList.sort(function (a, b) {
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
  sortedList.sort(function (b, a) {
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
