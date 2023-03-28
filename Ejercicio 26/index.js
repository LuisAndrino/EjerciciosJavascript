let seleccionaUnNumero = prompt("¿Que quieres hacer? \n 1. Calcular la tension electrica \n 2. Calcular la intensidad de la corriente electrica \n 3. Calcular la resistencia electrica");
seleccionaUnNumero = parseInt(seleccionaUnNumero);


function calcularV(intensidad, resistencia) {
    let tension = intensidad * resistencia;
    alert("La tension electrica es: " + tension + " voltios");
    return tension;
}

function calcularI(tension, resistencia) {
    let intensidad = tension / resistencia;
    alert("La intensidad de la corriente electrica es: " + intensidad + " amperios");
    return intensidad;
}

function calcularR(tension, intensidad) {
    let resistencia = tension / intensidad;
    alert("La resistencia electrica es: " + resistencia + " ohmios");
    return resistencia;
}

if (seleccionaUnNumero == 1) {
    let ingreseIntensidad = prompt("Ingrese la intensidad de la corriente electrica");
    ingreseIntensidad = parseInt(ingreseIntensidad);
    let ingreseResistencia = prompt("Ingrese la resistencia electrica");
    ingreseResistencia = parseInt(ingreseResistencia);
    calcularV(ingreseIntensidad, ingreseResistencia);
} else if (seleccionaUnNumero == 2) {
    let ingreseTension = prompt("Ingrese la tension electrica");
    ingreseTension = parseInt(ingreseTension);
    let ingreseResistencia = prompt("Ingrese la resistencia electrica");
    ingreseResistencia = parseInt(ingreseResistencia);
    calcularI(ingreseTension, ingreseResistencia);
} else if (seleccionaUnNumero == 3) {
    let ingreseTension = prompt("Ingrese la tension electrica");
    ingreseTension = parseInt(ingreseTension);
    let ingreseIntensidad = prompt("Ingrese la intensidad de la corriente electrica");
    ingreseIntensidad = parseInt(ingreseIntensidad);
    calcularR(ingreseTension, ingreseIntensidad);
} else {
    alert("No es una opcion valida");
}