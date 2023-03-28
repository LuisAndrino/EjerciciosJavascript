let ingreseNumero = prompt("Ingrese un número");
ingreseNumero = parseInt(ingreseNumero);
let ingreseUnCaracter = prompt("Ingrese un caracter");

function generarCaracteres(numero, caracter){
    let nuevoCaracter = "";

    for(let i = 0; i < numero; i++){
        nuevoCaracter += caracter;
    }

    console.log(nuevoCaracter);
    alert(nuevoCaracter);
    return nuevoCaracter;
}

generarCaracteres(ingreseNumero, ingreseUnCaracter);