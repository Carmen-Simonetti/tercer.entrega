
//!------------TUVE QUE HACER UNA FUNCION PARA QUITAR UN STYLO
// Selecciona todos los elementos con la clase 'mi-clase'
const elementos = document.querySelectorAll('.card-body');

// Iterar sobre los elementos seleccionados
elementos.forEach(elemento => {
  // Revertir la propiedad flex
elemento.style.flex = '0 0 auto'; // O cualquier valor que desees establecer
});





//!------------------------FUNCION PARA GUARDAR PRODUCTOS DEL ARRAY EN LOCAL STORAGE
const Card = [];
const addToCard = (nombre) => {
    //recupero lo q ya está en local
    let Card = JSON.parse(localStorage.getItem("Card")) || [];
    //busco el producto
    let RefrigeranteEncontrado = Refrigerantes.find 
    ( Refrigerante => Refrigerante.nombre === nombre);
    //lo agrego
    Card.push(RefrigeranteEncontrado);
    //guardo otra
    localStorage.setItem("Card",JSON.stringify(Card)); //guardo 2 informaciones en el navegador del usuario KEY (cómo lo quiero guardar) y VALUE (qué es lo que quiero guardar)
} //en castellano tarjeta

//!-----------------FUNCION PARA GUARDAR LOS PRODUCTOS QUE ESTÁN EN HTML LAS CARTITAS ANTERIORES AL CURSO DE JS

//recupero el carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//selecciono todos los botones "comprar"
let combos = document.querySelectorAll((".btn.btn-primary")); 

combos.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      // Encuentro la card del producto al que pertenece este botón
      let card = boton.closest(".card");
      // Tomo la info del producto desde la card
      
    let producto = {
      titulo: card.querySelector(".card-title").innerText,
      imagen: card.querySelector("img").getAttribute("src")};
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
  });
  

//!-------------------MENSAJE PARA TARJETITAS QUE ESTABAN ANTES DEL CURSO JS
const mensajes = document.querySelectorAll(".btn.btn-primary"); //BUSCO LA CLASE .contact-form
mensajes.forEach((mensaje) => {
  mensaje.addEventListener("click", function (mensaje) {
       Toastify({
  text: "Producto agregado al carrito",
  duration: 5000,
  close: true,
  gravity: "top", 
  position: "center", 
  stopOnFocus: true, //para que se detenga la notificacion cuando el mousse está encima
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
}).showToast();
    
    }
  )});

  //!-------------------MENSAJE PARA LAS NUEVAS TARJETITAS
const mensajitos = document.querySelectorAll(".productos-carrito"); //busco en todos los elementos que tienen esa clase EN MI HTML
mensajitos.forEach((mensajito) => { //recorro eso con forEach
  mensajito.addEventListener("click", function (mensajito) {//digo que cuando suceda el evento click 
      alert("Producto agregado al carrito");// aparezca una alerta
    }
  )});







  //?-----------------------------LIBRERIA

  const crearProducto = async () => {
    try {
        let nuevoProducto = {};
        const res = await axios.post(
            "https://jsonplaceholder.typicode.com/posts", nuevoProducto);
        console.log(res.data);
        // Toastofy --> método para configurar la notificacion
        Toastify({
  text: "Hola bebé",
  duration: 5000,
  close: true,
  gravity: "top", 
  position: "center", 
  stopOnFocus: true, //para que se detenga la notificacion cuando el mousse está encima
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
}).showToast();
//showToast --> es el método que dispara la notificacion
    } catch (error) {
console.log(error);
    }
};

//?--------------------------- SE UTILIZA FETCHING DE DATOS 
const resultados = document.getElementById("resultados");
const buscador = document.querySelector (".btn");
buscador.addEventListener("click", (event)=>{
  event.preventDefault(); //evito que se recargue mi pag
  const obtenerProductos = async () => {
  const response = await fetch ("../api.json");
  const res = await response.json();
 resultados.innerHTML = ""; // limpio
  res.pastillas.forEach((producto) => {
    resultados.innerHTML += `<p>${producto.titulo} - $${producto.precio}-${producto.material}-${producto.ventajas}</p>`;
  });
}
obtenerProductos();
})