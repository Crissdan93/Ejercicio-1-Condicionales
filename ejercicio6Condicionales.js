// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
let numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 === numero2 && numero1 === numero3) {
    console.log("Los tres números son iguales");
} else if (numero1 === numero2 && numero1 > numero3) {
    console.log("El primer y el segundo número son iguales y mayores que el tercero");
} else if (numero1 === numero3 && numero1 > numero2) {
    console.log("El primer y el tercer número son iguales y mayores que el segundo");
} else if (numero2 === numero3 && numero2 > numero1) {
    console.log("El segundo y el tercer número son iguales y mayores que el primero");
} else if (numero1 === numero2) {
    console.log("El primer y el segundo número son iguales");
} else if (numero2 === numero3) {
    console.log("El segundo y el tercer número son iguales");
} else if (numero1 === numero3) {
    console.log("El primer y el tercer número son iguales");
} else if (numero1 > numero2 && numero1 > numero3) {
    console.log("El primer número ingresado es el mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El segundo número es el mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El tercer número es el mayor");
}
