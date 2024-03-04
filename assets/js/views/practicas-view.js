let data = [];

function obtenerDatos() {
    return fetch('https://65dee12cff5e305f32a0bfb3.mockapi.io/Profesores')
        .then(response => response.json())
        .then(datos => {
            data = datos;
            console.log(data);
            return data;
        })
        .catch(error => console.error('Error:', error));
}


let boton = function (cell, formatterParams) { //plain text value
    return "<button type='submit' class='btn btn-primary'>Editar</button>";
};


let selectedRowId = null;


function handleRowClick(e, row) {
    selectedRowId = row.getData().id;

    console.log("Selected Row ID:", selectedRowId);

    console.log("Current URL:", window.location.href);
    console.log("Current Path:", window.location.pathname);

    let filePath = `../../formularios/practicas/edit_practicas.html?id=${selectedRowId}`;

    let link = document.createElement('a');

    link.href = filePath;

    link.target = '_blank';   //Posibilidad de abrir en nueva pestaña.

    link.click();

}


obtenerDatos().then(() => {
    var table = new Tabulator("#example-table", {
        data: data,
        layout: "fitColumns",
        pagination: "local",
        paginationSize: 10,
        paginationSizeSelector: [10, 25, 50],
        movableColumns: true,
        paginationCounter: "rows",
        columns: [
            { title: "", field: "id", width: 90 },
            { title: "Alumno", field: "alumno" },
            { title: "Centro de Trabajo", field: "centro_trabajo" },
            { title: "Responsable", field: "responsable" },
            { title: "Tutor", field: "tutor" },
            { title: "Tipo de Practica", field: "tipo_pracitca" },
            { title: "Fecha Inicio", field: "fecha_inicio" },
            { title: "Fecha Fin", field: "fecha_fin" },
            { title: "Acciones", formatter: boton, hozAlign: "center", cellClick: handleRowClick }
        ],
    });
});