INSTITUTO TECNOLÓGICO NACIONAL DE MÉXICO

INSTITUTO TECNOLÓGICO DE OAXACA

**Carrera:** Ingeniería en Sistemas Computacionales

**Materia:** Programación Web

**Unidad:** Unidad 2

**Docente:** Adelina Martínez Nieto

**Alumno:** Sánchez Chávez Edwin Noé

**Hora:** 10:00 - 1:00

**Fecha de entrega:** 04 de julio del 2026

---

# Utilería — Librería de Validación y Utilidades JavaScript

---

## ¿Qué problema resuelve?

Todo el tiempo se tienen problemas, no importa si es hoy, mañana o ayer, es una constante, pero con eso llega otra cuestión, todos tienen problemas, y es aquí donde entra una pregunta. ¿Alguien ya tuvo este problema? Probablemente si y eso es lo que se busca hacer con utileria.js, ayudar a no reinventar la rueda y que simplemente la puedan usar.

**Utilería** resuelve esto ofreciendo una colección de funciones puras de JavaScript que pueden incluirse en cualquier proyecto web para:

- Validar formatos de correo electrónico y contraseñas seguras
- Verificar que campos contengan solo letras o tengan una longitud máxima
- Calcular edad a partir de una fecha de nacimiento y determinar si alguien es mayor de edad
- Formatear textos (nombres propios) y validar teléfonos

---

## Estructura del Repositorio

```
utileria/
├── README.md
├── index.html          ← Formulario de registro + modal
├── login.html          ← Página de inicio de sesión
├── css/
│   └── styles.css      ← Estilos para formularios y modal
└── js/
    ├── utileria.js     ← Librería de funciones JavaScript
    ├── index.js        ← Lógica del formulario de registro
    └── login.js        ← Lógica del formulario de login
```

---

## Instalación

No se necesitan gestores de paquetes ni herramientas de compilación. Solo copia el archivo `utileria.js` en tu proyecto y enlázalo en tu HTML:

```html
<script src="js/utileria.js"></script>
```
---

## Funciones y resultados

### 1. `validarCorreo(correo) → boolean`

Valida que una cadena tenga formato de correo electrónico válido.

```js
validarCorreo("usuario@ejemplo.com");     // true
validarCorreo("nombre.apellido@dom.com"); // true
validarCorreo("user+tag@domain.org");     // true

validarCorreo("invalido");                // false
validarCorreo("@sin-usuario.com");        // false
validarCorreo("sin-dominio@");            // false
validarCorreo("");                        // false
```

---

### 2. `soloLetras(texto) → boolean`

Verifica que una cadena contenga solo letras (mayúsculas, minúsculas) y espacios. Acepta vocales acentuadas y ñ.

```js
soloLetras("María José García");  // true
soloLetras("ANA");                // true
soloLetras("ñandú");              // true
soloLetras("José");               // true

soloLetras("Ana123");             // false
soloLetras("María José 2");       // false
soloLetras("texto-con-guiones");  // false
```

---

### 3. `validarLongitud(numero, maxLongitud) → boolean`

Valida que la representación en cadena de un número no exceda una longitud máxima de dígitos.

```js
validarLongitud(1234567890, 10);   // true  → 10 dígitos
validarLongitud(12345, 10);        // true  → 5 dígitos
validarLongitud(12345678901, 10);  // false → 11 dígitos

validarLongitud(5551234, 7);       // true
validarLongitud(5551234567, 10);   // true
```

---

### 4. `calcularEdad(fechaNacimiento) → number`

Calcula la edad en años cumplidos a partir de una fecha de nacimiento en formato `"YYYY-MM-DD"`.

```js
calcularEdad("2000-01-01");  // 26 
calcularEdad("1990-06-15");  // 36
calcularEdad("2010-12-25");  // 15
calcularEdad("");            // 0
```

---

### 5. `esMayorDeEdad(fechaNacimiento) → boolean`

Determina si una persona tiene 18 años o más.

```js
esMayorDeEdad("2000-01-01");  // true  → tiene 26 años
esMayorDeEdad("2010-06-20");  // false → tiene 16 años
esMayorDeEdad("2007-07-04");  // true  → tiene 18 años

// Uso en un formulario
if (!esMayorDeEdad(fechaNacimiento)) {
    alert("Debe ser mayor de edad para registrarse.");
}
```

---

