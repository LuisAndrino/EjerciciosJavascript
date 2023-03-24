let numero = prompt("Elija un numero entre el 1 y el 4");

numero = parseInt(numero);

if(numero == 2){
    alert("Felicidades, acertaste");
} else if (numero == 1 || numero == 3 || numero == 4){
    alert("Fallase :(")
} else {
    alert("Opcion invalida");
}