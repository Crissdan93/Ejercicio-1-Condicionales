//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let numero = prompt("Ingrese un número")
if(numero % 2 === 0) {
    alert(`El numero ${numero} es divisible entre 2`);
    
}else{
    alert(`El numero ${numero} no es divisible entre 2`);
    
}