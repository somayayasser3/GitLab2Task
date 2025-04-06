var slider = document.getElementById('slider');
var images = slider.querySelectorAll('img');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');

var index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slider.style.transform = `translateX(-${index * 800}px)`;
}

nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
});

setInterval(() => {
  showSlide(index + 1);
}, 5000); 