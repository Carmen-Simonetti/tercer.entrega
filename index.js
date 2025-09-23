//!------------------MENSAJE COMPRA COMBO CAMBIO DE ACEITE

const mensajitos = document.querySelectorAll(".div-aceites"); //busco en todos (SelectorAll) los elementos que tienen esa clase EN MI HTML
mensajitos.forEach((mensajito) => { //recorro eso con forEach
    mensajito.addEventListener("click", function (mensajito) {//digo que cuando suceda el evento click 
        event.preventDefault(); //para q no se me recargue la página
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

//!------------MIS COMPRAS COMBO CAMBIO DE ACEITE GUARDADAS EN LOCALSTORAGE

const RenderizarCombosAceite = document.querySelectorAll(".combo a");
RenderizarCombosAceite.forEach((botonComprar) => {
    botonComprar.addEventListener("click", (event) => {
        event.preventDefault(); // evita que <a> recargue la página
        let combo = botonComprar.closest(".combo"); //.closest busca el primer elemento que tenga la clase, en este caso, .combo 
        let Producto = {
            titulo: combo.querySelector(".h5").innerText, //combo. llamo a la variable q contiene a todos los botones que tienen esa clase.combo
            imagen: combo.querySelector("img").getAttribute("src"),};
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(Producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
    })
});

