//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let respuesta = prompt("Eres bellísismo?").toLocaleUpperCase();

if (respuesta === "SI"){

    console.log("Ciertamente");

}else{
    console.log("no te creo");
    
}

