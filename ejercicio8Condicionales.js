// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let ingresaCalificacion = parseInt(prompt("Ingresa tu calificacion"))

if(ingresaCalificacion < 0 || ingresaCalificacion > 11){
    console.log("ingresa una calificación correcta");
    

}else if(ingresaCalificacion < 6){
    console.log("REPROBADOO");
    
}else if(ingresaCalificacion >= 6 && ingresaCalificacion <= 8){
    console.log("REGULAR");
    
}else if(ingresaCalificacion === 9){
    console.log("Bien");
    
}else{
    console.log("Excelente");

    
}