/* ***********************************************************
                          SLIDER
************************************************************ */

let slideIndex = 1;
if (document.getElementsByClassName("slideshow-container").length != 0) {
  let repeatSlider = setTimeout(function repeat() {
    showSlides(slideIndex);
    slideIndex++;
    repeatSlider = setTimeout(repeat, 8000);
  }, 0);
} else if (document.getElementsByClassName("slideshow-container").length == 0) {
  showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides != undefined) {
    slides[slideIndex - 1].style.display = "block";
  }
  dots[slideIndex - 1].className += " active";
}

/* ***********************************************************
                         SALE SLIDER 
************************************************************ */

let SaleSlideIndex = 1;
if (document.getElementsByClassName("saleslideshow-container").length != 0) {
  let repeatSlider = setTimeout(function repeat() {
    SaleShowSlides(SaleSlideIndex);
    SaleSlideIndex++;
    repeatSlider = setTimeout(repeat, 4000);
  }, 0);

  function SalePlusSlides(n) {
    SaleShowSlides((SaleSlideIndex += n));
  }

  function SaleCurrentSlide(n) {
    SaleShowSlides((SaleSlideIndex = n));
  }

  function SaleShowSlides(n) {
    let slides = document.getElementsByClassName("saleSlides");
    let dots = document.getElementsByClassName("saleDot");
    if (n > slides.length) {
      SaleSlideIndex = 1;
    }
    if (n < 1) {
      SaleSlideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides.length > 0) {
      slides[SaleSlideIndex - 1].style.display = "flex";
      dots[SaleSlideIndex - 1].className += " active";
    }
  }
}
