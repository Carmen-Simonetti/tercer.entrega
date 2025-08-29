//FUNCIONES --> Reutilizar código;
// Dejar código listo para ser ejecutado cuando yo quiera; 
// Hacer cosas dinámicas

function mostrarMensaje() {
  const selectKm = document.getElementById('kilometraje');
  const km = Number(selectKm.value);

  if (km === 5000 || km < 5000) {
    alert("Sólo control general");
  } else if (km <= 15000) {
    alert("Cambio de aceite Sintético y filtro de aire");
  } else if (km <= 20000) {
    alert("Cambio de aceite Semi-sintético y filtro de aire");
  } else if (km <= 30000) {
    alert("Cambio de aceite Mineral, filtro de aire y de habitáculo");
  } else if (km <= 50000) {
    alert("Mantenimiento completo: aceite, filtros, frenos, alineación");
  }
};


class Aceite {
  constructor (nombre, graduacion, litros, kilometraje, precio) {
    this.nombre = nombre;
    this.graduacion = graduacion; 
    this.litros = litros;
    this.kilometraje = kilometraje;
    this.precio = precio;
  }
  
}

//instanciar una class 
let aceite1 = new Aceite ("Helix", "5w30", "1litro", "20.000 km", "30.000");
let aceite2 = new Aceite ("Helix", "10w40", "1litro", "35.000 km", "25.000");
let aceite3 = new Aceite ("Helix", "15w40", "1litro", "50.000 km", "17.000");
//console.log(aceite1, aceite2, aceite3);

const AceitesSintético = [
{nombre: "Helix 5w40", precio: "30000"},
{nombre: "Elaion 5w40", precio: "28000"},
{nombre: "Castrol 5w40", precio: "25000"},
{nombre: "Liqui-Moly 5w40", precio: "22000"},
{nombre: "Petronas Syntium 5w40", precio: "19000"},
];


const AceitesSemi = [
{nombre: "Helix 10w40", precio: "25000"},
{nombre: "Elaion 10w40", precio: "23000"},
{nombre: "Castrol 10w40", precio: "20000"},
{nombre: "Liqui-Moly 10w40", precio: "18000"},
{nombre: "Petronas Syntium 10w40", precio: "17000"},
];

const AceitesMineral = [
{nombre: "Helix 15w40", precio: "20000", id: "54512"},
{nombre: "Elaion 15w40", precio: "17000", id: "54513"},
{nombre: "Castrol 15w40", precio: "14000", id: "54511"},
{nombre: "Liqui-Moly 15w40", precio: "12000", id: "54510"},
{nombre: "Petronas Syntium 15w40", precio: "10000", id: "54509"},
];

//?------------------CARRITO DE COMPRAS
//const carrito = {
  AceitesMineral : [
//{nombre: "Helix 15w40", precio: "20000", id: "54512", cantidad: "2"},
//{nombre: "Elaion 15w40", precio: "17000", id: "54513", cantidad: "1"},],
//SumarProductos: function () {
  //let total = 0;
  //for (let i = 0; i < this.AceitesMineral.length; i++) {
   // let producto = this.AceitesMineral[i]; // accedemos al producto en esa posición
    //total += Number(producto.precio) * Number(producto.cantidad);
  //}
  //return total;
//}}

//localStorage.setItem('carrito', JSON.stringify(carrito));
//const carritoParseado = JSON.parse(localStorage.getItem('carrito'));


//carritoParseado.SumarProductos = function () {
  //let total = 0;
  //for (let i = 0; i < this.AceitesMineral.length; i++) {//Recorro mi array; luego THIS (carrito) OBJETO; Luego .AceitesMineral porque ingreso a una propiedad de mi objeto this .length xq recorro todo mi array hasta el final
    //let producto = this.AceitesMineral[i]; // accedo a la posición de esa propiedad de mi array
    //total += Number(producto.precio) * Number(producto.cantidad); //paso de string a Number para poder sumar. Ingresar al precio del producto (producto.precio) multiplico x las cantidad (producto..cantidad) 
  //}
  //return total;}

//console.log("Total:", carritoParseado.SumarProductos());

//carritoParseado.SumarProductos = function () {
  //let total = 0;
  //AceitesMineral.nombre + AceitesMineral.nombre
  //return total}


//const frutas = [
  //{nombre:"mango", precio: "200"},
  //{nombre:"frutilla", precio: "100"},
//  {nombre:"banana", precio: "50"}]


//for (let i = 0; i < frutas.length; i++) {
  //let hola = frutas[i];}

//let SumarFrutas = (nombre, precio) => {
  //const nuevaFruta = {nombre: nombre, precio: precio}; //creo EL OBJETO
  //frutas.push(nuevaFruta); //agrego a mi array la nueva fruta que anteriormente cree
//};

//ya dejé lista mi funcion ahora la utilizo y si quiero vuelvo a reutilizar



//const carritoo = {productos : [],gregarProductoo : function (nombre, precio, cantidad)  {
  // Crear un objeto producto const producto = {
      //nombre: nombre,
      //precio: precio,
      //cantidad: cantidad,
    //};
    // Agregarlo al array "productos"
    //this.productos.push(producto);
//}
//}
// Ejemplo de uso:
//carritoo.agregarProductoo("Rosa", 10, 2);
//carritoo.agregarProductoo("Girasol", 5, 1);


  ]