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

    let filePath = `../../formularios/empresas/edit_empresas.html?id=${selectedRowId}`; 
    
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
            { title: "Pais", field: "pais"},
            { title: "Razon Social", field: "razonSocial"},
            { title: "Titularidad", field: "titularidad"},
            { title: "Tipo Entidad", field: "tipod_entidad"},
            { title: "Otra Titulacion", field: "otra_titulacion"},
            { title: "Territorio", field: "territorio"},
            { title: "Municipio", field: "municipio"},
            { title: "Direccion", field: "direccion"},
            { title: "Codigo Postal", field: "codigo_postal"},
            { title: "Telefono", field: "telefono"},
            { title: "FAX", field: "fax"},
            { title: "CNAE", field: "cnae"},
            { title: "Numero Trabajadores", field: "numero_trabajadores"},
            { title: "Acciones", formatter: boton, hozAlign: "center", cellClick: handleRowClick}
        ],
    });
});