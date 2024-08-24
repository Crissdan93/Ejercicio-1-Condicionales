// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diaSemana = prompt("ingrese un dia de la semana").toUpperCase();

switch (diaSemana){

    case "LUNES":
    console.log("Empieza la semana papito tu puedes")
        break;
    case "MARTES":
        console.log("El martes es mejor que el lunes animate")
            break;
    case "MIERCOLES":
        console.log("HOMBLIGO DE LA SEMANA!!!")
        break;
    case "JUEVES":
        console.log("JUEBEBES O QUE")
        break;
    case "VIERNES":
        console.log("VIERNES Y EL CUERPO LO SABE!!!")
        break;
    case "SABADO":
        console.log("AHORA SI AMONOS A ACAPULCO")
        break;
    case "DOMINGO":
        console.log("Nooo mañana es Lunesssssss")
        break;
    default:
        console.log("INGRESE UN DÍA CORRECTO");
                
    
}