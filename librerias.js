
// funcion para ver la fecha del momento 
console.log(new Date());

//? la librería siempre va antes del archivo donde lo vamos a utilizar
//! AXIOS
//con axios puedo reemplazar fetch 
// . + tipo de método que quiero ejecutar ejemplo axios.post("https://jsonplaceholder.typicode.com/posts", nuevoPosteo) dentro de esos parentesis poner endpoint y luego de , y si tengo que usar header abro el objeto de configuracion luego de nuevoPosteo, lo abro con {}

const crearProducto = async () => {
    try {
        let nuevoProducto = {};
        const res = await axios.post(
            "https://jsonplaceholder.typicode.com/posts", nuevoProducto);
        console.log(res.data);
        Toastify({}).showToast();
    } catch (error) {
console.log(error);
    }
};

let btnCrear = document.getElementById("Crear");
btnCrear.addEventListener("click", crearProducto);