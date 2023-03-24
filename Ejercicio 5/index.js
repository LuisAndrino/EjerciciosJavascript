let opcion = prompt("Elija una opcion entre: vino, cerveza, refresco o agua");

if(opcion == "vino" || opcion == "Vino" || opcion == "cerveza" || opcion == "Cerveza"){
    alert("Deberias ir a la barra de bebidas");
} else if (opcion == "refresco" || opcion == "Refresco" || opcion == "agua" || opcion == "Agua") {
    alert("Deberias ir a la tienda");
} else{
    alert("Opcion invalida");
}