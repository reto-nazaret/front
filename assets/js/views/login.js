
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Obtener valores de nombre de usuario y contraseña
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar que se ingresaron nombre de usuario y contraseña
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    //A borrar 
    console.log("iniciado session");
    localStorage.setItem("token", "testToken");
    // Redirigir a la página principal (Dashboard)
    window.location.href = "index.html";
    // end aborrar



    // Realizar la solicitud a la API de inicio de sesión
    // fetch("http://localhost/nz_proyecto_test/testApi/?endpoint=login", requestOptions)
    //     .then((response) => response.json())
    //     .then((result) => {
    //         if (result.token) {

    //         //AQUI HAY QUE GUARDAR LOS DATOS DEL USUARIO A PARTIR DE LLAMAR A guardarDatosUsuario DEL HANDLElOCALSTOREAGE.JS ya esta.


    //             // Guardar el token en el almacenamiento local del navegador
    //             localStorage.setItem("token", result.token);
    //             // Redirigir a la página principal (Dashboard)
    //             window.location.href = "dashboard.html";
    //         } else {
    //             // Mostrar alerta si el inicio de sesión no tiene éxito
    //             alert("Invalid username or password.");
    //         }
    //     })
    //     .catch((error) => console.error("Error:", error));
});
