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


let boton = function(cell, formatterParams){ //plain text value
    return "<button type='submit' class='btn btn-primary'>Editar</button>";
};

let selectedRowId = null;


function handleRowClick(e, row){
    selectedRowId = row.getData().id; 

    console.log("Selected Row ID:", selectedRowId);

    let filePath = `../../formularios/contactos/edit_contactos.html?id=${selectedRowId}`; 
    
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
            { title: "NIF", field: "nif"},
            { title: "Nombre", field: "nombre"},
            { title: "Apellidos", field: "Apellidos"},
            { title: "Telefono", field: "telefono"},
            { title: "Tipo Entidad", field: "tipod_entidad"},
            { title: "Movil", field: "movil"},
            { title: "Email", field: "email"},
            { title: "FAX", field: "fax"},
            { title: "Departamento", field: "departamento"},
            { title: "Centro", field: "centro"},
            { title: "Responsable", field: "responsable"},
            { title: "Acciones", formatter: boton, hozAlign: "center", cellClick: handleRowClick}
            
        ],
    });
});