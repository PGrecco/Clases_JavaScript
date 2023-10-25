// ABSTRACCION (darnos la facilidad de tener un codigo con un trasfondo complejo pero ejecutaremos un codigo muchos mas simple)

// let total = 0;

// for (let i = 1; i <= 10; i++){
//     total += i;
//     console.log(total);
// }

// console.log("El total es " +total);

// Codigo resumido :
// console.log(sumarRango(1, 10) );
// (resumir un grupo complejo de instruccion bajo una palabra clave (funcion)  que sugiere cual es el problema a resolver x la misma )
// ocultan detalles sobre la operacion a  resolver y nos permite "hablar" sobre los problemas en un nivel mas alto (o mayor grado de abstraccion)





// funciones de orden superior:
// retorna una funcion o recie una funcion por parametro (permiten abstraernos sobre acciones y no solo valores)


// function mayorQue (n) {
//     return (m) => m > n; 
// }

// let mayorQueDiez = mayorQue(10) // igual a: [(m) => m > 10 ]


// console.log(mayorQueDiez(12)); //true (12) => 12 > 10
// console.log(mayorQueDiez(8)); //false (8) => 8 > 10


// const suma = (a, b) => {
//     return a + b;
// }

// console.log(suma(10,20)); // 30





// 01:13 
// js incorpora nativamente varias funciones de orden superior. Existen metodos para operar sobre arrays que trabajan con esta logica. Funcionan siempre iterando sobre el array correspondiente. Reciben una funcion por parametro, la cual a la vez recibe el elemento del array que se está iterando.


// // FOR EACH

// // pueden utilizarse strings, numeros o mixto
// const nombres = ["Jose", "Mateo", "Fausto", "Pedro", "Tomas", "Joaquin"];

// nombres.push("Grecco");

// nombres.forEach((name)=> {
//     console.log(name);
// })






// // FIND 

// const cursos = [
//     { nombre : "Javascript", precio: 15000},
//     { nombre : "ReactJS", precio: 22000},
//     {nombre : "AngularJS", precio: 22000},
//     {nombre : "Desarrollo Web", precio: 16000},
//     {nombre : prompt("Ingrese nombre adicional de curso"), precio: parseInt(prompt("Ingrese el precio del mismo"))},
// ];


// // devuelve el primer objeto que coincida con la condicion (en este caso el nombre)
// const resultado1 = cursos.find( (el) => el.nombre === "Desarrollo Web");

// const resultado2 = cursos.find( (el) => el.nombre === "Marketing Digital");

// const resultado3 = cursos.find( (el) => el.precio <= 22000);

// console.log(resultado1);
// console.log(resultado2);

// (el) = ELEMENTO



// FILTER : recibe al igual que el find, una funcion comparadora por parametro y retorna un nuevo array con todos los elementos que cumplan esa condicion. Si no hay coincidencias retornará un array vacio.

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ]
//                                     // EL NOMBRE INCLUYE EL SCRIPT "JS"
// const resultado = cursos.filter((el) => el.nombre.includes('JS') && el.precio > 20000);
// const resultado2 = cursos.filter((el) => el.precio < 20000)

// console.log(resultado)
// /* [
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'Angular', precio: 22000}
// ] */

// console.log(resultado2) // []


// // SOME : busca un valor y devuelve valor booleano (T/F) si es encontrado


//                         // condicion que define el valor booleano
// console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// // true
// console.log( cursos.some((el) => el.nombre == "VueJS")) 
// // false


// MAP : se utiliza mucho para la transformacion de arrays


// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ]

// const nombres = cursos.map((el) => el.nombre)
// console.log(nombres)
// // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

// const actualizado = cursos.map((el) => {
//     return {
//         nombre: el.nombre,
//         precio: el.precio * 1.25
//     }
// })

// console.log(actualizado)
// /* [
//      { nombre: 'Javascript', precio: 18750 },
//      { nombre: 'ReactJS', precio: 27500 },
//      { nombre: 'AngularJS', precio: 27500 },
//      { nombre: 'Desarrollo Web', precio: 20000 }
// ] */




// // REDUCE : permite obtener un único valor tras iterar sobre el array. Funciona como un método que retorno

// const numeros = [1, 2, 3, 4, 5, 6]
//                                                     // el acumulador se va a sumar por cada el.
// const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

// console.log(total) // 21


// // SORT : permite reordenar un array segun un critero definido (DESTRUCTIVO :modifica el array original sobre el cual se llama)}

// const items = [
//     { name: 'Pikachu', price: 21 },
//     { name: 'Charmander', price: 37 },
//     { name: 'Pidgey', price: 45 },
//     { name: 'Squirtle', price: 60 }
//   ]
// items.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a es igual a b
//     return 0;
// })


//OBJETO MATH : contenedor de herramientas y metodos para realizar operaciones matematicas


// ROUND CEIL FLOUR

// console.log(Math.ceil(3.000000101)); //(redondea para arriba) (4)

// console.log(Math.floor(3.000000101)); //(redondea para arriba) (3)

// console.log(Math.round(3.000000101)); //(redondea al mas cercano) (3)

// SQUARE ROOT (retorna la raiz cuadrada de un numero)

// RANDOM : genera un numero pseudo-aleatorio entre 0 y 1 (decimal) (0 y 1 inclusive)

// console.log( Math.random () * 10); //(el limite techo pasara a ser el 10)

// console.log (Math.random () +30 );








// CLASE DATE (meses de 0 a 11)

console.log( new Date ()); //Devuelve la fecha actual

// parametros: (año, mes, dia, hora, minutos, segundos)

const fechaAyer = (new Date(2023, 9, 23));
console.log(fechaAyer);

// se puede pasar la fecha como string (en ingles) -> (mes, dia, año, hora)


//          -----------------------------------------------


// VALOR SINGULAR 
// Metodos para obtener valores

// const fecha1 = new Date(2022, 5, 23, 22, 15, 5);

// console.log(fecha1.getMonth());
// console.log(fecha1.getFullYear());
// console.log(fecha1.getDay());
// console.log(fecha1.getHour());
// console.log(fecha1.getMilliseconds());
// console.log(fecha1.getSeconds());

// // Metodos para obtener fechas como string

// const fecha2 = new Date (2023, 3, 22, 2, 33, 4);
// console.log(fecha2.toLocaleString) //(actualiza la fecha en relacion a la zona horaria en la que se encunetra)
// console.log(fecha2.toTimeString);



// // PRESENTACION DEL VALOR SINGULAR 

// //Diderencia entre fechas

// const fecha3 = new Date (2023, 9, 24, 17); 
// const fecha4 = new Date (2023, 9, 24, 15); 

// const diferencia = Math.abs(fecha1 - fecha2);

// console.log(diferencia);  //.abs = sacar valor absoluto

// EJERCICIOS 





