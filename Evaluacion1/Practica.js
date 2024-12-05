//Descripción: Crea un programa que le pida al usuario un número 
//entero positivo y luego calcule la suma de todos los números pares entre 1 y el número ingresado.

//1. pedir el numero el numero. Con una condicional de que sea entero positivo
//2. Calcular la suma de todo los numeros pares. Con una condicional para solo sacar los pares 
//3. mostra el resultado

let numeroN = parseInt(prompt("Ingresar el numero limite de la sumatoria."))


if(numeroN>0){

    let contador = 0;

    for (let index = 1; index <= numeroN; index++) {
        
        if(index%2 == 0 ){

            contador += index;
        }
             
    }
    console.log("La sumatoria es:"+contador)

}else{

        console.log("Error. Ingreso un numero no valido")

    }



//*Crea un programa que verifique si un número ingresado por el usuario es primo.
// Un número es primo si solo es divisible por 1 y por sí mismo.

function esPrimo(){
    let numero = parseInt(prompt("Ingrese un número para verificar si es primo:"));

    if (numero > 1) {  // Verificamos si el número es mayor que 1
        let esPrimo = true;
    
        // Verificamos la divisibilidad solo hasta la raíz cuadrada del número
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    
        if (esPrimo) {
            console.log(numero + " es un número primo.");
        } else {
            console.log(numero + " no es un número primo.");
        }
    } else {
        console.log("El número debe ser mayor que 1 para ser considerado primo.");
    }
    

}

function esPalindromo() {

        let numero = parseInt(prompt("Ingrese un número para verificar si es palíndromo:"));
        let numeroOriginal = numero;
        let numeroInvertido = 0;
    
        while (numero > 0) {
            let digito = numero % 10;
            numeroInvertido = numeroInvertido * 10 + digito; 
            numero = (numero / 10) | 0; // elimina el ultimo numero
            ; // Elimina el último dígito del número
        }
    
        // Comparar el número original con el invertido
        return numeroOriginal === numeroInvertido;
    }
    