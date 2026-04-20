const form = document.getElementById('formulario-inscripcion');

form.addEventListener('submit', function(event) {
    const nombre     = document.getElementById('nombre').value.trim();
    const email      = document.getElementById('email').value.trim();
    const contrasena = document.getElementById('contrasena').value;
    const lenguaje   = document.getElementById('lenguaje').value;
    const motivacion = document.getElementById('motivacion').value.trim();

    if (contrasena.length < 8) {
        alert('Error: la contraseña debe tener al menos 8 caracteres.');
        event.preventDefault();
        return;
    }

    console.log('--- Nueva inscripción recibida ---');
    console.log('Nombre:     ' + nombre);
    console.log('Email:      ' + email);
    console.log('Lenguaje:   ' + lenguaje);
    console.log('Motivación: ' + motivacion);
    console.log('¡Bienvenido/a, ' + nombre + '! Tu inscripción se ha enviado correctamente.');
});
