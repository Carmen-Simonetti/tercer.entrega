
const boton = document.querySelector('.form-button');

boton.addEventListener('click', function (event) {
    event.preventDefault(); // evita que se recargue la página
    alert('¡Gracias por tu compra! Te va a llegar un mail para que puedas seguir tu paquete');
});