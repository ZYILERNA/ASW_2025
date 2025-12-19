// 1️⃣ Definición y Acceso
console.log("\n--- 1️⃣ Definición y Acceso ---");
let datosUsuario = ["Pepe", 8, true];
console.log("Array completo:", datosUsuario);
console.log("Segundo elemento (índice 1):", datosUsuario[1]);
console.log("Número de elementos:", datosUsuario.length);

// 2️⃣ Manipulación básica
console.log("\n--- 2️⃣ Manipulación del array ---");

// Añadir al final
let longitudPush = datosUsuario.push("hola", "adios", "años");
console.log("Después de push('hola', 'adios', 'años'):", datosUsuario);
console.log("Nueva longitud devuelta por push():", longitudPush);

// Eliminar último elemento
let elementoPop = datosUsuario.pop();
console.log("Elemento eliminado con pop():", elementoPop);
console.log("Array ahora:", datosUsuario);

// Eliminar elemento específico ("años")
let index = datosUsuario.indexOf("años");
if (index !== -1) {
    let arrayEliminado = datosUsuario.splice(index, 1);
    console.log("Elemento eliminado con splice():", arrayEliminado[0]);
}
console.log("Array ahora:", datosUsuario);

// Añadir al principio
let longitudUnshift = datosUsuario.unshift("primero");
console.log("Después de unshift('primero'):", datosUsuario);
console.log("Nueva longitud devuelta por unshift():", longitudUnshift);

// Eliminar del principio
let elementoShift = datosUsuario.shift();
console.log("Elemento eliminado con shift():", elementoShift);
console.log("Array final tras shift():", datosUsuario);

// Mostrar todos los elementos uno por uno
console.log("\nRecorriendo datosUsuario:");
for (let i = 0; i < datosUsuario.length; i++) {
    console.log(`Elemento ${i}:`, datosUsuario[i]);
}

// 3️⃣ Concatenación
console.log("\n--- 3️⃣ Concatenación ---");
let arrayExtra = ["nuevo1", "nuevo2", "nuevo3"];
let arrayTotal = datosUsuario.concat(arrayExtra);
console.log("Array original:", datosUsuario);
console.log("Array extra:", arrayExtra);
console.log("Array total (concatenado):", arrayTotal);

// 4️⃣ Ordenación de números
console.log("\n--- 4️⃣ Ordenación de números ---");
let numeros = [10, 2, 30, 25, 1];
console.log("Array original:", numeros);

// Orden simple
console.log("Array con sort() sin función:", numeros.sort());

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log("Orden ascendente:", numeros);

// Orden descendente
numeros.sort((a, b) => b - a);
console.log("Orden descendente:", numeros);

// 5️⃣ Modificación de contenido
console.log("\n--- 5️⃣ Modificación con splice() ---");
console.log("Array total antes:", arrayTotal);
arrayTotal.splice(2, 2, "insertado1", "insertado2");
console.log("Array total después de splice():", arrayTotal);

// 6️⃣ Conversión de tipos
console.log("\n--- 6️⃣ Conversión de tipos ---");
let miCadena = "123.45";
let otraCadena = "Hola Mundo";

console.log("miCadena:", miCadena);
console.log("otraCadena:", otraCadena);

// isNaN
console.log("\nComprobando isNaN():");
console.log(`isNaN(miCadena):`, isNaN(miCadena));
console.log(`isNaN(otraCadena):`, isNaN(otraCadena));

// parseInt y parseFloat
console.log("\nUsando parseInt() y parseFloat():");
console.log(`parseInt("${miCadena}") =>`, parseInt(miCadena));
console.log(`parseFloat("${miCadena}") =>`, parseFloat(miCadena));

// String y Number
let numero = 789;
console.log("\nConversión de tipos:");
console.log(`String(${numero}) =>`, String(numero), "Tipo:", typeof String(numero));
console.log(`Number("${miCadena}") =>`, Number(miCadena), "Tipo:", typeof Number(miCadena));
