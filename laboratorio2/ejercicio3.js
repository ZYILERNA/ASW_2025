// Función para calcular la edad
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesDiff = hoy.getMonth() - fechaNacimiento.getMonth();
    const diaDiff = hoy.getDate() - fechaNacimiento.getDate();

    // Ajustar si aún no ha cumplido años este año
    if (mesDiff < 0 || (mesDiff === 0 && diaDiff < 0)) {
        edad--;
    }
    return edad;
}

// Función para obtener el nombre del día de la semana
function nombreDiaSemana(fecha) {
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    return dias[fecha.getDay()];
}

// Evento del botón
document.getElementById("calcular").addEventListener("click", () => {
    const input = document.getElementById("fechaNacimiento").value.trim();
    const resultado = document.getElementById("resultado");

    // Validar formato DD/MM/AAAA
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    if (!regex.test(input)) {
        resultado.textContent = "Formato incorrecto. Usa DD/MM/AAAA.";
        return;
    }

    // Separar día, mes y año
    const partes = input.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // En JS los meses van de 0 a 11
    const anio = parseInt(partes[2], 10);

    const fechaNacimiento = new Date(anio, mes, dia);

    // Verificar fecha válida (ej: 31/02 no existe)
    if (fechaNacimiento.getDate() !== dia || fechaNacimiento.getMonth() !== mes || fechaNacimiento.getFullYear() !== anio) {
        resultado.textContent = "Fecha inválida.";
        return;
    }

    const edad = calcularEdad(fechaNacimiento);
    const diaSemana = nombreDiaSemana(fechaNacimiento);

    resultado.textContent = `Naciste el ${input}, tienes ${edad} años y naciste un ${diaSemana}.`;
});
