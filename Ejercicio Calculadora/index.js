const miDisplay = document.querySelector(".parrafo");
let encendido = false;

const boton = document.querySelector(".on");
boton.addEventListener('click', function(){
    boton.classList.toggle("encendido")
    miDisplay.textContent = "";
})


function encender(){
    encendido = !encendido;
    console.log("Hol")
    console.log(encendido)
}

function boton1(){
    if(encendido == true){
        miDisplay.textContent += "1";
    } else {
        alert("La calculadora esta apagada");
    }
}

function boton2(){
    if(encendido == true){
        miDisplay.textContent += "2";
    } else {
        alert("La calculadora esta apagada");
    }
}

function boton3(){
    if(encendido == true){
        miDisplay.textContent += "3";
    } else {
        alert("La calculadora esta apagada");
    }

}

function boton4(){
    if(encendido == true){
        miDisplay.textContent += "4"
    } else {
        alert("La calculadora esta apagada");
    }

}

function boton5(){
    if(encendido == true){
        miDisplay.textContent += "5";
    } else {
        alert("La calculadora esta apagada");
    }

}

function boton6(){
    if(encendido == true){
        miDisplay.textContent += "6";
    } else {
        alert("La calculadora esta apagada");
    }

}

function boton7(){
    if(encendido == true){
        miDisplay.textContent += "7";
    } else {
        alert("La calculadora esta apagada");
    }

}

function boton8(){
    if(encendido == true){
        miDisplay.textContent += "8";
    } else {
        alert("La calculadora esta apagada");
    }

}

function boton9(){
    if(encendido == true){
        miDisplay.textContent += "9";
    } else {
        alert("La calculadora esta apagada");
    }

}

function boton0(){
    if(encendido == true){
        miDisplay.textContent += "0";
    } else {
        alert("La calculadora esta apagada");
    }

}

function botonplus(){
    if(encendido == true){
        miDisplay.textContent += "+";
    } else {
        alert("La calculadora esta apagada");
    }

}

function botonmin(){
    if(encendido == true){
        miDisplay.textContent += "-";
    } else {
        alert("La calculadora esta apagada");
    }

}

function botonmul(){
    if(encendido == true){
        miDisplay.textContent += "*";
    } else {
        alert("La calculadora esta apagada");
    }

}

function botondiv(){
    if(encendido == true){
        miDisplay.textContent += "/";
    } else {
        alert("La calculadora esta apagada");
    }

}

function resultado(){
    if(encendido == true){
        const resultado = eval(miDisplay.textContent)
        miDisplay.textContent = resultado;
    } else {
        alert("La calculadora esta apagada");
    }

}

function botonClear(){
    if(encendido == true){
        miDisplay.textContent = "";
        console.log("Hola");
    } else {
        alert("La calculadora esta apagada");
    }
}

function botonBorrar (){
    if(encendido == true){
        miDisplay.textContent = miDisplay.textContent.slice(0, -1);
    } else {
        alert("La calculadora esta apagada");
    }


}
