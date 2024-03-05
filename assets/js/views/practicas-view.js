let data = [];

async function obtenerDatos() {
    
    return await customFetch("GET", "practicas")
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

let boton2 = function(cell, formatterParams){ //plain text value
    return "<button type='submit' class='btn btn-danger'>Eliminar</button>";
};

let selectedRowId = null;


function handleRowClick(e, row){
    selectedRowId = row.getData().id; 

    console.log("Selected Row ID:", selectedRowId);

    // Get the full pathname
    const pathname = window.location.pathname;

    // Split the pathname by '/'
    const pathSegments = pathname.split('/');

    // Get the first segment (excluding any empty segments)
    const firstSegment = pathSegments.find(segment => segment.trim() !== '');
console.log("First segment:", firstSegment);
    let filePath = `../../${firstSegment}/formularios/practicas/edit_practicas.html?id=${selectedRowId}`;    
    // let filePath = `/formularios/alumnos/edit_alumnos.html?id=${selectedRowId}`;    
console.log("filePath: ", filePath);
    let link = document.createElement('a');

    link.href = filePath;


    link.click();


}

obtenerDatos().then(() => {
    var table = new Tabulator("#example-table", {
        data: data.practicas,
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
            { title: "", formatter: boton, hozAlign: "center", cellClick: handleRowClick },
            { title: "", formatter: boton2, hozAlign: "center"}
        ],
    });
});