
//!---------------- SE HACE UNA FUNCION PARA MOSTRAR UN MENSAJE LUEGO DE TOCAR EL BOTON ENVIAR
  
  const formulario = document.querySelector('.contact-form'); //BUSCO LA CLASE .contact-form

  formulario.addEventListener('submit', function (envio) { //CUANDO SE TOQUE 'ENVIAR' EJECUTO LA FUNCION + evento
    const nombre = document.getElementById('nombre').value;
     if (nombre === "") {
      Toastify({
  text: "Por favor, ingresá tu nombre antes de continuar",
  duration: 5000,
  close: true,
  gravity: "top", 
  position: "center", 
  stopOnFocus: true, //para que se detenga la notificacion cuando el mousse está encima
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
}).showToast();;
    } 
    const teléfono = document.getElementById('teléfono').value;
    const telefonoConvertido = Number(teléfono);
    if (isNaN(telefonoConvertido)) {
      Toastify({
  text: "Por favor, ingresá un número válido",
  duration: 5000,
  close: true,
  gravity: "top", 
  position: "center", 
  stopOnFocus: true, //para que se detenga la notificacion cuando el mousse está encima
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
}).showToast();;
    } 
    else { //lamo a la funcion Swal.fire que devuelve una promesa. la promesa se resuelve cuando el cliente elige una opción
      Swal.fire({ //configuraciones del modal lo siguiente... 
  title: `¡Gracias, ${nombre}! ¿Estás seguro que no querés agregar más productos?`,
  color:"#c1121f",
  //showDenyButton--> mostrar botón negar
  showDenyButton: true,
  //showCancelButton --> mostrar botón cancelar
  showCancelButton: true,
  //confirmButtonText --> texto del botón de confirmación
  confirmButtonText: "Enviar",
  confirmButtonColor: "rgba(6, 225, 6, 0.766)",
  //denyButtonText --> texto del botón de negación
  denyButtonText: `No enviar`,
  denyButtonColor: "brown",
  //con .then manejo lo que pasa despues de q el cliente elige una opción
  //el callback recibe un parametro que es result que indica qué eligió mi cliente
}).then((result) => {
  //si el resultado es Confirmed entonces muestro msj enviado
  if (result.isConfirmed) {
    Swal.fire("Enviado!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Productos no enviados", "", "info");
  }
});
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


