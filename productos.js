

const Refrigerantes = [
    //{ nombre: "Refrigerante Clark Coolant", img:"../img/clark.webp" , tipo: "refrigerante de tilenglicol", precio: "7000" },
    //{ nombre: "Refrigerante Glicool", img:"../img/clark.webp",tipo: "refrigerante de tilenglicol", precio: "7000" },
    { nombre: "Refrigerante Prestone", img:"../img/clark.webp",tipo: "refrigerante de tilenglicol", precio: "7000" },
    { nombre: "Refrigerante Delta", img:"../img/clark.webp",tipo: "refrigerante de tilenglicol", precio: "7000" },
    { nombre: "Refrigerante Aqua Freeze", img:"../img/clark.webp",tipo2: "refrigerante de propilenglicol", precio: "10000" },
    { nombre: "Refrigerante Detex", img:"../img/clark.webp",tipo2: "refrigerante de propilenglicol", precio: "10000" },
    { nombre: "Refrigerante Propilenglicol usp", img:"../img/clark.webp",tipo2: "refrigerante de propilenglicol", precio: "10000" }
];
//console.log(Refrigerantes);
// con el siguiente for muestro sólo los refrigerantes de tipo tilenglicol
//const filtrar = () => {
//for (let i = 0; i <4; i++) {
//console.log(Refrigerantes[i]);
//}
//};
//!-----------------FUNCION RENDERIZAR REFRIGERANTES 
const renderizarRefrigerantes = () => { 
    let contenedor = document.querySelector(".productos-carrito"); //conecto con mi html
    let html = "";
    Refrigerantes.forEach((Refrigerante) => {//recorro mi array de Refrigerantes usando forEach para tener acceso a (){} que (){} me da acceso a c/u de mis Refrigerantes
    html += `
    <div class= "Refrigerante" style="background-color:#669bbc; border-radius: 15px; padding: 0px; height: 370px; justify-items: center";>
    <img src="${Refrigerante.img}" style="height: 150px";>
    <h5>${Refrigerante.nombre}</h5>
    <h6>${Refrigerante.precio}</h6>
    <button onclick= "addToCard('${Refrigerante.nombre}')">Comprar</button>
   </div> `;
    })
    contenedor.innerHTML = html; //agrego la variable anterior la llamada html a mi inner
};
renderizarRefrigerantes(); //llamo a mi funcion
// Selecciona el elemento

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
      alert("Producto agregado al carrito");
    }
  )});

  //!-------------------MENSAJE PARA LAS NUEVAS TARJETITAS
const mensajitos = document.querySelectorAll(".productos-carrito"); //busco en todos los elementos que tienen esa clase EN MI HTML
mensajitos.forEach((mensajito) => { //recorro eso con forEach
  mensajito.addEventListener("click", function (mensajito) {//digo que cuando suceda el evento click 
      alert("Producto agregado al carrito");// aparezca una alerta
    }
  )});

