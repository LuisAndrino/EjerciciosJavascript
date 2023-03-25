let mes = prompt("Ingrese un numero de mes del año");
mes = parseInt(mes);

switch (mes) {
    case 12:
    case 1:
    case 2:
        alert("Es invierno");
        break;
    case 3 :
    case 4 :
    case 5 :
        alert("Es primavera");
        break;
    case 6 :
    case 7 :
    case 8 :
        alert("Es verano");
        break;
    case 9 :
    case 10 :
    case 11 :
        alert("Es otoño");
        break;
    default:
        alert("No es un mes valido");
        break;
}
