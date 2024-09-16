let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// Código JS para el Slider
let sliderIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function updateSlider() {
    document.querySelector('.slider').style.transform = `translateX(-${sliderIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % slides.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    sliderIndex = (sliderIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

// Cambio automático cada 5 segundos
setInterval(() => {
    sliderIndex = (sliderIndex + 1) % slides.length;
    updateSlider();
}, 5000);
