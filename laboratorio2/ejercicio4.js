console.log("Ancho de la ventana: " + window.innerWidth);
console.log("Alto de la ventana: " + window.innerHeight);

const nombre = prompt("¿Cuál es tu nombre?");
if (nombre) {
    document.getElementById("nombreUsuario").innerHTML = "Hola, " + nombre + "!";
} else {
    document.getElementById("nombreUsuario").innerHTML = "Hola, invitado!";
}

document.getElementById("abrirVentana").addEventListener("click", () => {
    let nuevaVentana = window.open("about:blank", "_blank", "width=600,height=400");
    if (nuevaVentana) {
        nuevaVentana.document.write("<h2>Ventana temporal</h2>");
        setTimeout(() => {
            const cerrar = confirm("¿Deseas cerrar la ventana recién abierta?");
            if (cerrar) {
                nuevaVentana.close();
            }
        }, 1000);
    } else {
        alert("El navegador bloqueó la ventana emergente.");
    }
});
