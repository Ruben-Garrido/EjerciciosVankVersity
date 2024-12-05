let n

do{

    n = prompt("Bienvenido al menu de ejercicios logicos de Objetos\n\n"+
        "1. Imprimir cada uno de los precios almacenados en el objeto.\n"+
        "2. Crear y modificar objeto vacio.\n"+
        "3. Modificar objeto\n"+
        "4. Mostrar los nymeros pares en el objeto.\n"+
        "5. Contar usuarios habilitados.\n"+
        "6. Recorres numeros en el objeto.\n"+
        "7. Eliminar clave valor del objeto. Mostrar objeto modificado\n"+
        "8. Mostrar datos de un objeto interno.\n"+
        "9.salir");


        switch(n){

            case'1': 
                    productosSupermercado();
    
            break;
            
            case '2':

                    modificarObjetoVacio();
        
            break;
            
            case '3':
                    let usuario = {
                        rol: "admin",
                        password: "admin30905",
                        edad: 20
                    }
                     modidificarObjeto(usuario);

            break

            case '4':
                    mostrarPares();
                    
            break;

            case '5':

                     contarUsuariosHabilitados();

            break;

            case '6':
            
                     recorrerNumeros();
                     
            break;

            case '7':

                     eliminarClaveValor();
                    
            
            break;

            case '8':

                    mostrarObjetosInternos()
                                        
            break;

            case '9':

                     alert("Cerrando programa.....")
            break;

            default:

                    alert("Opcion invalidad")

            break
            
        }
}while(n != 9);

//-----------------Funciones-----------------------
function productosSupermercado(){

    let productos = {

        nombre1: "Papa",
        precio1: 2500,
        nombre2: "Arroz",
        precio2: 3000,
        nombre3: "lentejas",
        precio3: 3500,
        nombre4: "Aceite",
        precio4: 4500
    };

    return alert("Los productos del supermercado son: \n\n"+
                  productos.nombre1 +" y su precio es: "+ productos.precio1 +" pesos.\n"+
                  productos.nombre2 +" y su precio es: "+ productos.precio2 +" pesos.\n"+ 
                  productos.nombre3 +" y su precio es: "+ productos.precio3 +" pesos.\n"+
                  productos.nombre4 +" y su precio es: "+ productos.precio4 +" pesos." 
    );
}


//-----------------------------------------------------------------------------------
function modificarObjetoVacio() {
        let objeto = {};
    
        // Agregar pares clave-valor
        objeto.nombre = "Carlos";
        objeto.edad = 25;
        objeto.profesion = "Medico";
    
        // Mostrar el mensaje directamente en el alert
        return alert(
            "Información del objeto:\n" +
            "Nombre: " + objeto.nombre + "\n" +
            "Edad: " + objeto.edad + "\n" +
            "Profesión: " + objeto.profesion
        );
    }
    
    //----------------------------------------------------------------------------
    
function modidificarObjeto(objeto){

        objeto.password = "user_7833";
        objeto.rol = "user";
        objeto.edad = 34;

        return alert(
                "Información del objeto:\n" +
                "Rol: " + objeto.rol + "\n" +
                "Password: " + objeto.password + "\n" +
                "Edad: " + objeto.edad
            );
}
 
//------------------------------------------------------------------------------------

function mostrarPares() {
        let objeto = { dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50 };
    
        // Recorrer el objeto
        for (let clave in objeto) {
            if (objeto[clave] % 2 === 0) {
                alert(`El valor de la clave "${clave}" y es par: ${objeto[clave]}`);
            }
        }
    }

 //-------------------------------------------------------------------------------------------
 function contarUsuariosHabilitados() {
        let usuarios = {
            183344: "habilitado",
            354625: "habilitado",
            6762442: "inhabilitado",
            88552: "inhabilitado",
            438276: "habilitado"
        };
    
        let contador = 0;
        for (let id in usuarios) {
            if (usuarios[id] === "habilitado") {
                contador++;
            }
        }
    
        return alert(`Número de usuarios habilitados son: ${contador}`);
    }
    
 
   //--------------------------------------------------------------------------------
   
   function recorrerNumeros() {
        let objeto = { numeros: [45, 78, 22, 89, 8] };
    
        for (let numero of objeto.numeros) {
            alert("El numero dentro del arreglo es: "+numero);
        }
    }

    //--------------------------------------------------------------------------------

    function eliminarClaveValor() {
        let objeto = { 3: "tres", 60: "sesenta", 10: "diez" };
        delete objeto[60];
    
        alert("Objeto actualizado: \n" + JSON.stringify(objeto,null,2));
    }

    //--------------------------------------------------------------------------------

    function mostrarObjetosInternos(){

        alert("¡¡mira la consola. Te recomiendo darle primero a la opcion 9\n\n!!"+
                "Para para la ejecucion del programa y asi poder ver abrir la consola. luego vuelve a cargar la pagina"
        )
        let objeto = {
                162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
                4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
                786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
                }

       for (const llave in objeto) {
            for (const valores in objeto[llave]) {
               console.log(`${valores}: ${objeto[llave][valores]}`);
            }
            console.log("-----------------")
       }
    }
    
    