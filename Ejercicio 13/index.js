let precio = prompt("Ingrese cuanto gasto:");
precio = parseInt(precio);

switch (true) {
    case precio < 100:
        alert("No tienes descuento");
        break;
    case precio >= 100 && precio < 300:
        alert("Tienes un descuento del 5%, tu nuevo precio es de: " + precio * 0.95);
        break;
    case precio >= 300 && precio < 500:
        alert("Tienes un descuento del 10% tu nuevo precio es de: " + precio * 0.9);
        break;
    case precio >= 500:
        alert("Tienes un descuento del 15% tu nuevo precio es de: " + precio * 0.85);
        break;
    default:
        alert("No es un numero");
        break;
}
