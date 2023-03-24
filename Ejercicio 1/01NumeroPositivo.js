

let num = prompt("Ingrese un numero");
num = parseInt(num)
let answer;

if(typeof num == "number"){
    if(num >= 0 ){
        answer = "El numero es positivo";
        alert(answer)
        console.log(answer)
    }else if(num < 0){
        answer = "El numero es negativo";
        alert(answer)
        console.log(answer)
    }
} else {
    console.log("Eso no es un numero");
    alert("Eso no es un numero")
}

