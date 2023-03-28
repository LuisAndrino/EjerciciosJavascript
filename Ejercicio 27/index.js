function numeroMayor(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        alert("El numero mayor es: " + num1);
        return num1;
    }else if(num2 > num1 && num2 > num3){
        alert("El numero mayor es: " + num2);
        return num2;
    }else{
        alert("El numero mayor es: " + num3);
        return num3;
    }
}

let numero1 = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
let numero3 = prompt("Ingrese el tercer numero");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

numeroMayor(numero1, numero2, numero3);