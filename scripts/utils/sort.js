//displays the sortmenu and puts focus on the Pop element
function displaySort() {
  const sortMenu = document.getElementById("sortDropdown");
  sortMenu.style.display = "block";

  document.getElementById("dropBtnPop").focus();
}

//closes the sortmenu
function closeSort() {
  const sortMenu = document.getElementById("sortDropdown");
  sortMenu.style.display = "none";
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
