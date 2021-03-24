

var homeform = document.getElementById("home-form");
var showcaseform = document.getElementById("showcase-form");
var showcaseform2 = document.getElementById("showcase-form-2");

document.getElementById("home-link").addEventListener("click", function () {
  homeform.submit();
});

document.getElementById("showcase-link").addEventListener("click", function () {
  showcaseform.submit();
});

document.getElementById("showcase-link-2").addEventListener("click", function () {
  showcaseform2.submit();
});
