
//!---------------- SE HACE UNA FUNCION PARA MOSTRAR UN MENSAJE LUEGO DE TOCAR EL BOTON ENVIAR
  
  const formulario = document.querySelector('.contact-form'); //BUSCO LA CLASE .contact-form

  formulario.addEventListener('submit', function (envio) { //CUANDO SE TOQUE 'ENVIAR' EJECUTO LA FUNCION + evento
    const nombre = document.getElementById('nombre').value;
     if (nombre === "") {
      alert("Por favor, ingresá tu nombre antes de continuar.");
    } else {
      alert(`¡Gracias, ${nombre}, te vamos a mandar un mail para que puedas hacer el seguimiento del envío de tu producto!`);
    }
  });
  
//!------------- SE GUARDAN LOS DATOS DEL FORMULARIO DENTRO DE LOCALSTORAGE
const Form = document.querySelector(".contact-form");//conecto con HTML
Form.addEventListener("submit", (event)=> {
  event.preventDefault(); //para q no se me recargue la página
  let FormParse = JSON.parse(localStorage.getItem("datos")) || [];
const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('teléfono').value;
  const direccion = document.getElementById('dirección').value;
  const email = document.getElementById('email').value;
  const productos = document.getElementById('productos').value;

  const datos = { nombre, telefono, direccion, email, productos
  };
  localStorage.setItem("Form", JSON.stringify(datos));
});


localStorage


