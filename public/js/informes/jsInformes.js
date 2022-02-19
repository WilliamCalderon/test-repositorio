$gmx(document).ready(function() {
    $('#tbx_fec_ini').datepicker();
    $('#tbx_fec_fin').datepicker();
});

function btn_consultarClick(){
    var ArrayPOST = { 
        "tbx_fec_ini"    : $('#tbx_fec_ini').val(),  
        "tbx_fec_fin"    : $('#tbx_fec_fin').val(),  
        "ddl_estatus"    : $('#ddl_estatus').val()
    };

    $.ajax({
		type:"POST",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
		url: site + "/informes/btn_consultarClick",
		data: ArrayPOST,
		success:function(respuesta){
            
            if(respuesta.length > 0){
                $('#table-usuarios').DataTable( {               
                    "data": respuesta,
                    "responsive":"true",
                    "bAutoWidth": false,
                    "destroy":true,
                    "columns": [
                        { "data": "row" },
                        { "data": "siglas_prg" },
                        { "data": "fec_solicitud" },
                        { "data": "nombre_tipo_inf"},
                        { "data": "desc_tipo_inf" },
                        { "data": "periodo_inf"},
                        { "data": "estatus"},
                        { "data": "acciones"}
                    ]    
                } );
                $("body").dynamicSpinnerDestroy({}); 
                $('#div_resultados').show("swing");
                swal("Información cargada correctamente", "", "success");

            }else{
                $("body").dynamicSpinnerDestroy({}); 
                $('#div_resultados').hide("swing");
                swal("No se encontraron resultados de acuerdo a sus parametros de busqueda", "", "error");
            }
            
            $('[data-toggle="tooltip"]').tooltip(); 

    	}
    });
}

$('#btn_agregar_informe').bind('click', async e => {

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
        url: site +"/informes/ModalInforme"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);
    
    $("body").dynamicSpinnerDestroy({});

    $("#modalNuevoInforme").modal("show");

});

