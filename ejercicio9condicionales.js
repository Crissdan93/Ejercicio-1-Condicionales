let precioHeladoSinTopping = 50;
let precioOreo = 10;
let precioKitKat = 15;
let precioBrownie = 20;

let topping = prompt("¿Qué topping te gustaría agregar a tu helado? (oreo, kitkat, brownie, sin topping)").toLowerCase();

switch (topping) {
    case "oreo":
        console.log("El precio total de tu helado con topping de oreo es: " + (precioHeladoSinTopping + precioOreo) + " MXN.");
        break;
    case "kitkat":
        console.log("El precio total de tu helado con topping de KitKat es: " + (precioHeladoSinTopping + precioKitKat) + " MXN.");
        break;
    case "brownie":
        console.log("El precio total de tu helado con topping de brownie es: " + (precioHeladoSinTopping + precioBrownie) + " MXN.");
        break;
    case "sin topping":
        console.log("El precio del helado sin ningún topping es: " + precioHeladoSinTopping + " MXN.");
        break;
    default:
            console.log("No tenemos este topping, lo sentimos.");    
}