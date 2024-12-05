let n

do{

    n = prompt("Bienvenido al menu de ejercicios logicos de Funciones\n\n"+
        "1. Calcular el area de un triangulo.\n"+
        "2. Calcular el volumen de un cubo.\n"+
        "3. Funcion saludar al usuario\n"+
        "4. una función que muestre los números de 1 a n.\n"+
        "5. Generar factorial a partir de n.\n"+
        "6. Revisar si es vocal\n"+
        "7. Pasar cadena a Mayusculas\n"+
        "8. Devolver primera letra de la cadena\n"+
        "9.salir");


        switch(n){

            case'1': 
            
                    let base = parseFloat(prompt("Ingrese la base del triangulo"))
                    let altura = parseFloat(prompt("Ingrese la altura del triangulo"))
                    calcularAreaTriangulo(base, altura);
    
            break;
            
            case '2':

                    let lado = parseFloat(prompt("Ingrese uno de los lados del cubo"))
                    calcularVolumenCubo(lado);
        
            break;
            
            case '3':

                    let nombre = prompt("Ingrese su nombre")
                    saludarUsuario(nombre);
                    

            break

            case '4':
                    let n = prompt("Ingrese el numero n ")
                    numerosN(n);
                    
            break;

            case '5':

                    let nFactorial = prompt("Ingrese el numero factorial que quiere calcular")
                    calcularFactorial(nFactorial);

            break;

            case '6':
            
                     let vocal =  prompt("Ingrese la letra ")
                     esVocal(vocal)

            break;

            case '7':

                    let cadena = prompt("Ingrese una cadena");
                    convertirAMayusculas(cadena);
            
            break;

            case '8':

                    let nombre2 = prompt("Ingrese un nombre");

                    obtenerPrimeraLetra(nombre2);
                    
            break;

            case '9':

            alert("Cerrando programa.....")
            break;


            default:

                    alert("Opcion invalidad")

            break
            
        }
}while(n != 9);

//-----------------------------Funciones----------------------------

function saludarUsuario(nombreUsuario){
  
    return alert("hola "+nombreUsuario);
}

function calcularFactorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return alert("El factorial es el siguiente"+factorial);
}

function convertirAMayusculas(cadena) {
    return alert( cadena.toUpperCase());
}

// que permite la funcion. esta permiten reciclar codigo

//crear la f(x) =  2x+1

function f (x){

    return 2(x)+1;
}



// Escriba una función que muestre los números de 1 a n, teniendo n como parámetro.

//let n = prompt("Ingrese el numero de numeros que quiere imprimir");
//numerosN(n);

function numerosN (n){

    for (let i = 1; i <= n; i++){

       console.log(i);

    }
}

//Escriba una función con el nombre de esVocal() que tome un carácter , devuelva
//True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso
//contrario.
/*
let letra = prompt("Ingrese un caracter");

esVocal(letra);
*/
function esVocal(caracter){

    
    if(caracter == "A"||caracter =="E"||caracter =="I"||caracter =="O"||caracter =="U"||
        caracter =="a"||caracter =="e"||caracter =="i"||caracter =="o"||caracter =="u"){

        
        return console.log(true);
    }
    else{
    return console.log(false);
    }
}


/*Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva
la primera letra del nombre.*/


function obtenerPrimeraLetra (nombre){

    return console.log(nombre[0]);
}

/*Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
de vocales que contiene la cadena*/


let cadena = prompt("Ingrese una cadena");


let vocalesContadas = contarVocales(cadena);

console.log(vocalesContadas);

function contarVocales(cadena){

    let conteo = 0;

    for(let i = 0; i < cadena.length; i++){

        if (esVocal(cadena[i])){

            conteo++;
            
        }

    }
    return conteo
}
