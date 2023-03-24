
let pais = prompt("Pais de nacimiento?");
let nombre = prompt("ingrese su nombre");
let edad = prompt("Cual es su edad?");

edad = parseInt(edad);
let mayor;

if(edad > 18){
    mayor = "mayor de edad";
}else{
    mayor = "menor de edad";
}
    
alert("Bienvenido " + nombre + " usted es de " + pais + " y es "
+ mayor);
console.log("Bienvenido " + nombre + " usted es de " + pais + " y es "
+ mayor)