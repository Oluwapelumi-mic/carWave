document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelector(".carousel-slides");
    const slideWidth = carousel.offsetWidth;
    const prevButton = carousel.querySelector(".prev-button");
    const nextButton = carousel.querySelector(".next-button");
    let currentSlide = 0;
  
    // Function to slide to the specified slide index
    function slideTo(index) {
      slides.style.transform = `translateX(-${slideWidth * index}px)`;
      currentSlide = index;
    }
  
    // Function to slide to the previous slide
    function slidePrev() {
      if (currentSlide === 0) {
        slideTo(slides.children.length - 1);
      } else {
        slideTo(currentSlide - 1);
      }
    }
  
    // Function to slide to the next slide
    function slideNext() {
      if (currentSlide === slides.children.length - 1) {
        slideTo(0);
      } else {
        slideTo(currentSlide + 1);
      }
    }
  
    // Attach click event listeners to the buttons
    prevButton.addEventListener("click", slidePrev);
    nextButton.addEventListener("click", slideNext);
  
    // Auto slide every 7 seconds
    setInterval(slideNext,7000);
  });
