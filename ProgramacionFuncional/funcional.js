/*
La programación funcional es un paradigma
que se centra en resolver problemas usando
funciones de manera declarativa

-Funciones de orden superior: son funciones
que reciben como argumentos a otras funciones o que retornan otra función

Callback: es una función que se pasa como
argumento a otra función y se ejecuta
cuando el trabajo ha terminado

*/

//Funciones de orden superior
//función que recibe otra función como
//argumento
//EJEMPLO: Realizar la suma de a y b usando
//un callback

const sumaAb = (a, b) => a + b;

function suma(a, b, callback) {
    let resultado = callback(a, b)
    return resultado;
}

let resultadoSuma = suma(3, 5, sumaAb);
console.log("Resultado ", resultadoSuma);


console.log("-------------------------");
//EJEMPLO: Realizar un saludo a una persona
//con un callback
const saludo = (nombre, apellido) => `${nombre} ${apellido}`

function hola(nombre, apellido, callback) {
    let saludoCompleto = callback(nombre, apellido)
    console.log(saludoCompleto);
}
hola("Juan", "Perez", saludo);


console.log("---------------------------");

//Funciones que retornan otra función

function saludoT(saludo1) {
    return function saludoSegundaParte(saludo2) {
        return `${saludo1} ${saludo2}`;
    }
}
let primeraParte = saludoT("Hola...");
let saludoTotal = primeraParte("Pedro");
console.log(saludoTotal);

console.log("--------------");
//suma por partes
function sumaA(a) {
    return function SumaB(b) {
        return a + b;
    }
}
let sumaParcial = sumaA(3);
let sumaTotal2 = sumaParcial(7);
console.log("SUMA TOTAL ", sumaTotal2);

console.log("-------------------------");
//metodo every: este método nos sirve para verificar
//si una condición en un arreglo siempre se cumple o no
const numeros = [10, 20, 30, 40];
const todosPositivos = numeros.every((num) => num > 0);
console.log(todosPositivos);

const nombres = ["Maria", "Juan", "Bolivar"];
const todosMasTresCaracteres = nombres.every((nombre) => nombre.length > 3)
console.log("TODOS TIENEN MAS DE 3 CARACTERES ", todosMasTresCaracteres);

console.log("--------------------");
//Uso de setTimeout : es una manera de trabajar asincronizidad en javascript
setTimeout(() => {
    console.log("HOLA VANK");
}, 4000);

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");













