// Show/hide sandwich dropdown menu (services and privacy)
function toggleSandwichDropdown() {
  document.getElementById("sandwich-dropdown-button").classList.toggle("show-dropdown");
}

// Close dropdown menus when clicking outside
window.onclick = function(event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdownButtons = document.getElementsByClassName("dropdown-button");
    var i;
    for (i = 0; i < dropdownButtons.length; i++) {
      var dropdownButton = dropdownButtons[i];
      if (dropdownButton.classList.contains("show-dropdown")) {
        dropdownButton.classList.remove("show-dropdown");
      }
    }
  }
}
