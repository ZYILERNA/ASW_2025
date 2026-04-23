// ── Contador dinámico del textarea ──────────────────────────────────────────
const textarea  = document.getElementById('motivacion');
const contador  = document.getElementById('contador');
const MAX_CHARS = parseInt(textarea.getAttribute('maxlength'), 10);

textarea.addEventListener('input', function () {
    const restantes = MAX_CHARS - textarea.value.length;
    contador.textContent = textarea.value.length + ' / ' + MAX_CHARS;

    if (restantes < 20) {
        contador.classList.add('aviso');
    } else {
        contador.classList.remove('aviso');
    }
});

// ── Validación en el envío ───────────────────────────────────────────────────
const form = document.getElementById('formulario-inscripcion');

form.addEventListener('submit', function (event) {
    const nombre     = document.getElementById('nombre').value.trim();
    const email      = document.getElementById('email').value.trim();
    const pwd        = document.getElementById('contrasena').value;
    const lenguaje   = document.getElementById('lenguaje').value;
    const motivacion = textarea.value.trim();

    // 3.2 — El nombre debe empezar por mayúscula y contener solo letras y espacios
    const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/;
    if (!regexNombre.test(nombre)) {
        alert('El nombre debe empezar por una letra mayúscula y contener solo letras y espacios.');
        event.preventDefault();
        return;
    }

    // 3.1 — Validar formato de email con regex propia
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!regexEmail.test(email)) {
        alert('El formato del correo electrónico no es válido.');
        event.preventDefault();
        return;
    }

    // 3.3 — Validar fortaleza de la contraseña
    if (pwd.length < 8) {
        alert('La contraseña debe tener mínimo 8 caracteres.');
        event.preventDefault();
    } else if (!/[A-Z]/.test(pwd)) {
        alert('Debe incluir al menos una mayúscula.');
        event.preventDefault();
    } else if (!/[a-z]/.test(pwd)) {
        alert('Debe incluir al menos una minúscula.');
        event.preventDefault();
    } else if (!/[0-9]/.test(pwd)) {
        alert('Debe incluir al menos un número.');
        event.preventDefault();
    } else {
        // Todo correcto
        console.log('--- Nueva inscripción recibida ---');
        console.log('Nombre:     ' + nombre);
        console.log('Email:      ' + email);
        console.log('Lenguaje:   ' + lenguaje);
        console.log('Motivación: ' + motivacion);
        console.log('¡Bienvenido/a, ' + nombre + '! Tu inscripción se ha enviado correctamente.');
    }
});
