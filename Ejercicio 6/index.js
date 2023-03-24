let htmlel = document.querySelector("#eleccion");

let clasico = prompt("A que equipo apoyaras en el clasico español? Madrid o Barcelona?");

if(clasico == "Barcelona" || clasico == "barcelona"){
    htmlel.style.background = "linear-gradient(90deg , #004D98, #A50044, #A50044, #004D98 , #A50044, #A50044, #004D98)";
} else if (clasico == "Madrid" || clasico == "madrid"){
    htmlel.style.background = "linear-gradient(90deg, white, blue , white,  white, blue , white, white, blue, white)";
} else{
    alert("Opcion invalida");
}

