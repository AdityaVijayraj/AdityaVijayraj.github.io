// scripts for portfolio

// collapse navbar when link is clicked
let toggleButton = document.querySelector("#menuToggle input");
let navMenu = document.querySelectorAll("#menu a");
function clickNavbar() {
  toggleButton.click();
}
for (let i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", clickNavbar);
}
