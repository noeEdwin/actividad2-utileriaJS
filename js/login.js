let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    // Cancela el envio normal y comienza la validación
    e.preventDefault();
    limpiarErrores();

    let correo = document.getElementById("loginCorreo").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (correo === "" || !validarCorreo(correo)) {
        mostrarError("loginCorreo", "Ingrese un correo válido.");
        return;
    }

    if (!validarPassword(password)) {
        mostrarError("loginPassword", "Mínimo 8 caracteres, mayúscula, minúscula, número y especial.");
        return;
    }

    window.location.href = "index.html";
});
