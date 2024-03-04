const ip = 'https://65dee12cff5e305f32a0bfb3.mockapi.io/';

// Verificar si el usuario está autenticado al cargar la página
window.addEventListener("DOMContentLoaded", function() {
    // Obtener el token de inicio de sesión almacenado en Local Storage
    const token = localStorage.getItem("token");

    // Si no hay token, redirigir al usuario a la página de inicio de sesión
    if (!token) {
        window.location.href = "login.html";
    }
});

// customFetch('DELETE', 'profesores', {id: 3})

async function customFetch(method, endpoint, params=null, body=null) {
    // Obtener el token de localStorage
    const token = localStorage.getItem("token");
    // Crear los headers con el token de autorización
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    // Configurar la solicitud fetch
    const requestOptions = {
        method: method,
        headers: myHeaders,
        redirect: 'follow'
    };
    // Validar que el parámetro 'endpoint' esté presente
    if (!endpoint) {
        throw new Error("El parámetro 'endpoint' es obligatorio.");
    }
    // Construir la URL con el endpoint
    let url = ip +'?endpoint=' + encodeURIComponent(endpoint);
    // Si hay parámetros adicionales, añadirlos a la URL
    if (params) {
        url += '&' + new URLSearchParams(params);
    }
    // Si hay un cuerpo, añadirlo a la solicitud
    if (body) {
        requestOptions.body = JSON.stringify(body);
    }
    // Realizar la solicitud fetch
    return fetch(url, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('Error:', error));
}


// // Ejemplo de uso
// customFetch('GET', 'example_endpoint', { page: 1 })
// .then(data => console.log(data))
// .catch(error => console.error('Hubo un error:', error));