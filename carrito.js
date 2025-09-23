



//?-------------------------CARRITO

let productosDelCarrito = JSON.parse(localStorage.getItem("Card")) || [];

//(localStorage.getItem("Card")traigo el carrito 


const renderizarRefrigerantes = () => { //funcion para hacer dinámico
  let contenedor = document.querySelector(".productos-carrito")
  let html = "";
  productosDelCarrito.forEach((Refrigerante) => {//recorro mi array de Refrigerantes usando forEach
    html += `
    <div class= "Refrigerante" style= "height: 350px; width: 250px";>
    <div>${Refrigerante.nombre}</div>
    <div>${Refrigerante.precio}</div>
    <button>  -  </button>
    <button type="button" class="btn-eliminar"> Eliminar del carrito </button>
    <button>  +  </button>
   </div> `;

  })
  contenedor.innerHTML = html; //agrego la variable anterior la llamada html a mi inner
};
renderizarRefrigerantes(); //llamo a mi funcion

document.addEventListener("DOMContentLoaded", () => {
  const eliminarDelCarrito = () => {
    Swal.fire("GRACIAS!!");
  };

  const botonesEliminar = document.querySelectorAll(".btn-eliminar"); 
  botonesEliminar.forEach(boton => { 
    boton.addEventListener("click", eliminarDelCarrito); 
  });
});




//?--------------------CARRITO COMBOS DE OFERTA

let contenedor = document.querySelector(".productos-carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

carrito.forEach(producto => {
  let div = document.createElement("div");

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











