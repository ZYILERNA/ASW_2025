// ============ EJERCICIO 1 ============
console.log("\n==============================");
console.log("=== EJERCICIO 1: BASE VEHÍCULO ===");
console.log("==============================\n");

class Vehiculo {
    #velocidad = 0;
    #estadoMotor = "apagado";

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        console.log(`Nuevo Vehículo creado → ${marca} ${modelo}`);
    }

    encenderMotor() {
        console.log("\n--- Encendiendo Motor ---");
        console.log("Estado PREVIO del motor:", this.#estadoMotor);
        this.#estadoMotor = "encendido";
        console.log("Estado POSTERIOR del motor:", this.#estadoMotor);
        console.log("--------------------------\n");
    }

    acelerar(incremento) {
        console.log("\n--- Acelerando Vehículo ---");
        console.log("Velocidad PREVIA:", this.#velocidad);
        this.#velocidad += incremento;
        console.log("Velocidad POSTERIOR:", this.#velocidad);
        console.log("-----------------------------\n");
    }
}


// ============ EJERCICIO 2 ============
console.log("\n==============================");
console.log("=== EJERCICIO 2: HERENCIA ===");
console.log("==============================\n");

class Coche extends Vehiculo {
    constructor(marca, modelo, numPuertas) {
        super(marca, modelo);
        this.numPuertas = numPuertas;
        console.log(`Coche creado con ${numPuertas} puertas.`);
    }

    // ============ EJERCICIO 3 ============
    acelerar(incremento) {
        console.log("\n>>> Acelerando COCHE");
        super.acelerar(incremento);
        console.log("Este coche usa energía del motor para acelerar.");
        console.log("<<< Fin aceleración COCHE\n");
    }

    mostrarInformacion() {
        console.log("\n[INFO COCHE]");
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Número de puertas:", this.numPuertas);
        console.log("-------------------------\n");
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        console.log("Bicicleta creada.");
    }

    encenderMotor() {
        console.log("\n--- Intentando encender motor en Bicicleta ---");
        console.log("No hay motor en una bicicleta.");
        console.log("----------------------------------------------\n");
    }

    acelerar(incremento) {
        console.log("\n>>> Acelerando BICICLETA");
        super.acelerar(incremento);
        console.log("Acelera gracias a la fuerza humana.");
        console.log("<<< Fin aceleración BICICLETA\n");
    }

    mostrarInformacion() {
        console.log("\n[INFO BICICLETA]");
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("-----------------------------\n");
    }
}


// ============ EJERCICIO 4 ============
console.log("\n======================================");
console.log("=== EJERCICIO 4: FUNCIÓN POLIMÓRFICA ===");
console.log("======================================\n");

function inspeccionarVehiculo(vehiculo) {
    console.log("\n🔍 >>> INICIANDO INSPECCIÓN");
    console.log("─────────────────────────────");
    
    if (!vehiculo || typeof vehiculo.mostrarInformacion !== "function") {
        console.log("❌ ERROR: Este objeto NO tiene método mostrarInformacion()");
        console.log("─────────────────────────────");
        console.log("<<< FIN INSPECCIÓN\n");
        return;
    }
    
    vehiculo.mostrarInformacion();
    console.log("✓ Inspección completada");
    console.log("<<< FIN INSPECCIÓN\n");
}


// ============================================
// ==== PRUEBAS DEL LABORATORIO ====
// ============================================
console.log("║   INICIANDO PRUEBAS DEL LABORATORIO   ║");

// Crear instancias
console.log("📋 Paso 1: Creando vehículos...\n");
const bici1 = new Bicicleta("Trek", "Marlin 7", "montaña");
const coche1 = new Coche("Toyota", "Corolla", 4);

// Probar encendido de motor
console.log("\n📋 Paso 2: Probando encendido de motor...");
coche1.encenderMotor();
bici1.encenderMotor();

// Probar aceleración
console.log("\n📋 Paso 3: Probando aceleración...");
bici1.acelerar(15);  // Las bicis no necesitan motor
coche1.acelerar(30);

// Inspeccionar vehículos (polimorfismo)
console.log("\n📋 Paso 4: Inspeccionando vehículos...");
inspeccionarVehiculo(bici1);
inspeccionarVehiculo(coche1);

// Objeto compatible (duck typing)
console.log("\n📋 Paso 5: Probando con objeto no heredado...");
const objetoMisterioso = {
    tipo: "Patinete Eléctrico",
    mostrarInformacion() {
        console.log("OBJETO MISTERIOSO");
        console.log(`Tipo:    ${this.tipo}`);
        console.log("Mensaje: ¡Soy compatible con la interfaz!");
        console.log("─────────────────────────────\n");
    }
};

inspeccionarVehiculo(objetoMisterioso);

// Objeto NO compatible
console.log("\n📋 Paso 6: Probando con objeto incompatible...");
const objetoInvalido = { nombre: "No tengo mostrarInformacion" };
inspeccionarVehiculo(objetoInvalido);