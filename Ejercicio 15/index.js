let condiciones = true;
let pregunta = prompt("Quiere seguir ejecutando el programa? conteste con un sí");
while(condiciones){
    if(pregunta == "sí"){
        pregunta = prompt("Quiere seguir ejecutando el programa? conteste con un sí");
    }else{
        condiciones = false;
    }
}