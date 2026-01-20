const boton = document.getElementById("btn-multi");

function accionUno() {
    console.log("Esta función es el primer callback registrado con addEventListener.");
}

function accionDos() {  
    console.log("Esta es una segunda función distinta que se ejecuta sin sobrescribir a la anterior.");
}

console.log("Registrando dos eventos 'click' sobre el mismo botón.");

boton.addEventListener("click", accionUno);
boton.addEventListener("click", accionDos);
