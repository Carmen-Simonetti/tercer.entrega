document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.contact-form'); 

  formulario.addEventListener('submit', function (e) {

    // ENTRADA:  nombre
    const nombre = document.getElementById('nombre').value;

    // PROCESAMIENTO + SALIDA 
    alert(`¡Gracias, ${nombre}, te vamos a mandar un mail para que puedas hacer el seguimiento del envío de tu producto!`);
  });
});
