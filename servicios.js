//FUNCIONES --> Reutilizar código;
// Dejar código listo para ser ejecutado cuando yo quiera; 
// Hacer cosas dinámicas

function mostrarMensaje() {
  const selectKm = document.getElementById('kilometraje');
  const km = Number(selectKm.value);

  if (km === 5000 || km < 5000 ) {
   alert ("Sólo control general");
  } else if (km <= 15000) {
    alert ("Cambio de aceite Sintético y filtro de aire");
  } else if (km <= 20000) {
    alert ("Cambio de aceite Semi-sintético y filtro de aire");
  } else if (km <= 30000) {
    alert ("Cambio de aceite Mineral, filtro de aire y de habitáculo");
  } else if (km <= 50000) {
    alert ("Mantenimiento completo: aceite, filtros, frenos, alineación");
  }
}


//MIS OBJETOS 

let pastillasDeFrenosUno = {
  nombre: "pastillas de freno Semimetálicas",
  materiales: "metal y otros minerales",
  ventajas: "buena durabilidad y rendimiento",
  precio: "20.000",

};

let pastillasDeFrenosDos = {
  nombre: "pastillas de freno Orgánicas",
  materiales: "fibra y caucho",
  ventajas: "silenciosas y generan menos desgaste en los discos",
  precio: "15.000",
};

let pastillasDeFrenosTres = {
  nombre: "pastillas de freno de Cerámica",
  ventajas: "rendimiento silencioso y menos agresivas para los discos",
  precio: "10.000",
};

let BujíaUno = {
  nombre: "Bujías frias", precio: "5000"
}
let BujíaDos = {
  nombre: "Bujías de platino", precio: "5000"
}
let BujíasTres = {
  nombre: "Bujías incandescentes", precio: "5000"
}
let BujíasCuatro = {
  nombre: "Bujías multielectrodo",precio: "15000"
}
let BujíasCinco = {
  nombre: "Bujías calientes", precio: "15000"
}
let BujíasSeis = {
  nombre: "Bujías de iridio", precio: "15000"
}
let BujíasSiete = {
  nombre: "Bujías de resistencia desnuda", precio: "15000"
}
let BujíasOcho = {
  nombre: "Bujías de cobre", precio: "15000"
}
let BujíasNueve = {
  nombre: "Bujías para gas", precio: "15000"
}
let BujíasDiez = {
  nombre: "Bujías de resistencia protegida", precio: "20000"
}
//ARRAY 
const ProductosParaElAuto = [
  { nombreUno: "pastillas de freno Semimetálicas", precio: "20.000" },
  { nombreDos: "pastillas de freno Orgánicas", precio: "15.000" },
  { nombreTres: "Bujías frias", precio: "5000"},
  { nombreCuatro: "Bujías de platino", precio: "5000"},
  { nombreCinco: "Bujías incandescentes", precio: "5000"},
  { nombreSeis: "Bujías multielectrodo", precio: "15000"},
  { nombreSiete: "Bujías calientes", precio: "15000"},
  { nombreOcho: "Bujías de iridio", precio: "15000"},
  { nombreNueve: "Bujías de resistencia desnuda", precio: "15000"},
  { nombreDiez: "Bujías de cobre", precio: "15000"},
  { nombreOnce: "Bujías para gas", precio: "15000"},
  { nombreDoce: "Bujías de resistencia protegida", precio: "20000"}
];
console.log(ProductosParaElAuto);

ProductosParaElAuto.unshift(pastillasDeFrenosTres);
//con 'unshift' agrego un nuevo elemento al principio de mi array
console.log(ProductosParaElAuto);

console.log(ProductosParaElAuto[5]);
//accedo/muestro al elemento pastillas de freno orgánicas 

ProductosParaElAuto.push ({nombre: "escobillas delanteras marca Bosch", precio: "12000"});
//agrego un nuevo producto a mi lista


//!------------ESTE ES EL FOR QUE ME DA ACCESO A CADA ELEMENTO
for (let i = 0; i < ProductosParaElAuto.length; i++) { //i = 0 recorro el array desde el primer elemento xq empieza en 0 ; hasta el ultimo elemento por su longitud i < nombre.length; ++ cambia el valor de i 
  ProductosParaElAuto[i].madeIn = "China"; //agrego A CADA elemento del array
}

// manipular un objeto
ProductosParaElAuto.nombreUno = "Bujía transparente";
