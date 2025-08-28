
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

console.log(pastillasDeFrenosUno, pastillasDeFrenosDos, pastillasDeFrenosTres);

let BujíaUno = {  nombre: "Bujías frias", precio: "5000"}
let BujíaDos = {nombre: "Bujías de platino", precio: "5000"}
let BujíasTres = {nombre: "Bujías incandescentes", precio: "5000"}
let BujíasCuatro = { nombre: "Bujías multielectrodo", precio: "15000"}
let BujíasCinco = {nombre: "Bujías calientes", precio: "15000"}
let BujíasSeis = {nombre: "Bujías de iridio", precio: "15000"}
let BujíasSiete = {nombre: "Bujías de resistencia desnuda", precio: "15000"}
let BujíasOcho = {nombre: "Bujías de cobre", precio: "15000"}
let BujíasNueve = {nombre: "Bujías para gas", precio: "15000"}
let BujíasDiez = {nombre: "Bujías de resistencia protegida", precio: "20000"}


//ARRAY de objetos INCLUÍR EN BUSCADOR
const ProductosParaElAuto = [
  { nombreUno: "pastillas de freno Semimetálicas", precio: "20.000" },
  { nombreDos: "pastillas de freno Orgánicas", precio: "15.000" },
  { nombreTres: "Bujías frias", precio: "5000" },
  { nombreCuatro: "Bujías de platino", precio: "5000" },
  { nombreCinco: "Bujías incandescentes", precio: "5000" },
  { nombreSeis: "Bujías multielectrodo", precio: "15000" },
  { nombreSiete: "Bujías calientes", precio: "15000" },
  { nombreOcho: "Bujías de iridio", precio: "15000" },
  { nombreNueve: "Bujías de resistencia desnuda", precio: "15000" },
  { nombreDiez: "Bujías de cobre", precio: "15000" },
  { nombreOnce: "Bujías para gas", precio: "15000" },
  { nombreDoce: "Bujías de resistencia protegida", precio: "20000" }
];
console.log(ProductosParaElAuto);


ProductosParaElAuto.unshift(pastillasDeFrenosTres);
//con 'unshift' agrego un nuevo elemento al principio de mi array
console.log(ProductosParaElAuto);


//accedo/muestro al elemento Bujias incandescentes
console.log(ProductosParaElAuto[5]);


//agrego un nuevo producto a mi lista
ProductosParaElAuto.push({ nombre: "escobillas delanteras marca Bosch", precio: "12000" });


// manipular un objeto MUESTRO SÓLO EL NOMBRE
ProductosParaElAuto.nombreUno = "Bujía transparente";

//!------------ oRIGEN de cada producto (MADE-IN)
for (let i = 0; i <= 8 ; i++) { 
  ProductosParaElAuto[i].madeIn = "Argentina"; }

for (let i = 5; i <= 9 ; i++) { //i = 0 recorro el array desde el primer elemento xq empieza en 0 ; hasta el ultimo elemento por su longitud i < nombre.length; ++ cambia el valor de i 
  ProductosParaElAuto[i].madeIn = "China"; //agrego A CADA elemento del array
}

for (let i = 10; i <= 13 ; i++) { 
  ProductosParaElAuto[i].madeIn =  "Japon"; }









//filtrar ();
// sin filtrar (); no estaría llamando a la function y no se vería en consola

//otra forma de recorrer/filtrar por ejemplo podria ser recorrer mi array pero con un metodo llamado .filter
//?......Filtro para mostrar los refrigerantes sólo tipo2
//console.log(Refrigerantes.filter(Refrigerante => Refrigerante.tipo2 ));


//FIND siempre devuelve el primero
//let refrigerantesFind = Refrigerantes.find ((Refrigerante) => Refrigerante.tipo === "refrigerante de tilenglicol");
//console.log(refrigerantesFind);
// lo q está dentro de los parentesis morados es toodoo mi array recorrido en este caso de refrigerantes (Refrigerantes[i])
//BUENA PRACTICA: siempre usar el SINGULAR de mi array
