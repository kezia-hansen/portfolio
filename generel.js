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

function openPopup() {
  if (window.innerWidth >= 768) {
    // Only open the pop-up on mobile
    return;
  }

  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/********************* Galleri ************************* */

var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var currentSlide = 0;

slides[currentSlide].style.display = "block";
dots[currentSlide].classList.add("active");

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  dots[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
  dots[currentSlide].classList.add("active");
}

function navigateSlider(n) {
  showSlide(currentSlide + n);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
