
function agregarProducto (producto) { 
    alert ("Producto agregado al carrito");
}

const funcionPregunta= function () { 
    console.log(`¿Qué andas buscando ${this.nombre}?`);
}

let comprador = {
    nombre: "juan",
    pregunta: funcionPregunta,
 };
//el método siempre está ligado a un objeto 
comprador.pregunta ();
comprador.nombre = "juanita";
comprador.pregunta ();