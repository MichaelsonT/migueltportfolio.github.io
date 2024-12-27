let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');

function moveSlide(n) {
    slides[slideIndex].style.display = 'none';
    dots[slideIndex].classList.remove('active');
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    slides[slideIndex].style.display = 'none';
    dots[slideIndex].classList.remove('active');
    slideIndex = n;
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 5000);
}

slides[slideIndex].style.display = 'block';
dots[slideIndex].classList.add('active');
setTimeout(autoSlide, 5000);
