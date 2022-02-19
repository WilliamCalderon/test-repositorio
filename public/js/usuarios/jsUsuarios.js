
$(function () {
    var $ddl = $("select[name$=ddl_ur]");
    $ddl.select2();
    $ddl.focus();
});

$(document).ready(function() {
    $('#table-usuarios').DataTable();
})

function btn_consultarClick(){
    var ArrayPOST = { 
        "ddl_ur"         : $('#ddl_ur').val(),  
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
		url: site + "/getUsuarios",
		data: ArrayPOST,
		success:function(data){
            respuesta = JSON.parse(data);
            if(respuesta.length > 0){
                $('#table-usuarios').DataTable( {               
                    "data": respuesta,
                    "responsive":"true",
                    "bAutoWidth": false,
                    "destroy":true,
                    "columns": [
                        { "data": "row" },
                        { "data": "nombre_completo_usuario" },
                        { "data": "email" },
                        { "data": "nombre_ur" },
                        { "data": "sede_nombre" },
                        { "data": "acciones"}
                    ]/*,
                    'dom': 'Bfrtip',
                    'buttons': [
                        {
                            "extend": "copyHtml5",
                            "text": "<span class='material-icons'>copy_all</span> Copiar",
                            "titleAttr":"Copiar",
                            "className": "btn btn-secondary"
                        },{
                            "extend": "excelHtml5",
                            "text": "<span class='material-icons'>table_rows</span>  Excel",
                            "titleAttr":"Exportar a Excel",
                            "className": "btn btn-success"
                        },{
                            "extend": "pdfHtml5",
                            "text": "<span class='material-icons'>picture_as_pdf</span> PDF",
                            "titleAttr":"Exportar a PDF",
                            "className": "btn btn-danger"
                        },{
                            "extend": "csvHtml5",
                            "text": "<span class='material-icons'>text_snippet</span> CSV",
                            "titleAttr":"Exportar a CSV",
                            "className": "btn btn-info"
                        }
                    ]*/
    
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

$('#btn_agregar_usuario').bind('click', async e => {

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
        url: site +"/ModalUsuario/0"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $(function () {
        var $ddl = $("select[name$=ddl_ur_usuario]");
        $ddl.select2();
        $ddl.focus();
    });
    
    $("body").dynamicSpinnerDestroy({});

    $("#modalDatosUsuario").modal("show");

});

function AgregarActualizarUsuario(id_usuario){

    $.ajax({
		type:"POST",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
		url: site + "/AgregarActualizarUsuario/"+id_usuario,
		data: $('#formModalUsuario').serialize(),
		success:function(respuesta){
            $("body").dynamicSpinnerDestroy({});   
            $("#modalDatosUsuario").modal("hide");   
            if(respuesta==1){				
				swal("Usuario agregado o actualizado con exito", "", "success");
                btn_consultarClick();
			}else{
				swal("Error", respuesta, "error");               
			}			
    	}
    });

    return false;   
}

async function EditarUsuario(id_usuario){
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
        url: site +"/ModalUsuario/"+id_usuario
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $(function () {
        var $ddl = $("select[name$=ddl_ur_usuario]");
        $ddl.select2();
        $ddl.focus();
    });

    $.ajax({
        type: "GET",
        async: true,
        url: site + "/getUsuario/" + id_usuario,
        success: function(respuesta) {
            $("body").dynamicSpinnerDestroy({});
            var datos = JSON.parse(respuesta);
            $('#tbx_nombre_usuario').val(datos.nombre_usuario);
            $('#tbx_apellidop_usuario').val(datos.apellido_paterno);
            $('#tbx_apellidom_usuario').val(datos.apellido_materno);
            $('#tbx_telefono_usuario').val(datos.telefono);
            $('#tbx_email_usuario').val(datos.email);
            $('#ddl_role').val(datos.role);
            $('#ddl_sede_usuario').val(datos.id_sede);
            $('#ddl_estatus_usuario').val(datos.estatus_usuario);
            $('#ddl_ur_usuario').select2("val", datos.id_ur);//val(datos.id_ur);
            $("#modalDatosUsuario").modal("show");
        }
    });
}
