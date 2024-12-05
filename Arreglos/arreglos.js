//Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de
//índice 2 y 4.

let j = [200, -100, 45, 78, 32]

console.log("elemento2",j[2])
console.log("elemento4",j[4])

//Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh.

let f = ["ab", "cd", "ef", "gh"]
console.log("elemento1",f[1])
console.log("elemento3",f[3])

//Dado el arreglo [1, 2, false] Elimine el elemento de índice 2.

let a = [1, 2, false]
console.log("Arreglo original",a)
a.splice(2, 1)

console.log("Arreglo modificado",a);

//Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de
//índice 2 por true, cambiar el elemento de índice 3 por false.

let h = [true, true, false,true, false]
console.log("Arreglo original",h)
h[2] = true;
h[3] = false;
console.log("Arreglo original modif",h)


//Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por
//true, cambiar el elemento "qr" por 30 .

let w = ["wc", "jp", "zx", "qr"]
console.log("Arreglo original",w)
w[1] = true;
w[3] = 30
console.log("nuevo arreglo",w);

// Función que recibe un arreglo de números como argumento y retorna su promedio

const numeros = [2,4,7,8,9]


function promedio(arreglo){

    let resultado = 0;
    arreglo.forEach(element => {
       resultado += element;  
    });

    resultado = resultado/arreglo.length;
    return resultado;
}

let promedioR = promedio(numeros);
console.log(promedioR)


/*Función que recibe un arreglo de números
 enteros y retorna un arreglo nuevo pero solo con los números impares*/

 function numerosImpares(arreglo){

    let nuevoArreglo = [];
    arreglo.forEach(elemento => {
        if(elemento%2 !== 0){

            nuevoArreglo.push(elemento);
        }
    });

    return nuevoArreglo;
 }

 const numeros2 = [2,1,3,4,5,6];
console.log(numerosImpares(numeros2));

//Función que recibe un arreglo de números y retorna el mayor

function mayorNumero(numeros3){



    return
}


/*Función que recibe que tiene dos parámetros,  el primero es un arreglo de nombres y el segundo un nombre a
 buscar en el arreglo. Si el nombre se encuentra en el arreglo la función debe retornar true, de lo contrario false*/

 let nombres =["Camila", "Javier", "Patricia"];
let nombre = "Camila";

function buscarNombre(nombres, nombre){
    if(nombres.indexOf(nombre) !== -1 ){
        return true;
    }else{
        return false;
    }
}

console.log(buscarNombre(nombres, nombre))