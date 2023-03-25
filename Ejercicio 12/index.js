let eleccion = prompt("Ingrese una opción: carne, pescado o verduras");

switch (eleccion) {
    case "carne":
        alert("Elegiste carne, dejame recomendarte vino tinto como bebida");
        break;
    case "pescado":
        alert("Elegiste pescado, dejame recomendarte vino blanco como bebida");
        break;
    case "verduras":
        alert("Elegiste verduras, dejame recomendarte agua como bebida");
        break;
    default:
        alert("No elegiste una opción válida, elige entre carne, pescado o verduras");
        break;
}