let curso = parseInt(prompt("Seleccione el número del curso 1.Course 2.-Carrera 3.-Master"))

switch(curso){
    case 1:
        let beca= parseInt(prompt("Cuentas con una de las siguientes becas 1.- Facebook 2.-Google 3.-Jesua , selecciona el numero de tu beca"));
        switch(beca){
            case 1:
                let costoMensualBecaFace = 4999 * .20
                let costofinalFace = costoMensualBecaFace * 2
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalFace}`);
                break;
            case 2: 
                let costoMensualBecaGoogle = 4999 * .15
                let costofinalGoogle = costoMensualBecaGoogle * 2
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalGoogle}`);
                break;
            case 3: 
                let costoMensualBecaJesua = 4999 * .50
                let costofinalJesua = costoMensualBecaJesua * 2
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalJesua}`); 
                break;
            default:
                console.log("Ingrese una beca correcta");
                
                
                
        }
        break;
    case 2:
        let beca2= parseInt(prompt("Cuentas con una de las siguientes becas 1.- Facebook 2.-Google 3.-Jesua , selecciona el numero de tu beca"));
        switch(beca2){
            case 1:
                let costoMensualBecaFace = 3999 * .20
                let costofinalFace = costoMensualBecaFace * 6
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalFace}`);
                break;
            case 2: 
                let costoMensualBecaGoogle = 3999 * .15
                let costofinalGoogle = costoMensualBecaGoogle * 6
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalGoogle}`);
                break;
            case 3: 
                let costoMensualBecaJesua = 3999 * .50
                let costofinalJesua = costoMensualBecaJesua * 6
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalJesua}`);
                break;
            default:
                console.log("Ingrese una beca correcta");
                    
                
                
        } 
        break;   
    case 3:
        let beca3= parseInt(prompt("Cuentas con una de las siguientes becas 1.- Facebook 2.-Google 3.-Jesua , selecciona el numero de tu beca"));
        switch(beca3){
            case 1:
                let costoMensualBecaFace = 2999 * .20
                let costofinalFace = costoMensualBecaFace * 12
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalFace}`);
                break;
            case 2: 
                let costoMensualBecaGoogle = 2999 * .15
                let costofinalGoogle = costoMensualBecaGoogle * 12
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalGoogle}`);
                break;
            case 3: 
                let costoMensualBecaJesua = 2999 * .50
                let costofinalJesua = costoMensualBecaJesua * 12
                console.log(`el costo final de tu carrera con la beca facebook es de ${costofinalJesua}`); 
                break;
                default:
                    console.log("Ingrese una beca correcta");
                
                
                
        } 
        break;
    default:
        console.log("Ingrese un número correcto");
                    
}