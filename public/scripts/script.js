

var homeform = document.getElementById("home-form");
var showcaseform = document.getElementById("showcase-form");

document.getElementById("home-link").addEventListener("click", function () {
  homeform.submit();
});

document.getElementById("showcase-link").addEventListener("click", function () {
  showcaseform.submit();
});
