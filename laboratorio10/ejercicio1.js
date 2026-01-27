// ===== EJERCICIO 1 =====
const boton = document.getElementById("test-click");

const eventos = ["mousedown", "mouseup", "click", "dblclick"];

eventos.forEach(evento => {
  boton.addEventListener(evento, () => {
    console.log(evento);
  });
});

// ===== EJERCICIO 2 =====
document.getElementById("padre").addEventListener("click", () => {
  console.log("Click en el Padre (section)");
});

document.getElementById("hijo").addEventListener("click", () => {
  console.log("Click en el Hijo (div)");
});

// ===== EJERCICIO 3 =====
document.getElementById("boton-central").addEventListener("click", (e) => {
  console.log("Click en el Botón");
  e.stopPropagation();
});
