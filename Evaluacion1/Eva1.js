// programa final 

let opcion
let n, num1, num2

do{

    opcion = prompt("ingrese la opcion que desea escoger\n"+
                     "s: Sumar\n"+
                     "r: Restar\n"+
                     "m: multiplicar\n"+
                     "d: dividir\n"+
                     "c: para realizar una cuenta regresiva de n hasta 0\n"+
                     "p: para verificar si es divisible por 2 y 3\n"+
                     "x: salir\n");

    if (opcion =='c'|| opcion =='p'){
        n = parseInt(prompt("Ingrese el numero que desea"))
    }elseif(opcion =='s'||opcion == 'r' ||opcion == 'm'||opcion == 'd' ){
    
        num1 = parseFloat(prompt("Ingrese el primer numero"))
        num2 = parseFloat(prompt("Ingrese el segundo numero"))
    }


    switch (opcion) {
        case 's':
            
            break;
        
        case 'r':
        
            break;

        case 'm':
            
            break;

        case 'd':
            
            break;

        case 'c':
            
            break;
        case 'p':
            
            break;

        case 'x':
            
            break;
    
        default:
            break;
    }

}while(opcion != "x")


