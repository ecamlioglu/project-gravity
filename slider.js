var currentSlider = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  currentSlider++;
  if (currentSlider > slides.length) {currentSlider = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentSlider-1].style.display = "block";  
  dots[currentSlider-1].className += " active";
  setTimeout(showSlides, 1000);
}