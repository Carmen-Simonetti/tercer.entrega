



//?-------------------------CARRITO REFRIGERANTES

let productosDelCarrito = JSON.parse(localStorage.getItem("Card")) || [];

//(localStorage.getItem("Card")traigo el carrito 


const renderizarRefrigerantes = () => { //funcion para hacer dinámico
  let contenedor = document.querySelector(".productos-carrito")
  console.log(contenedor);
  let html = "";
  productosDelCarrito.forEach((Refrigerante) => {//recorro mi array de Refrigerantes usando forEach
    html += `
    <div class= "Refrigerante" style= "height: 350px; width: 250px";>
    <div>${Refrigerante.nombre}</div>
    <div>${Refrigerante.precio}</div>
    <button>  -  </button>
    <button> Eliminar del carrito </button>
    <button>  +  </button>
    
   </div> `;

  })
  contenedor.innerHTML = html; //agrego la variable anterior la llamada html a mi inner
};
renderizarRefrigerantes(); //llamo a mi funcion




//?--------------------CARRITO COMBOS DE OFERTA

let contenedor = document.querySelector(".productos-carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito.forEach(producto => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.style.width = "250px";
  div.style.height = "350px";
  div.style.backgroundColor = "#003049";
  div.style.borderRadius = "15px";
  div.style.border = "3px Solid black";

  div.innerHTML = `
    <img src="${producto.imagen}" class="card-img-top">
    <div class="card-body" style="background-color:#669bbc; border-radius: 15px; padding: 0px";>
      <h5 class="card-title">${producto.titulo}</h5>
      <button>  -  </button>
    <button> Eliminar del carrito </button>
    <button>  +  </button>
    </div>
    `;
  contenedor.appendChild(div); //agrego el elemento que creé
});



//?------------------CARRITO COMBOS CAMBIOS DE ACEITE

let contenedorAceites = document.querySelector(".carrito-combos"); //traigo de mi HTML
let carritoAceites = JSON.parse(localStorage.getItem("CarritoAceites")) || []; //traigo lo parseado desde INDEX.JS

carritoAceites.forEach(producto => { //recorro carritoAceites
  let div = document.createElement("div");//creo el elemento
  div.classList.add("combo"); 
  div.style.width = "250px";
  div.style.height = "350px";
  div.style.backgroundColor = "#003049";
  div.style.borderRadius = "15px";
  div.style.border = "3px Solid black";
  div.style.display = "flex";
  div.style.alignItems = "flex-end"
  div.innerHTML = //para leer o escribir el contenido HTML que está dentro de un elemento 
    `
  <div class="combo" style="background-color:#669bbc; border-radius: 15px; padding: 0px"; >
  <h5 class="h5" style= "alignItems:flex-end">${producto.titulo}</h5>
  <button>  -  </button>
    <button> Eliminar del carrito </button>
    <button>  +  </button>
  </div>`;
  contenedorAceites.appendChild(div); //agrego el elemento que creé
})







