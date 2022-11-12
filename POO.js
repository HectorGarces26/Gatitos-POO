/*
 Programacion Orientada a Objetos (POO)

 Paradigma = Manera en la que se puede hacer algo especifico.
 Paradigma de programacion : Forma o manera en la que puedo programar algo.


 Otras formas de programar:
 Programacion funcional
 Programacion imperativa
 Programcion declarativa


 Pilares fundamentales de la programacion POO
    - Polimorfismo
    - Herencia
    - Encapsulamiento
    - Abstraccion



- Clases (plantillas para hacer muchos objetos)
- Objetos
    - Atributos (lo que tengo - ojitos pispiretos)
    - Metodos  (lo que puedo hacer con lo que tengo - mirar lo bello de la vida)

*/

//Ejemplo del gatito

//Propiedades = variables o constantes
const color = "Gris";
var tamanio = "Chiquito";
var edad = 5;
var cicatrices = true;
const raza = "Angora";
var caracter = "Agresivo"

//Metodos o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}

//Precursor de los objetos Array
//var gato = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
//console.log(typeof(gato));


//Evolucion de los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}

var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

var Limon= {
    nombre: "Limon",
    edad: 2,
    caracter : "Agrio",
    raza : "Egipcio",
}


console.log(typeof(Cilantro));
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Cilantro es",Cilantro.caracter);

/*

Clases para aguluizar este proceso (plantillas)

*/

//1. Defino mi clase con la palabra reservada class
class gato {
    //2. Definir mis propiedades o atributos como variables, para despues ponerle valores
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";


    //3. Agregar constructores 
    //Necesito construir con los atributos que ya defini en la clase
    constructor(nombre, edad, raza, caracter){ //funcion especial para construir donde necesito esos parametros
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;

    }


    //4. Definir los metodos que seran definidos como funciones o acciones
    maullar(){
        console.log("Miau");
    }
    dormir(){
        confirm.log("Zzzzzz");
    }
    ronronear(){
        console.log("Prrrrrrrr");
    }
}


//5. Para empezar a crear o  instanciar objetos (gatos), vamos a utilizar la palabra reservada new nombreClase
var Garfield = new gato("Garfield", 9, "Naranja", "Dormilon");
var Felix = new gato("Felix", 4, "Caricaturas", "Amistoso");
var Yummy = new gato("Yummy", 3, "Magica", "Amistosa");
var Botas = new gato("Botas", 1, "No se sabe", "Amorosa");
var MamáBotas = new gato("MamáBotas", 4, "Tampoco se sabe", "Amigable");

console.log("El nombre de este gatito es", Garfield.nombre);
console.log("El nombre de este gatito es", Felix.nombre);
console.log("El nombre de este gatito es", Yummy.nombre);
console.log("El nombre de este gatito es", Botas.nombre);
console.log("El nombre de este gatito es", MamáBotas.nombre);



/*
JSON (JavaScript Object Notation)

Es un formato estandar (que ya existe, alguien lo definio y tiene ciertas reglas) que esta basado en texto y nos sirve para representar datos estructurados basados en la sintaxis de JS

*/

//Objeto normal
var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

console.log(Cebollita);
console.log(typeof(Cebollita));


//Objeto en JSON

var CebollitaJSON= {
    "nombre": "Cebollita",
    "edad": 1,
    "caracter" : "Timida",
    "raza" : "Esfinge",
}

console.log(CebollitaJSON);
console.log(typeof(CebollitaJSON));

const objetoDeserealizado = {"nombre": "Cebollita", "edad": 5};
const objetoSerealizado = `{"nombre": "Cebollita", "edad": 5};`


console.log(typeof(objetoDeserealizado));
console.log(typeof(objetoSerealizado));


//Para poder esas conversiones lo mas rapido posible uso dos metodos

//objeto de JS
var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}


//JSON.stringify (objeto a string para que el servidor lo lea)

const perejilSerializado = JSON.stringify(Perejil);

//JSON.parce (string a un objeto JSON)

const perejilDeserializado = JSON.parse(perejilSerializado);

console.log("Este es el perejil como objeto", perejilDeserializado);
console.log("Este es el perejil como", perejilSerializado);