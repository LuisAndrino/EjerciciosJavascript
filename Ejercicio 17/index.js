let condicion = true;

let contraseña = prompt("Ingrese su contraseña");

while(condicion){
    let repeat = prompt("Ingrese su contraseña nuevamente");
    if(contraseña == repeat){
        condicion = false;
    }
    else{
        alert("Las contraseñas no coinciden, ingresalas nuevamente");
    }   
}