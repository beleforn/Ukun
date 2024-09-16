let navbar = document.querySelector('.navbar');

let searchForm = document.querySelector('.search-form'); //
let cartItem = document.querySelector('.cart-item');    //

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    closeAllModals(); // Cierra todas las ventanas modales al hacer scroll
}

// Función para abrir la ventana modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Función para cerrar la ventana modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Función para cerrar todas las ventanas modales
function closeAllModals() {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Evita que las modales se muestren al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    closeAllModals(); // Asegúrate de que las modales están cerradas al cargar
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-image');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializa el primer slide al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
