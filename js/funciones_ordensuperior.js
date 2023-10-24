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

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]
                                        // EL NOMBRE INCLUYE EL SCRIPT "JS"
const resultado = cursos.filter((el) => el.nombre.includes('JS') && el.precio > 20000);
const resultado2 = cursos.filter((el) => el.precio < 20000)

console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2) // []

