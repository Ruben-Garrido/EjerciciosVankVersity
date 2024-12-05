/*Cree un programa el cual cumpla con los siguientes requerimientos, muestre la lista de
inscritos y permita actualizar sus calificaciones.
● Crear un arreglo estudiantes donde cada elemento sea un objeto con
nombre, edad, matrícula y calificaciones (un arreglo de números).
● Crear una función calcularPromedio que reciba una matrícula y devuelva el
promedio de calificaciones de ese estudiante.
● Crear una función actualizarCalificaciones que reciba la matrícula y un nuevo
arreglo de calificaciones*/

let estudiantes=[{nombre:"diego",edad:18,matricula:"23",calificaciones:[1.9,2.8,4.8,4.0,5.0]},
                {nombre:"juan",edad:18,matricula:"34",calificaciones:[4.1,2.9,3.3,4.1,2.5]},
                {nombre:"maria",edad:18,matricula:"33",calificaciones:[4.1,5.0,3.1,4.8,3.2]}];

                
function calcularPromedio(matricula) {
    let estudiante = estudiantes.find(est => est.matricula === matricula);

    if(!estudiante) {
        console.log("Estudiante no encontrado");
    }

    let suma = 0;
    let calificaciones = estudiante.calificaciones;
    for(let i=0; i<calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma/calificaciones.length;

}

const actualizarCalificaciones = (matricula, calificaciones) => {
    let estudiante = arregloEstudiantes.find(est => est.matricula == matricula);
    if(!estudiante){
        throw new Error("Estudiante no encontrado");
    }
    estudiante.calificaciones = calificaciones;
}


actualizarCalificaciones("4", [1, 2, 3, 4, 5]);
console.log(arregloEstudiantes);