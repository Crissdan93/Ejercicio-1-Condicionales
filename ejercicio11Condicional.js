let transporte = parseInt(prompt("Ingrese el tipo de transporte 1.Coche 2.Moto 3.Autobús"))

switch(transporte){
    case 1:
        let kilometros1 = parseInt(prompt("Ingrese los kilometros recorridos"))
        let litros1 = parseInt(prompt("Ingrese los litros consumidos"))
        let precioPorKmRecorridos1 = 0.20 * kilometros1

        if(litros1 >= 0 && litros1 <= 100){

            let costoTotal = precioPorKmRecorridos1 + 5
            console.log(`El coste total por el uso de el Coche es de ${costoTotal}`);
            
        }else if(litros1 > 100 ){
            let costoTotal = precioPorKmRecorridos1 + 10
            console.log(`El coste total por el uso de el Coche es de ${costoTotal}`);

        }
        break;

    case 2:
        let kilometros2 = parseInt(prompt("Ingrese los kilometros recorridos"))
        let litros2 = parseInt(prompt("Ingrese los litros consumidos"))
        let precioPorKmRecorridos2 = 0.10 * kilometros2
    
            if(litros2 >= 0 && litros2 <= 100){
    
                let costoTotal = precioPorKmRecorridos2 + 5
                console.log(`El coste total por el uso de el Moto es de ${costoTotal}`);
                
            }else if(litros2 > 100 ){
                let costoTotal = precioPorKmRecorridos2 + 10
                console.log(`El coste total por el uso de el Moto es de ${costoTotal}`);
    
            }
        break;   
    case 3:
        let kilometros3 = parseInt(prompt("Ingrese los kilometros recorridos"))
        let litros3 = parseInt(prompt("Ingrese los litros consumidos"))
        let precioPorKmRecorridos3 = 0.5 * kilometros3
            
                    if(litros3 >= 0 && litros3 <= 100){
            
                        let costoTotal = precioPorKmRecorridos3 + 5
                        console.log(`El coste total por el uso de el auto es de ${costoTotal}`);
                        
                    }else if(litros3 > 100 ){
                        let costoTotal = precioPorKmRecorridos3 + 10
                        console.log(`El coste total por el uso de el auto es de ${costoTotal}`);
            
            }
        break;  
    
        default:console.log("Ingrese un numero de transporte correcto");
        

}