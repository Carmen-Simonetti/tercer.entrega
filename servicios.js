let km =14100;

if (km === 5000) {
  alert("Solo control general");
} else if (km <= 14000) {
  alert("Cambio de aceite Sintético y filtro de aire");
} else if (km <= 19000) {
  alert("Cambio de aceite Semi-sintético y filtro de aire");
} else if (km <= 30000) {
  alert("Cambio de aceite Mineral, filtro de aire y de habitáculo");
} else {
  alert("Mantenimiento completo: aceite, filtros, frenos, alineación");
}

//MIS OBJETOS 

let pastillasDeFrenosUno = {
  nombre: "pastillas de freno Semimetálicas", 
  materiales : "metal y otros minerales",
  ventajas: "buena durabilidad y rendimiento",
  precio: "$20.000",
  marcaUno: "Brembo",
  marcaDos: "Bosch",
  marcaTres: "Feras-le",
  marcaCuatro: "Rascar",
  marcaCinco: "Controil"

}
 let pastillasDeFrenosDos = {
  nombre: "pastillas de freno Orgánicas",
  materiales: "fibra y caucho",
  ventajas: "silenciosas y generan menos desgaste en los discos",
  precio: "$15.000",
 }

 let pastillasDeFrenosTres = {
  nombre: "pastillas de freno de Cerámica",
  ventajas: "rendimiento silencioso y menos agresivas para los discos",
  precio: "$10.000",
 }
 
 //ARRAY 
 let ProductosParaElAuto = [
  { nombre: "pastillas de freno Semimetálicas", 
    precio: "$20.000", 
    //marcaUno: "Brembo", marcaDos: "Bosch", marcaTres: "Feras-le", marcaCuatro: "Rascar", marcaCinco: "Controil" 
  },

  { nombre: "pastillas de freno Orgánicas", 
    precio: "$15.000"
  },

 ]

 ProductosParaElAuto.unshift(pastillasDeFrenosTres);
 //con 'unshift' agrego un nuevo elemento al principio de mi array
 console.log(ProductosParaElAuto);

 //*------------------- SEGUNDO ARRAY MARCAS
 let MarcasDePastillasDeFrenos = {
  marcaUno: "Brembo", marcaDos: "Bosch", marcaTres: "Feras-le", marcaCuatro: "Rascar", marcaCinco: "Controil"
 }

