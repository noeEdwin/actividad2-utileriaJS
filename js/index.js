let form = document.getElementById("registrationForm");
let seccion = document.getElementById("registrationSection");
let modal = document.getElementById("ageModal");
let mensaje = document.getElementById("modalMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    limpiarErrores();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let fecha = document.getElementById("fechaNacimiento").value;
    let telefono = document.getElementById("telefono").value.trim();
    let password = document.getElementById("password").value;
    let confirmar = document.getElementById("confirmPassword").value;

    if (nombre === "" || !soloLetras(nombre)) {
        mostrarError("nombre", "Ingrese un nombre válido (solo letras).");
        return;
    }

    if (correo === "" || !validarCorreo(correo)) {
        mostrarError("correo", "Ingrese un correo válido.");
        return;
    }

    if (fecha === "" || calcularEdad(fecha) === 0) {
        mostrarError("fechaNacimiento", "Ingrese una fecha válida.");
        return;
    }

    if (!validarTelefono(telefono)) {
        mostrarError("telefono", "Ingrese un teléfono válido (10 dígitos).");
        return;
    }

    if (!validarPassword(password)) {
        mostrarError("password", "Mínimo 8 caracteres, mayúscula, minúscula, número y especial.");
        return;
    }

    if (password !== confirmar) {
        mostrarError("confirmPassword", "Las contraseñas no coinciden.");
        return;
    }

    mostrarModal(nombre, fecha);
});

function mostrarModal(nombre, fecha) {
    let nombreFormateado = formatearNombrePropio(nombre);
    let edad = calcularEdad(fecha);
    let esMayor = esMayorDeEdad(fecha);

    mensaje.innerHTML =
        "¡Hola <strong>" + nombreFormateado + "</strong>!<br><br>" +
        "Tu edad es: <strong>" + edad + " años</strong><br><br>" +
        (esMayor ? "Eres mayor de edad." : "Eres menor de edad.");

    seccion.style.display = "none";
    modal.classList.add("active");
}

document.getElementById("closeModal").addEventListener("click", function () {
    modal.classList.remove("active");
    form.reset();
    seccion.style.display = "block";
});
