// loading animation
$(window).on('load', function () {
    $(".loader-wrapper").fadeOut("fast");
});

// to keep viewport height constant with virtual keyboard on phones
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
        if (isAndroid) {
            document.write('<meta name="viewport" content="width=device-width,height=' + window.innerHeight + ', initial-scale=1.0">');
        }

// collapse navbar when link is clicked
let toggleButton = document.querySelector("#menuToggle input");
let navMenu = document.querySelectorAll("#menu a");
function clickNavbar() {
  toggleButton.click();
}
for (let i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", clickNavbar);
}