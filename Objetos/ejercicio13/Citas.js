/*Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se
requiere un programa donde el usuario pueda consultar el día de su cita mediante su
documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe
mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el
programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó
fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que
el cambio solicitado ha sido exitoso.*/


let opcion;
let pacientes = [
    {nombre: "diego", edad: 18, cedula: "23", cita: {dia: 'Miércoles', fecha: '2024-11-22', hora: '15:00'}},
    {nombre: "juan", edad: 18, cedula: "34", cita: {dia: 'Miércoles', fecha: '2024-11-22', hora: '14:00'}},
    {nombre: "maria", edad: 18, cedula: "33", cita: {dia: 'Miércoles', fecha: '2024-11-22', hora: '16:30'}}
];

do {
    opcion = prompt(
        "Bienvenido al menú de la clínica\n\n" +
        "1. Consultar día de su cita\n" +
        "2. Pedir una cita\n" +
        "3. Salir\n"
    );

    switch (opcion) {
        case '1':
            let cedula = prompt("Ingrese su número de identificación: ");
            let resultado = consultarCitaMedica(cedula, pacientes);

            if (resultado) {
                console.log(`Nombre: ${resultado.nombre}`);
                console.log(`Día de la cita: ${resultado.cita.dia}`);
                console.log(`Fecha de la cita: ${resultado.cita.fecha}`);
                console.log(`Hora de la cita: ${resultado.cita.hora}`);

                let cambiarCita = prompt("¿Desea cambiar su cita? (si/no): ");

                if (cambiarCita === 'si') {
                    let nuevoDia = prompt("Ingrese el nuevo día para su cita: ");
                    let nuevaFecha = prompt("Ingrese la nueva fecha para su cita (YYYY-MM-DD): ");
                    let nuevaHora = prompt("Ingrese la nueva hora para su cita (HH:MM): ");

                        cambiarCitaPaciente(cedula, pacientes, nuevoDia, nuevaFecha, nuevaHora);
                        console.log("El cambio de cita ha sido exitoso.");
                    }
                }
                break;
                
            case '3':
                console.log("Gracias por usar el sistema. ¡Hasta luego!");
                break;

            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
                break;
        }
} while (opcion !== '3');

function consultarCitaMedica(cedula, pacientes) {
    let paciente = pacientes.find(esta => esta.cedula === cedula);

    if (!paciente) {
        console.log("Paciente no encontrado.");
        return null;
    }
    return paciente;
}

function cambiarCitaPaciente(cedula, pacientes, nuevoDia, nuevaFecha, nuevaHora) {
    let paciente = pacientes.find(p => p.cedula === cedula);

    if (paciente) {
        paciente.cita.dia = nuevoDia;
        paciente.cita.fecha = nuevaFecha;
        paciente.cita.hora = nuevaHora;
    }
}
