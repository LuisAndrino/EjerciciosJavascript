let color = prompt("Hay seis colores, adivina un color 👀: ");


if(color === "rojo" || color === "Rojo" || color === "anaranjado" || color ==="Anaranjado" ||
 color === "amarillo" || color === "Amarillo" || color === "verde" || color === "Verde" || 
  color === "celeste" || color === "Celeste" || color === "azul" || color === "Azul"){
    console.log("Adivinaste ✋, uno de los colores es: " + color);
    alert("Adivinaste ✋, uno de los colores es: " + color);
}else{
    console.log("Lo siento, no acertaste 😔");
    alert("Lo siento, no acertaste 😔");
}
