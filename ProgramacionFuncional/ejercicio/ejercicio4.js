function imprimirLetra(palabra){
    let palabraModificada = palabra.split('');
    palabraModificada.forEach(letra => {
        console.log(letra);
    });
}

imprimirLetra("Hola");