// loading animation
$(window).on('load', function () {
    $(".loader-wrapper").fadeOut("fast");
});

// to start animation after page load
document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

// to keep viewport height constant with virtual keyboard on phones
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
        if (isAndroid) {
            document.write('<meta name="viewport" content="width=device-width,height=' + window.innerHeight + ', initial-scale=1.0">');
        }

