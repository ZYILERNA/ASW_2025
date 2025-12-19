console.log("1. Ejercicios con Matrices (Array de Arrays)");

console.log("1.1creación de una matriz")
let inventario = [
    ["Manzanas", 50, 2],
    ["Platanos", 100, 4],
    ["Naranjas", 200, 1],
];

console.log("1.2. Acceso y Modificación Matricial")
console.log(inventario[1][2]); // precio de "Platanos"

const totalfilas = inventario.length;
const primerafilaelement = inventario[0].length;

console.log("Número total de filas:", totalfilas);
console.log("Número de elementos en la primera fila:", primerafilaelement);

console.log("1.3 Recorrido simple")
for (let i = 0; i < inventario.length; i++) {
    console.log("Elemento "+i+": " + inventario[i][0]);
}
 
console.log("2. Ejercicios con Funciones (4 puntos)");
console.log("2.1. Función para Cálculo de Inventario (2 puntos)");

function calcularValorTotal(matriz) {
let sumatotal = 0;
for (let i = 0; i < matriz.length; i++) {
    let calculo = (matriz[i][1]*matriz[i][2]);
    sumatotal += calculo;
}
console.log(sumatotal);
};

calcularValorTotal(inventario);

console.log("2.2. Uso de Funciones Anónimas:");

console.log("2.2. Uso de Funciones Anónimas:");

// Definimos la variable con una función anónima para ordenar por el precio (columna 2)
/*a y b son dos filas (subarrays) del inventario.

a[2] y b[2] acceden al precio de cada producto.

La función a[2] - b[2] devuelve un número negativo, cero o positivo, y sort() usa ese resultado para ordenarlos.
*/

let ordenarPorPrecio = function(a, b) {
    return [2] - b[2];
};

inventario.sort(ordenarPorPrecio);

console.log("Inventario ordenado por precio (ascendente):");
for (let i = 0; i < inventario.length; i++) {
    console.log(inventario[i][0] + " - Precio: " + inventario[i][2]);
}

console.log("3. Ejercicios con Prototype");

console.log("3.1. Adición de un Método al Prototype");

// Añadimos un nuevo método al prototipo de Array
Array.prototype.obtenerUltimoElemento = function() {
    // 'this' hace referencia al array que invoca el método
    return this[this.length - 1];
};

// Explicación por consola
console.log("El método obtenerUltimoElemento usa 'this' para acceder al array que lo llama.");
console.log("Por ejemplo, si lo llamamos con miArray.obtenerUltimoElemento(), 'this' será miArray.");

console.log("3.2. Verificación del Nuevo Método");

// Creamos un array de prueba
let frutas = ["Manzana", "Pera", "Plátano", "Naranja"];

// Invocamos el nuevo método
let ultimo = frutas.obtenerUltimoElemento();

console.log("Último elemento del array:", ultimo);
console.log("Array original:", frutas);
console.log("Longitud del array original:", frutas.length);

// Comprobamos que no se ha modificado
console.log("¿El array ha cambiado? ->", frutas.length === 4 ? "No, sigue igual" : "Sí, se modificó");

if(frutas.length === 4) {
    console.log("El array ha cambiado");
}
else {
    console.log("El array no ha cambiado");
}
