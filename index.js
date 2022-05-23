var myCarousel = document.querySelector('carousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  myCarousel.carousel("next")
});


$('.dropdown-toggle').dropdown()
