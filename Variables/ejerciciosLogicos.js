
let n

do{

    n = prompt("Bienvenido al menu de ejercicios logicos\n\n"+
        "1. Calcular los años que tendra el usuario dentro de tanto años.\n"+
        "2. Calcular los diferentes resultados aritmeticos de dos numeros.\n"+
        "3. Calcular el valor de un electrodomestico a cuotas.\n"+
        "4. Calcular el area de un triangulo.\n"+
        "5. Calcular el area y el perimetro de un circulo.\n"+
        "6. Calcular el volumen de un cubo.\n"+
        "7. Calcular el precio del producto con iva.\n"+
        "8. Calcular el producto con descuento.\n");


        switch(n){

            case'1': 
            
                    let edad
                    let edadIndicada
                    
                    edad = parseInt(prompt("Ingrese la edad actual:"))
                    edadIndicada = parseInt(prompt("Ingrese el numero de años que desea agregar a la edad actual:"))
                    
                    calcularEdadFutura(edad,edadIndicada);
            break;
            
            case '2':

                    let numero1, numero2

                    numero1 = parseFloat(prompt("Ingrese el primer numero "))
                    numero2 = parseFloat(prompt("Ingrese el segundo numero "))

                    calcularOperacionesAritmeticas(numero1, numero2);
        
            break;
            
            case '3':

                    let precio = parseFloat(prompt("Ingrese el precio del producto"))
                    let plazo = parseInt(prompt("Ingrese el numero de cuotas"))

                    calcularCuotas(precio, plazo);


            break

            case '4':
            
                    let base = parseFloat(prompt("Ingrese la base del triangulo"))
                    let altura = parseFloat(prompt("Ingrese la altura del triangulo"))
                    calcularAreaTriangulo(base, altura);
            
            break;

            case '5':

                    let radio = parseFloat(prompt("Ingrese el radio de un circulo"))
                    calcularAreayPerimetro(radio);
            break;

            case '6':
            
                    let lado = parseFloat(prompt("Ingrese uno de los lados del cubo"))
                    calcularVolumenCubo(lado);

            break;

            case '7':

                    let precioProducto = parseFloat(prompt("Ingrese el valor del producto"));
                    calcularIva(precioProducto);
            
            break;

            case '8':

                    let precioProducto1 = parseFloat(prompt("Ingresa el valor del producto que va comprar"));
                    calcularDescuento(precioProducto1);
                    
            break;


            default:

                    alert("Opcion invalidad")

            break
            
        }
}while(n != 0);

/*Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

//la variable edad
// la variable a calcular (edad futura)
// mostrar el resultado

function calcularEdadFutura(edad, edadIndicada){

    let edadFutura

    edadFutura = edad + edadIndicada;


    return console.log("La edad que tendra en los proximos "+edadIndicada+" es: "+ edadFutura);
    
}

/*Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
suma y su resta.*/

function calcularOperacionesAritmeticas(a,b){

    let suma = a + b;
    let resta = a - b;
    let multi  = a * b;
    let divi = a / b;
    let modu = a % b;

    console.log("La suma de los numeros es: "+suma);
    console.log("La resta de los numeros es: "+resta);
    console.log("La multiplicacion de los numeros es: "+multi);
    console.log("La division de los numeros es: "+divi);
    console.log("El modulo de los numeros es: "+modu);
    
}

/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

function calcularCuotas(precio, plazo){

    //varibale precio
    //varibale plazo
    //Hacer el calculo del total y luego dividirlo en los meses escogidos
    // mostrar valor fijo de las cuotas 
   
   
    if (plazo > 0 ){

     // Calcular el precio total con el interés del 5% mensual
    const precioFinal = precio * Math.pow(1 + 0.05, plazo);
    // Calcular la cuota mensual
    const cuotaMensual = precioFinal / plazo;

        return console.log("El valor de la cuota es: "+cuotaMensual+" pesos");
    }
}

/*Cree un programa que tome la base y la altura de un triángulo e imprima su área.*/

function calcularAreaTriangulo(base, altura){

    let resultado = (base * altura)/2;

    return console.log("El area del triangulo es: "+resultado+" cm");
}

/*Cree un programa que tome el radio de un círculo e imprima su área y perímetro.*/

function calcularAreayPerimetro(radioCirculo){

    const pi = Math.PI;
    let area = pi *Math.pow(radioCirculo, 2)
    let perimetro = pi * (radioCirculo*2)

    return console.log("El area del circulo es: "+area+" cm y el perimetro es: "+perimetro+" cm");
}

/*Cree un programa que tome el lado de un cubo e imprima su volumen.*/

function calcularVolumenCubo(lado){

    let volumen = Math.pow(lado, 3);

    return console.log(`El volumen del cubo es: ${volumen} metros al cubo`)
}


/*Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
con un IVA de 19%.*/

function calcularIva(precio){

    // creo una variable para el precio, el iva y precio final con el iva

    let iva = precio * 0.19;
    let precioFinal = precio + iva;

    return console.log("El precio del producto mas iva es: "+ precioFinal+" pesos");
}

/*Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.*/

function calcularDescuento(precio){

    let descuento = precio * 0.10;
    let precioFinal = precio - descuento;

    return console.log("El precio final del producto con descuento es: "+precioFinal+" pesos");
}

/*Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
esa cantidad.*/

function calcularPorcentaje(cantidad, porcentaje){

    let convertirPorcentaje = porcentaje/100; 
    let porcentajeRequerido = cantidad * convertirPorcentaje;
    
    return console.log("El porcentaje indicado sobres la cantidad ingresada es: "+porcentajeRequerido)
}

