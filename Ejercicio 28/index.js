let menu = prompt("Ingrese el numero de la opcion que desea realizar: \n 1. mm a m \n 2. cm a m \n 3. m a cm  \n 4. m a mm ");
let numero = prompt("Ingrese el numero que desea convertir");
menu = parseInt(menu);
numero = parseInt(numero);

function convertirUnidades(numero, menu){
    let resultado;
    if(menu == 1){
        resultado = numero / 1000;
        alert("El resultado es: " + resultado + " m");
    }else if(menu == 2){
        resultado = numero / 100;
        alert("El resultado es: " + resultado + " m");
    }else if(menu == 3){
        resultado = numero * 100;
        alert("El resultado es: " + resultado + " cm");
    }else if(menu == 4){
        resultado = numero * 1000;
        alert("El resultado es: " + resultado + " mm");
    }else{
        alert("Opcion incorrecta");
    }
}

convertirUnidades(numero, menu);
