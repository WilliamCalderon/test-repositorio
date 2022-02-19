
$(document).ready(function() {
    $('#table-unidad-medida').DataTable();
});

$('#btn_agregar_dependencia').bind('click', async e => {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }
    var ajaxcontent = document.createElement('div');
    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
        url: site +"/ModalDependencia/0"
    });

    ajaxcontent.innerHTML += html;
    $('#cuerpo-content').append(ajaxcontent);
    $("body").dynamicSpinnerDestroy({});
    $("#modalDependencia").modal("show");

});

async function EditarDependencia(id_dependencia){
    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
        url: site +"/ModalDependencia/"+id_dependencia
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "GET",
        async: true,
        url: site + "/getDependencia/" + id_dependencia,
        success: function(respuesta) {
            $("body").dynamicSpinnerDestroy({});

            var datos = JSON.parse( respuesta );

            $('#tbx_nombre_dependencia').val(datos.nombre_dependencia);
            $('#ddl_estatus_dependencia').val(datos.estatus_dependencia);
            
            $("#modalDependencia").modal("show");
        }
    });
}
