var slideIndex = 1;
showSlides(slideIndex);

bg.style.backgroundImage = `url(${slideIndex}.jpg)`;
bg.style.filter = "blur(8px)";
bg.style.transform= "scale(1.03)"

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var bg = document.getElementById("g-bg");
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  bg.style.backgroundImage = `url(${slideIndex}.jpg)`;
  bg.style.filter = "blur(5px)";
  bg.style.transform= "scale(1.03)";
}



function closeMenu(){
  var mobile_menu = document.getElementById("mobile_menu");
  console.log("clicked");
  mobile_menu.style.display = "none";
}

function openMenu(){
  var mobile_menu = document.getElementById("mobile_menu");
  console.log("clicked");
  mobile_menu.style.display = "flex";
}