let condiciones = true;
let pregunta = prompt("Quieres terminar de ejecutar  el programa? conteste con un SI");
while(condiciones){
    if(pregunta == "SI"){
        condiciones = false;
    }
    else{
        pregunta = prompt("Quieres terminar de ejecutar  el programa? conteste con un SI");
    }
}