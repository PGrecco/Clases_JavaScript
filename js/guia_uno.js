// EJERCICIO 1 (Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor)
// const numero1= prompt("Ingrese un numero");
// const numero2= prompt("Ingrese otro numero");
// if (numero1==numero2){
//     console.log("Los numeros son iguales");
// }else if(numero1>numero2){
//     console.log("El numero uno es mayor que el segundo");
// }else{
//     console.log("El numero dos es mayor que el primero");
// }

//Ejercicio 2 (El costo del helado es de $5. Escriba un programa en donde se le pida al usuario ingresar la cantidad de helados que quiere y mostrar cuánto le saldría)
// const precio=5;
// let cantidad=prompt("Ingrese cantidad de helados deseada");
// const preciototal= (cantidad*precio);
// console.log("El precio total a pagar es $", preciototal );

//Ejercicio 3 (Escriba un programa en donde se le solicite la edad al usuario y calcule su año de nacimiento, tomando en cuenta que el año actual es 2022.)
// const edad=prompt("Ingrese su edad");
// const dif_año= (2023-edad);
// console.log("El año de nacimiento es ", dif_año);

//Ejercicio 4(Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio y si es mayor o igual a 4 le indique que está aprobado con un alert.)
// const nota1=prompt("Ingrese nota 1");
// const nota2=prompt("Ingrese nota 2");
// const nota3=prompt("Ingrese nota 3");
// let promedio=(nota1+nota2+nota3)/3;

// if(promedio>= 4){
//     alert("El alumno esta aprobado");
// }else{
//     alert("El alumno no esta aprobado");
// } 
//(NO SE EJECUTA CORRECTAMENTE)

//Ejercicio 5 (Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con el formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”.
// NOTA: Solo solicitar el nombre y apellido si es mayor a 18.
// const edad=prompt("Ingrese su edad");

// if(edad>=18){
//     const nombre_apellido=prompt("Ingrese su nombre y apellido");
//     alert("Hola ", nombre_apellido);
//     alert("Tu edad es", edad);
// }

// //Ejercicio 6(Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muéstrele en pantalla con un alert el precio final. )
// const precioprod=prompt("Escriba el precio del producto.");
// const iva=(precioprod*0.21);
// const preciofinal=(precioprod+iva);
// alert(preciofinal);

//Ejercicio 7(larguisimo)
// const col=40;
// const mex= 50;
// const br= 30;
// const uru= 20;
// const ch= 20;
// const ecu=30;
// const pe=40;
// const usa=50;
// let choised_country= prompt("Ingrese el pais que desea viajar(sin mayúsculas y acentos).");

// if (choised_country=="colombia"){
//     alert(col);
// }else if (choised_country=="mexico"){
//     alert(mex);
// }else if(choised_country=="brasil"){
//     alert(br);
// }else if(choised_country=="uruguay"){
//     alert(uru);
// }else if(choised_country=="chile"){
//     alert(ch);
// }else if(choised_country=="ecuador"){
//     alert(ecu);
// }else if(choised_country=="peru"){
//     alert(pe);
// }else if(choised_country=="estados unidos"){
//     alert(usa);
// }else{
//     alert("No ingresaste ninguna opcion de pais válida.")
// }


//Ejercicio 8
// const nombre= prompt("Ingrese su nombre de pila");
// const edad= prompt("Ingrese su edad");
// if((nombre=="pedro"||nombre=="Pedro")&& (edad>18)){
//     alert("Acceso permitido");
// }else if((nombre=="Juan"||nombre=="juan")&&(edad>21)){
//     alert("Acceso permitido");
// }else if((nombre=="paula")&&(edad>25)){
//     alert("Acceso permitido");
// }else{
//     alert("Acceso denegado");
// }

// //Ejercicio 9
// const peso=prompt("Ingrese su peso");
// const altura=prompt("Ingrese su altura");
// const imc=(peso/altura);
// console.log(imc)
// alert(imc)

// //Ejercicio 10
// const num1 = prompt("Ingrese un numero");
// const num2 = prompt("Ingrese otro numero");
// if (num1>num2){
//     const dif=(num1-num2);
//     alert(dif);
//     console.log("numero uno mayor")
// }else if(num1<num2){
//     const dif=(num2-num1);
//     alert(dif);
//     console.log("numero dos mayor")
// }else if(num1==num2){
//     alert("Los numeros son iguales");
// }

// //Igual y estrictamente igual
//  const string1= 10;
//  const string2= "10"

