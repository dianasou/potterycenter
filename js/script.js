/* open menu when someone clicks on menu span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* close menu when someone clicks on the "x" symbol */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // change image every 4 seconds
}
