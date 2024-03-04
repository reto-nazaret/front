// Verificar si el usuario está autenticado al cargar la página
window.addEventListener("DOMContentLoaded", function() {
    // Obtener el token de inicio de sesión almacenado en Local Storage
    const token = localStorage.getItem("token");

    // IP
    const ip = 'https://65dee12cff5e305f32a0bfb3.mockapi.io/Profesores';

    // Si no hay token, redirigir al usuario a la página de inicio de sesión
    if (!token) {
        window.location.href = "login.html";
    }
});