### 6. `validarPassword(password) → boolean`

Valida que una contraseña cumpla con los requisitos de seguridad:
- Mínimo 8 caracteres
- Al menos una letra mayúscula (A-Z)
- Al menos una letra minúscula (a-z)
- Al menos un número (0-9)
- Al menos un carácter especial (!@#$%^&*...)

```js
validarPassword("MiClave@123");   // true
validarPassword("Segura#2024");   // true
validarPassword("Ab1@cdef");      // true

validarPassword("clave");         // false → sin mayúscula, número, especial
validarPassword("MINUSCULA1!");   // false → sin minúscula
validarPassword("12345678");      // false → sin letras
validarPassword("Cort1@");        // false → menos de 8 caracteres
```

---

## Funciones Adicionales

### 7. `validarTelefono(telefono) → boolean`

Valida que un número de teléfono tenga exactamente 10 dígitos. Elimina espacios, guiones y paréntesis antes de validar.

```js
validarTelefono("5551234567");      // true
validarTelefono("(555) 123-4567");  // true
validarTelefono("555 123 4567");    // true

validarTelefono("123");             // false → muy corto
validarTelefono("abcdefghij");      // false → letras
validarTelefono("12345678901");     // false → 11 dígitos
```

---

### 8. `formatearNombrePropio(texto) → string`

Convierte una cadena a formato de nombre propio: primera letra de cada palabra en mayúscula, el resto en minúscula.

```js
formatearNombrePropio("MARÍA JOSÉ GARCÍA");      // "María José García"
formatearNombrePropio("pepe perez");              // "Pepe Perez"
formatearNombrePropio("EDWIN SÁNCHEZ");           // "Edwin Sánchez"
formatearNombrePropio("peter parker");    // "Peter Parker"
```

---

## Funciones de Utilidad 

### 9. `mostrarError(campo, mensaje)`

Muestra un mensaje de error debajo de un campo del formulario y resalta el borde.

```js
mostrarError("correo", "Ingrese un correo válido.");
mostrarError("password", "Mínimo 8 caracteres.");
```

### 10. `limpiarErrores()`

Limpia todos los mensajes de error del formulario y quita el resaltado de los campos.

```js
limpiarErrores(); // Limpia todos los errores visibles
```

---

## Integración en el Proyecto

### Formulario de Registro (`index.html`)

El formulario valida nombre, correo, fecha de nacimiento, teléfono y contraseña usando las funciones de la librería.

```html
<form id="registrationForm" novalidate>
    <input type="text" id="nombre" />
    <span class="error-message" id="errorNombre"></span>

    <input type="email" id="correo" />
    <span class="error-message" id="errorCorreo"></span>

    <input type="date" id="fechaNacimiento" />
    <span class="error-message" id="errorFechaNacimiento"></span>

    <input type="tel" id="telefono" />
    <span class="error-message" id="errorTelefono"></span>

    <input type="password" id="password" />
    <span class="error-message" id="errorPassword"></span>

    <input type="password" id="confirmPassword" />
    <span class="error-message" id="errorConfirmPassword"></span>

    <button type="submit">Registrarse</button>
</form>
```

```js
// Validación del formulario de registro
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

    // Si todo es válido, mostrar modal con edad calculada
    mostrarModal(nombre, fecha);
});
```

---

### Modal con Edad Calculada

Al enviar el formulario exitosamente, se muestra un modal con la edad calculada y si es mayor de edad.

```js
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
```

---

### Inicio de Sesión (`login.html`)

El login valida correo y contraseña usando `validarCorreo()` y `validarPassword()`.

```html
<form id="loginForm" novalidate>
    <input type="email" id="loginCorreo" />
    <span class="error-message" id="errorLoginCorreo"></span>

    <input type="password" id="loginPassword" />
    <span class="error-message" id="errorLoginPassword"></span>

    <button type="submit">Entrar</button>
</form>
```

```js
// Validación del login
loginForm.addEventListener("submit", function (e) {
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

    // Si es válido, redirigir al index 
    window.location.href = "index.html";
});
```

---

## Tecnologías

- **HTML5** — Estructura semántica
- **CSS3** — Flexbox, animaciones, diseño responsivo
- **JavaScript vanilla** — Sin frameworks, sin dependencias externas

---

## Autor

**Sánchez Chávez Edwin Noé**

Librería de utilería JavaScript
