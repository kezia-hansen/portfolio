/*******************************burger ******************* */

var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

/*********************cuwnt down ************************* */
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "07/27/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)), (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)), (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)), (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));

      //seconds
    }, 0);
})();

/****************Pop up til program******************** */
function showPopup(title, description, spotifyLink, imageUrl) {
  var popup = document.getElementById("popup");
  var popupImage = document.getElementById("popup-image");
  var popupTitle = document.getElementById("popup-title");
  var popupDescription = document.getElementById("popup-description");
  var spotifyLinkElement = document.getElementById("spotify-link");

  popupImage.src = imageUrl;
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  spotifyLinkElement.href = spotifyLink;

  popup.style.display = "block";

  var closeBtn = document.getElementById("close-btn");
  closeBtn.onclick = function () {
    popup.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
}
/********************* pop-up til om Alive ************************* */
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/********************* pop-up til FAQ ***************************** */
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/********************* Carousel Galleri til om Alive ************************* */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
