const body = document.getElementById("main-body");

body.addEventListener("keydown", function (e) {
    console.log("EVENTO DE TECLADO DETECTADO");
    console.log("Tipo de evento:", e.type);
    console.log("Tecla pulsada:", e.key);
    console.log("ℹ El navegador envía automáticamente un objeto KeyboardEvent al callback.");
});

const textarea = document.getElementById("campo-texto");

textarea.addEventListener("keydown", function (e) {
    console.log("Intento de escritura en el textarea");
    console.log("Tecla detectada:", e.key);
    if (!isNaN(e.key) && e.key !== " ") {
        console.log("Tecla no permitida (número)");
        console.log("Se ejecuta preventDefault() para evitar la acción por defecto.");

        e.preventDefault();
        alert("No se permiten números en este campo");
    } else {
        console.log("Tecla permitida");
        console.log("ℹ El carácter se escribirá normalmente en el textarea.");
    }
});