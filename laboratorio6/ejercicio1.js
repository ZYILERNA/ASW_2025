// ============ EJERCICIO 1 ============
console.log("=== EJERCICIO 1 ===");
console.log("Lo que vamos a imprimir: Cookies y conversión a array");
console.log("");

// Crear cookies
document.cookie = "usuario=ana";
document.cookie = "idioma=es";
document.cookie = "tema=oscuro";

console.log("Todas las cookies:");
console.log(document.cookie);
console.log("");

// Línea que convierte document.cookie en array
console.log("Línea de código para convertir a array:");
console.log("const arrayCookies = document.cookie.split('; ');");
console.log("");

const arrayCookies = document.cookie.split('; ');

console.log("RESULTADO - Array de cookies:");
for (let cookie of arrayCookies) {
    let [name, value] = cookie.split('=');
    console.log(`${name}= ${value}`);
}
console.log("");


// ============ EJERCICIO 2 ============
// Esperar a que el DOM esté listo
window.addEventListener('load', function() {
    console.log("=== EJERCICIO 2 ===");
    console.log("Lo que vamos a imprimir: Valores y propiedades de elementos del formulario");
    console.log("");
    
    document.getElementById('formularioUsuario').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre');
        const fechaNacimiento = document.getElementById('fechaNacimiento');
        const pais = document.getElementById('pais');
        
        console.log("RESULTADO - Valores de los elementos:");
        console.log("");
        
        console.log("Input Nombre:");
        console.log("  value:", nombre.value);
        console.log("  id:", nombre.id);
        console.log("  type:", nombre.type);
        console.log("");
        
        console.log("Input Fecha:");
        console.log("  value:", fechaNacimiento.value);
        console.log("  id:", fechaNacimiento.id);
        console.log("  type:", fechaNacimiento.type);
        console.log("");
        
        console.log("Select País:");
        console.log("  value:", pais.value);
        console.log("  id:", pais.id);
        console.log("  selectedIndex:", pais.selectedIndex);
        console.log("");
    });
});


// ============ EJERCICIO 3 ============
window.addEventListener('load', function() {
    console.log("=== EJERCICIO 3 ===");
    console.log("Lo que vamos a imprimir: Creación y modificación de nodos DOM");
    console.log("");
    
    // 1. Crear nuevo nodo de elemento de lista
    const nuevoElemento = document.createElement('li');
    
    // 2. Asignar texto "Nuevo Mensaje"
    nuevoElemento.textContent = 'Nuevo Mensaje';
    
    // 3. Modificar contenido HTML del párrafo
    const parrafo = document.getElementById('mensaje');
    if (parrafo) {
        parrafo.innerHTML = nuevoElemento.outerHTML;
        console.log("RESULTADO:");
        console.log("Elemento <li> creado con texto: 'Nuevo Mensaje'");
        console.log("Contenido del párrafo ahora es:", parrafo.innerHTML);
        console.log("");
    }
});


// ============ EJERCICIO 4 ============
window.addEventListener('load', function() {
    console.log("=== EJERCICIO 4 ===");
    console.log("Lo que vamos a imprimir: Estado del radio button y color de fondo");
    console.log("");
    
    const radioButton = document.getElementById('acepto_condiciones');
    
    if (radioButton) {
        // Cargar estado guardado
        const estadoGuardado = localStorage.getItem('acepto_condiciones');
        
        if (estadoGuardado === 'true') {
            radioButton.checked = true;
            document.body.style.backgroundColor = 'lightgreen';
            console.log("RESULTADO: Condiciones ACEPTADAS - Fondo VERDE");
        } else {
            radioButton.checked = false;
            document.body.style.backgroundColor = 'lightcoral';
            console.log("RESULTADO: Condiciones NO ACEPTADAS - Fondo ROJO");
        }
        
        // Detectar cambios
        radioButton.addEventListener('change', function() {
            if (this.checked) {
                document.body.style.backgroundColor = 'lightgreen';
                localStorage.setItem('acepto_condiciones', 'true');
                console.log("RESULTADO: Usuario ACEPTÓ - Fondo VERDE");
            } else {
                document.body.style.backgroundColor = 'lightcoral';
                localStorage.setItem('acepto_condiciones', 'false');
                console.log("RESULTADO: Usuario NO ACEPTÓ - Fondo ROJO");
            }
            console.log("Estado guardado en localStorage");
        });
    }
});