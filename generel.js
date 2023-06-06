/*******************************burger ******************* */

var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

/********************* pop-up til om Alive ************************* */
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
