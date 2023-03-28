let ingreseLetra = prompt("Ingrese una vocal");

function esVocal(ingreseLetra){
    if(ingreseLetra === "a" || ingreseLetra === "A" || ingreseLetra === "e" || ingreseLetra === "E"
     || ingreseLetra === "i" || ingreseLetra === "I" || ingreseLetra === "o" 
     || ingreseLetra === "O" || ingreseLetra === "u" || ingreseLetra === "U"){
        alert("Es una vocal");
        console.log("Es una vocal");
        return true;
    } else {
        alert("No es una vocal");
        console.log("No es una vocal");
        return false;
    }
}

esVocal(ingreseLetra);