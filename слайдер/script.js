var slides = document.getElementsByClassName('mySlydes');
var dots = document.getElementsByClassName('dot');
var slideIndex = 1;
showSlides(slideIndex);

function plusSlider(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   currentSlide(slideIndex = n);
}
function showSlides(n){
   if (n > slides.length) {
      slideIndex = 1;
   } else if (n < 1) {
      slideIndex = slides.length;
   } 
   for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
   }
   for (var j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace('active', '');
   }
   slides[slideIndex-1].style.display = 'block';
   dots[slideIndex-1].className += ' active';
}