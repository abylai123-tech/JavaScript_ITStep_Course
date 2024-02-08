let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
let radios = document.querySelectorAll('.slider-radio');
let currentIndex = 0;
let indicator = document.querySelector('.indicator');

function updateSlider() {
    for (let [index, slide] of slides.entries()) {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
    for (let [index, radio] of radios.entries()) {
        radio.checked = index === currentIndex;
    }
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

for (let [index, radio] of radios.entries()) {
    radio.addEventListener('change', function() {
        goToSlide(index);
    });
}

updateSlider();