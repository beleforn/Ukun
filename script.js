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

document.querySelector('#contact-form').onsubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtén los valores de los campos del formulario
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const message = document.querySelector('#message').value;

    // Número de WhatsApp al que se enviará el mensaje
    const phoneNumber = '924 175 993'; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje

    // Construye el mensaje
    const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ACelular: ${phone}%0ADetalle: ${message}`;

    // Construye la URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirige al usuario a la URL de WhatsApp
    window.location.href = whatsappURL;
}
