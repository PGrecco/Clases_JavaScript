// //OBJETOS
//  let nombre = "Homero";
//  let edad = 39;
//  let direccion = "Av. Siempreviva";
//  //Objeto-> persona
//  const persona = {nombre:"Homero", edad: 39, calle: "Av. SiempreVida"}
// //                  //valores agrupados en un solo objeto
 
// //  //LLAMANDO AL OBJETO (se ordena alfabeticamente al imprimirse)
// //  console.log(persona);
 
// //  //LLAMANDO AL OJETO Y UN VALOR EN ESPECIFICO
// //  console.log(persona.nombre)
// //  console.log(persona.edad)
// //  console.log(persona.direccion)

// //  //Fijar una variable para un valor del objeto
// //  let nombreDePersona = persona.nombre;

// //LLAMAR A UN VALOR POR MEDIO DEL USUARIO
// let pedirNombre = prompt("Que informacion requiere de la persona");


// console.log(persona[pedirNombre]);

// //ASIGNAR VALORES
// console.log(persona["nombre"] = "Marge");

// console.log(persona.edad = 38);

// //AGREGAR VALORES
// console.log(persona.comidaFav="Donnuts");
// console.log(persona)


// CONSTRUCTORES (primera letra en mayusculas)(se le asignan las propiedades en vez de los parametros)

//CONSTRUCTOR UNO (CREAR UNA PERSONA EN BASE A ESTE MOLDE)
function Persona(nombre, apellido, edad, calle){
    this.nombre = nombre; //El this : hacer referencia a esta persona que estamos creando. 
    this.apellido= apellido
    this.edad = edad;     //Por ejemplo: "Lisa" es el valor de this.nombre, y pasa a ser nombre(variable)
    this.calle = calle;

    //METODO
    this.hablar= function(){
        console.log("Hola soy "+ this.nombre);
    }
    this.nombreYApellido= function(separador){ //parametro para generar el espacio entre valores
        console.log(this.nombre  + separador +  this.apellido);
    }
}

const persona2 = new Persona("Lisa", "Simpson", 8, "Av. SiempreViva");
const persona3= new Persona("Pedro", "Grecco", 19, "Montevideo 260");




// let auto = "Ford";
// console.log(auto.length);    //Length (longitud): cantidad de letras/valores que tiene este objeto. Devuelve el numero de la longitud del objeto
// console.log(auto.toLocaleUpperCase());   // pasa el string a mayusculas

console.log(persona2);
//llamada al metodo dentro de la funcion
persona2.hablar()

persona2.nombreYApellido(" ") //Aca se determian el parameto (" ") para que se genere el espacio


console.log(persona3);
persona3.hablar();
persona3.nombreYApellido(" ");