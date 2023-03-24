let metodoDeViaje = prompt("Escoja un metodo de viaje");

if(metodoDeViaje == "auto" || metodoDeViaje == "tren" || metodoDeViaje == "autobus" || metodoDeViaje
 == "motocicleta" || metodoDeViaje == "bicicleta"){
    alert("Buen viaje en " + metodoDeViaje)
    if(metodoDeViaje == "tren" || metodoDeViaje == "autobus"){
        let recordatorio = "Recuerda llevar dinero";
        alert(recordatorio);
        console.log(recordatorio)
    }
}else{
    alert("Ese no es un metodo de viaje valido");
 }