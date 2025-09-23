//const obtenerPosteos = () => {
    //para hacer la primera petición: del frontend a la API tenemos q usar fetch y es una funcion, un método. ES EL QUE SE ENCARGA DE DECIR QUE SE VA A PRODUCIR UNA PETICIÓN Http. 
    // -lo primero que va a pedir esa petición es en ENDPOINT/URL
    //-luego el fetch, como segundo parámetro tiene un objeto de configuracion
    // -luego le tengo q decir qué hacer. el VERBO. la propiedad "method". siempre van con mayúscula
    //dentro del objeto de configuracion podria ir el body, que es el lugar en donde yo mando info del front al back
    // tambien podrian ir los headers es un objeto {} en el q yo puedo poner el token, el tipo de dato, le especificamos si estamos autenticados o no.
//fetch ("https://jsonplaceholder.typicode.com/posts", {
//method })}
// try catch --> cuando trabajamos con async await podemos usar try catch q es como un if else 
//?--- en consola poner network y cambiar de All a Fetch 
//?... para trabajar la asyncronia hay dos formas sync await o promesas
//DESENCRIPTAR PROMESA

                       //?-------------  LOS SIGUIENTES 2 SON MÉTODOS PARA OBTENER POSTEOS ----------------
//! ESTA PROMESA SE TRABAJA CON ASYNC AWAIT

//const obtenerPosteos = async () => {
    // la variable contenedor la dejo por fuera (scope) para poder usarla tanto adentro del try como del catch
    //let contenedor = document.getElementById("container");
    //console.log(contenedor);
    
    //try --> dentro del try pongo todo lo que quiero que suceda
    //try { // Fetch --> para hacer la peticion DEL FRONTEND A LA API
    // await --> para que espere que el http esté listo (nos devuelve algo que todavía NO está parseado)
    //const posteos= await fetch ("https://jsonplaceholder.typicode.com/posts"); //por defecto el verbo de fetch siempre es GET no hace falta ponerlo
    //posteos.json() --> le digo que a esos posteos le aplique el método json
    // await --> para que espere que los posteos sean transformados con el método json
    //const posteosListos = await posteos.json();
    //let htmlPosteos = "";
    //posteosListos.forEach((posteo) => {
       // htmlPosteos += `<h2>${posteo.title}</h2>`;
    //});
    //contenedor.innetHTML = htmlPosteos;
    // si algo falla en try se mete al catch
    //} catch (error) {
        //console.log(error);
       //contenedor.innerHTML = "<div><h2>Algo salio mal</h2></div>"
    //}

//};

//obtenerPosteos();

//! ESTA PROMESA SE TRABAJA CON .then() o .catch() 
// son 2 métodos que se encadenan 
// cuando la promesa salga bien (o sea el fetch) va a entrar en el .then y cuando algo salga mal va a entrar en el .catch()
// estos metodos .then y .catch lo que reciben siempre son callbacks
// en el callback de .then siempre llega una respuesta
// en el callback de .catch siempre va a llegar un error
// NUNCA se pueden ejecutar ambos métodos
const obtenerPosteos = () => {
    let contenedor = document.getElementById("container");
    const posteos = fetch("https://jsonplaceholder.typicode.com/posts");
    //hago el fetch --> (respuesta) 
    //.then --> espero
    posteos
    .then((respuesta) => { return respuesta.json()})
        //retorno esa rta y le aplico el metodo json 
        // .json --> hago el json
        // .then --> espero
    .then((posteosListos) => {
        let htmlPosteos = "";
    posteosListos.forEach((posteo) => {
       htmlPosteos += `<h2>${posteo.title}</h2>`;
    });
    contenedor.innerHTML = htmlPosteos;
    }) //ese return a su vez me devuelve otro .then que nos da el acceso a los posteos en este caso 
    .catch (error => {
    console.log(error);
    contenedor.innerHTML = "<div><h2>Algo salio mal</h2></div>"
    });
};

obtenerPosteos();

//! LA ELECCIÓN DE UNO U OTRO MÉTODO DE TRABAJO DEPENDE DE CON CUÁL REPOSITORIO TENGAMOS QUE TRABAJAR EL DÍA DE MAÑANA





//? CREACION DE POSTEOS
// en el verbo POST me pide body

const crearPosteo = async () => {
    //hardcodeado
    let nuevoPosteo = {
    title : "pepe",
    body: "este es el mejor posteo"
};
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", 
    //body--> estoy queriendo crear algo en un posteo
    // lo paso con json para q viaje la info
    body: JSON.stringify(nuevoPosteo),
    });
};
//creo la funcion por fuera para que quede más limpio el código
let btnCrear = document.getElementById("btn")
btnCrear.addEventListener("click", crearPosteo)

