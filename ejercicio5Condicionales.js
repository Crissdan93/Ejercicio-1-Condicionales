//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numero1 = parseInt(prompt("ingrese el primer número"))
let numero2 = parseInt(prompt("Ingrese el segundo número"))

if(numero1 > numero2) {
    console.log(`el primer número ${numero1} es mayor que el segundo número ${numero2}`);
    
}else if(numero1 < numero2){
    console.log(`el primer número ${numero1} es mayor que el segundo número ${numero2}`);
}else{
    console.log("ingrese números diferentes");
    
}