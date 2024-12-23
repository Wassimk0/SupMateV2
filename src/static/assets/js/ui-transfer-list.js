// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Function to handle click on list items
document.querySelectorAll(".list1 li, .list2 li").forEach(function (li) {
  var checkbox = li.querySelector('input[type="checkbox"]');

  // Click handler for the list item
  li.addEventListener("click", function (event) {
    if (!event.target.matches('input[type="checkbox"]')) {
      checkbox.checked = !checkbox.checked;
    }
    this.classList.toggle("selected", checkbox.checked);
  });

  // Click handler for the checkbox
  checkbox.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the li click event from firing
    li.classList.toggle("selected", this.checked);
  });
});

// Function to move selected items from list2 to list1
document.getElementById("move_left").addEventListener("click", function () {
  var selectedItems = document.querySelectorAll(".list2 .selected");
  selectedItems.forEach(function (item) {
    item.classList.remove("selected");
    var checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.checked = false;
    document.querySelector("ul.list1").appendChild(item);
  });
});

// Function to move selected items from list1 to list2
document.getElementById("move_right").addEventListener("click", function () {
  var selectedItems = document.querySelectorAll(".list1 .selected");
  selectedItems.forEach(function (item) {
    item.classList.remove("selected");
    var checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.checked = false;
    document.querySelector("ul.list2").appendChild(item);
  });
});

// // Function to move all items from list1 to list2
document
  .getElementById("move_all_right")
  .addEventListener("click", function () {
    var allItems = document.querySelectorAll(".list1 li");
    allItems.forEach(function (item) {
      document.querySelector(".list2").appendChild(item);
    });
  });

// Function to move all items from list2 to list1
document.getElementById("move_all_left").addEventListener("click", function () {
  var allItems = document.querySelectorAll(".list2 li");
  allItems.forEach(function (item) {
    document.querySelector(".list1").appendChild(item);
  });
});
