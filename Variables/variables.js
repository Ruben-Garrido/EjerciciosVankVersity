console.log("hola vankVersity")

// variable tipo entera

let edad =20;

// variable boolena 
 let esCasado = false;

 // variable flotante 
 let estatura =  1.70;

 // tipo String 

 let cadena =  "Hola somos vankVersity";

 let pais;
 console.log(pais);
 pais = " Colombia";
 console.log(pais);


 //operadores logicos

 let estaturax = 1.70;
 edad = 22;
 let cumple = estaturax >1.65 && edad>= 18;
 console.log(cumple)

let casado = false;
let esCasadox = !casado;
console.log("es casado "+esCasadox)


/*
Programa que lee base y altura y muestra el area del triangulo 

*/


let base = parseFloat(prompt("Ingrese el valor de la base"));
let altura = parseFloat(prompt("Ingrese el valor de la altura"));

let resultado = (base * altura)/2;
console.log("el area del triangulo es: "+resultado);