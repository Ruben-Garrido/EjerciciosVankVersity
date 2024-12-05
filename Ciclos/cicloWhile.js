// lo usamos cuando no sabemos el numero de repeticiones que se va hacer

/*
let control = 1;

while (control <= 10) {
    
    console.log("hola, vankVersity");

    control++;
}*/

//numeros multiplos de 7 entre 10 y 700 en orden descendente

let numero = 700;

while (numero >= 10) {
    
    if(numero % 7==0 ){
        console.log("7"+" * "+numero+" = "+ numero);
        }
    numero--;
}
