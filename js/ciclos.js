//FOR


//[BREAK USE]
// for(let i = 0 ; i <=10 ; i = i+ 1){

//     if(i>5){
//         break;
//     }

//     console.log(i);
// }

// console.log("Finaliza el for")



//[USANDO RESTO PARA IMPRIMIR NUMEROS PARES O IMPARES]

// for(let i = 0; i <= 10; i++){
//     if( i % 2 !== 0) {
//     //un numero par al ser dividido en dos el resto es igual a 0
//         continue;
//     }

//     console.log(i);
// }
// console.log("finalizo el ciclo")


//WHILE (condicionales)

// let nombre = prompt("Ingresar nombre");

// while(nombre!== "SALIR"){
//     console.log("El nombre ingresado es: " + nombre);
//     nombre= prompt("Ingresar nombre (Ingresar salir para finalizar)");

// }

// DO WHILE
// let nombre = prompt("Ingresar un nombre");

// do{
//     console.log(nombre);
//     nombre=prompt("Ingrese un nombre o SALIR para finalizar");
// }while (nombre!=="SALIR")




//SWITCH


// let operacion = prompt("Ingrese la operacion que desea realizar: 1-Transferir 2-Deposito 3-SALIR");

// while (operacion !== "3") {

//     switch (operacion) {

//         case "1":
//             console.log("Transferencia");
//             let personaATransferir = prompt("Ingrese persona a la que desea transferir dinero: 1-Pedro 2-Mateo 3-Fausto 0-SALIR");

//             while (personaATransferir !== "0") {
//                 const monto = parseInt(prompt("Ingresar monto a transferir"));

//                 switch (personaATransferir) { // Cambié usuarioATrasnferir a personaATransferir

//                     case "1":
//                         console.log("Le transferiste a Pedro");
//                         const saldoPedro = 1000 + monto;
//                         console.log("Ahora el saldo de Pedro es " + saldoPedro);
//                         break;

//                     case "2":
//                         console.log("Le transferiste a Mateo");
//                         const saldoMateo = 1000 + monto;
//                         console.log("Ahora el saldo de Mateo es " + saldoMateo);
//                         break;

//                     case "3":
//                         console.log("Le transferiste a Fausto");
//                         const saldoFausto = 1000 + monto;
//                         console.log("Ahora el saldo de Fausto es " + saldoFausto);
//                         break;

//                     default:
//                         alert("El cliente no existe");
//                         break;

//                 }
//                 personaATransferir = prompt("Ingrese nuevo cliente al que le desea transferir dinero: 1-Pedro 2-Mateo 3-Fausto 0-SALIR"); // Corregí la variable aquí
//             }

//             break;

//         case "2":
//             console.log("Deposito");
//             let usuarioADepositar = prompt("Ingrese a quien desea depositar el dinero 1-Pedro 2-Mateo 3-Fausto 0-SALIR");

//             while(usuarioADepositar !== "0"){
//                 const montoDeposito = parseInt(prompt("Indique el monto que desea depositar"));

//                 switch (usuarioADepositar){
                    
//                     case "1":
//                     console.log("Le depositaste a Pedro");
//                     const saldoDepositoPedro = 1000 + montoDeposito;
//                     console.log("Ahora el saldo de Pedro es " +saldoDepositoPedro);
//                     break;

//                     case "2":
//                     console.log("Le deposistaste a Mateo");
//                     const saldoDepositoMateo = 1000+montoDeposito;
//                     console.log("Ahora el saldo de Mateo es " +saldoDepositoMateo);
//                     break;

//                     case "3":
//                     console.log("Le depositaste a Fausto");
//                     const saldoDepositoFausto = 1000+montoDeposito;
//                     console.log("Ahora el saldo de Fausto es de " +saldoDepositoFausto);
//                     break;

//                     default:
//                         alert("El cliente no existe");
//                 }
//                 personaATransferir = prompt("Ingrese nuevo cliente al que le desea transferir dinero: 1-Pedro 2-Mateo 3-Fausto 0-SALIR"); // Corregí la variable aquí

//             }

//             break;

//         default:
//             console.log("Ingresó una opción no válida");
//             // Agrega código para manejar opciones inválidas aquí
//             break;
//     }
//     operacion = prompt("Ingrese la operación que desea realizar: 1-Transferir 2-Deposito 3-SALIR"); // Corregí la variable aquí también
// }


// Ejercicio 12

// const cantidadDeNumeros = parseInt(prompt("Escriba la cantidad de numeros que va a ingresar"));
// let media = 0;
// let mayor = -10000000000000;
// let menor = 10000000000000;

// for(let i = 0; i < cantidadDeNumeros; i++){
//     let numero = parseInt(prompt("Ingrese un numero"));

//     //calcular mayor
//     if (numero > mayor){
//         mayor =numero;
//     }

//     //calcular menor
//     if (numero < menor){
//         menor = numero;20
//     }
    
    
    
    
//     media = media + numero;
// }

// console.log("La media es: " + media/cantidadDeNumeros);
// console.log("El numero mayor es "+ mayor);
// console.log("El numero menor es "+ menor);


//EJERCICIOS DE PRACTICA
// 1.  Realizar un programa que le pida al usuario cadenas de texto hasta que ingrese “Salir”. Una vez que sale, mostrarle en un alert los textos ingresados separados por una coma (,).

//Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla el conteo hacia atrás hasta llegar a 0. NOTA: Tener en cuenta validar que es un número positivo el que ingresó.