
CargarDetallesPrograma(1);



$(document).ready(function() {
    $('#table-t_eje').DataTable();
    $('#table-t_objetivo').DataTable();
    $('#table-t_estrategia').DataTable();
    $('#table-t_accion').DataTable();
    $('#table-t_indicador').DataTable();
    $('#table-t_alineacion').DataTable();
    $('#table-documentos-1').DataTable();
    $('#table-documentos-2').DataTable();
    $('#table-documentos-3').DataTable();
    $('#table-documentos-4').DataTable();
    $('#table-documentos-5').DataTable();
    $('#table-documentos-6').DataTable();
    $('#table-indicador-variable').DataTable();

    tinymce.init({
        selector: '#tbx_vision_sexenal',
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        language: 'es_MX'
    });  
   
});

function nuevoDocumento(id_seccion_docto, nombre_seccion) {
    $.ajax({
            type: "POST",
            dataType: 'JSON',
            async: true,
            cache: false,
            beforeSend: function() {
                $("body").dynamicSpinner({
                    loadingText: "Cargando..."
                });
            },
            url: site +"/pnd/CargarCategriasDoctos/" + id_seccion_docto,
            success: function(respuesta) {

                var datos = respuesta;
                var opciones = '<option value="-1" selected="true" disabled="disabled"> -- Seleccione --</option>';
                datos.forEach(element => {
                    var cadena = '<option value="' + element.id_org_docto + '">' + element.nombre_org_docto + '</option>';
                    opciones = opciones + cadena;
                });

                opciones = opciones + '<option value = "-99" > --Agregar nueva clasificación-- </option>';

                $("#ddl_org_docto").html(opciones);
            }
        })
        .done(

            function(data) {

                $("body").dynamicSpinnerDestroy({});

                $('#div_nueva_clasificacion').hide();

                $('#tbx_id_seccion_docto').val(id_seccion_docto);

                $('#lb_nombre_seccion').html(nombre_seccion);

                $("#newDocumento").modal("show");

            }

        );

}

function otraClasificacion(id_org_docto) {
    if (id_org_docto.value == '-99') {

        $('#div_nueva_clasificacion').show();

    } else {

        $('#div_nueva_clasificacion').hide();
        $('#tbx_org_nueva').val('');

    }
}

$('#btn-nuevo-indicador').bind('click', async e => {

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
        url: site +"/indicador/ModalAgregarIndicador/1"
    });
    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);
    $("body").dynamicSpinnerDestroy({});
    $("#ModalIndicador").modal("show");

});

$('#btn-nuevo-eje').bind('click', async e => {

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
        url: site +"/pnd/NuevoEje"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $("body").dynamicSpinnerDestroy({});

    $("#neweje").modal("show");

});

$('#btn-nuevo-objetivo').bind('click', async e => {

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
        url: site +"/pnd/NuevoObjetivo"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $("body").dynamicSpinnerDestroy({});

    $("#newObjetivo").modal("show");

});

$('#btn-nueva-estrategia').bind('click', async e => {

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
        url: site +"/pnd/NuevaEstrategia"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $("body").dynamicSpinnerDestroy({});

    $("#newEstrategia").modal("show");

});


$('#btn-nueva-accion').bind('click', async e => {

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
        url: site +"/pnd/NuevaAccion"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $('#ddl_areas').multiselect({
        columns: 1,
        placeholder: 'Selecciona Unidad Responsable',
        search: true
    });

    $("body").dynamicSpinnerDestroy({});

    $("#newAccion").modal("show");

});

$('#btn-nueva-alineacion').bind('click', async e => {

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
        url: site +"/pnd/NuevaAlineacion"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $("body").dynamicSpinnerDestroy({});

    $("#newAlineacion").modal("show");

});

async function editareje(id_eje) {


    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        async: true,
        url: getURL()+"/pnd/EditarEje"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        async: true,
        url: site +"/t_eje/ObtenerEje/" + id_eje,
        success: function(respuesta) {

            var datos = respuesta;

            $("body").dynamicSpinnerDestroy({});

            $('#tbx_id_eje_e').val(datos.id_eje);
            $('#tbx_nombre_eje_e').val(datos.nombre_eje);
            $('#tbx_siglas_eje_e').val(datos.siglas_eje);
            $('#ddl_estatus_eje_e').val(datos.estatus_eje);

            $("#editEje").modal("show");

        }
    });

}
async function eliminarEje(id_eje) {
    swal({
            title: "¿Estas seguro de eliminar este registro?",
            text: "!Una vez eliminado no podra recuperarse¡",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    type: "POST",
                    url: site +"/t_eje/EliminarEje/" + id_eje,
                    beforeSend: function() {
                        $("body").dynamicSpinner({
                            loadingText: "Cargando..."
                        });
                    },
                    success: function(respuesta) {

                        $("body").dynamicSpinnerDestroy({});

                        if (respuesta == 1) {
                            swal("Eliminado con exito", "", "success");
                        }
                    }
                });

                setTimeout(function() {
                    window.location.reload();
                }, 2100);

            }
        });
}

async function editarobjetivo(id_objetivo) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/pnd/EditarObjetivo"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        async: true,
        url: site + "/t_objetivo/ObtenerObjetivo/" + id_objetivo,
        success: function(respuesta) {

            var datos = respuesta;

            $("body").dynamicSpinnerDestroy({});

            $('#tbx_id_objetivo_e').val(datos.id_objetivo);

            $('#ddl_ejes_e').val(datos.id_eje)
            $('#tbx_nombre_objetivo_e').val(datos.nombre_objetivo);
            $('#tbx_descripcion_objetivo_e').val(datos.descripcion_objetivo);
            $('#tbx_siglas_objetivo_e').val(datos.siglas_objetivo);
            $('#ddl_estatus_objetivo_e').val(datos.estatus_objetivo);
            $("#editObjetivo").modal("show");
        }
    });



}
async function eliminarObjetivo(id_objetivo) {
    swal({
            title: "¿Estas seguro de eliminar este registro?",
            text: "!Una vez eliminado no podra recuperarse¡",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    type: "POST",
                    async: true,
                    beforeSend: function() {
                        $("body").dynamicSpinner({
                            loadingText: "Cargando..."
                        });
                    },
                    url: site + "/t_objetivo/EliminarObjetivo/" + id_objetivo,
                    success: function(respuesta) {
                        $("body").dynamicSpinnerDestroy({});
                        if (respuesta == 1) {
                            swal("Eliminado con exito", "", "success");
                        }
                    }
                });

                setTimeout(function() {
                    window.location.reload();
                }, 2100);

            }
        });
}

async function editarestrategia(id_estrategia) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/pnd/EditarEstrategia"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);


    $.ajax({
        type: "POST",
        async: true,
        url: site + "/t_estrategia/ObtenerEstrategia/" + id_estrategia,
        success: function(respuesta) {

            var datos = respuesta;
            console.log(datos);
            $("body").dynamicSpinnerDestroy({});
            $('#tbx_id_estrategia_e').val(datos.id_estrategia);
            $('#tbx_siglas_estrategia_e').val(datos.siglas_estrategia);
            $('#tbx_nombre_estrategia_e').val(datos.nombre_estrategia);
            $('#ddl_objetivo_e').val(datos.id_objetivo);
            $('#ddl_estatus_estrategia_e').val(datos.estatus_estrategia);
            $("#editEstrategia").modal("show");

        }
    });




}
async function eliminarestrategia(id_estrategia) {
    swal({
            title: "¿Estas seguro de eliminar este registro?",
            text: "!Una vez eliminado no podra recuperarse¡",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    type: "POST",
                    beforeSend: function() {
                        $("body").dynamicSpinner({
                            loadingText: "Cargando..."
                        });
                    },
                    url: site + "/t_estrategia/EliminarEstrategia/" + id_estrategia,
                    success: function(respuesta) {
                        $("body").dynamicSpinnerDestroy({});
                        if (respuesta == 1) {
                            swal("Eliminado con exito", "", "success");
                        }
                    }
                });

                setTimeout(function() {
                    window.location.reload();
                }, 2100);

            }
        });
}

async function editaraccion(id_accion) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/pnd/EditarAccion"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        url: site + "/t_accion/ObtenerAccion/" + id_accion,
        success: function(respuesta) {
            var urs = [];
            var datos = respuesta;
            $("body").dynamicSpinnerDestroy({});
            $('#tbx_id_accion_e').val(datos.id_accion);
            $('#tbx_siglas_accion_e').val(datos.siglas_accion);
            $('#tbx_nombre_accion_e').val(datos.nombre_accion);
            $('#ddl_estrategia_e').val(datos.id_estrategia);
            $('#ddl_estatus_accion_e').val(datos.estatus_accion);
            respuesta.unidadresponsable.forEach(element => {
                urs.push(element['id_ur']);
            });
            $('#ddl_areas_e').val(urs);
            $('#ddl_areas_e').multiselect({
                columns: 1,
                placeholder: 'Selecciona Unidad Responsable',
                search: true
            });
            $("#editAccion").modal("show");
        }
    });

}
async function eliminaraccion(id_accion) {
    swal({
            title: "¿Estas seguro de eliminar este registro?",
            text: "!Una vez eliminado no podra recuperarse¡",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    type: "POST",
                    async: true,
                    beforeSend: function() {
                        $("body").dynamicSpinner({
                            loadingText: "Cargando..."
                        });
                    },
                    url: site + "/t_accion/EliminarAccion/" + id_accion,
                    success: function(respuesta) {
                        $("body").dynamicSpinnerDestroy({});
                        if (respuesta == 1) {
                            swal("Eliminado con exito", "", "success");
                        }
                    }
                });

                setTimeout(function() {
                    window.location.reload();
                }, 2100);

            }
        });
}

async function editaralineacion(id_alineacion) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/pnd/EditarAlineacion"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        url: site + "/t_alineacion/ObtenerAlineacion/" + id_alineacion,
        success: function(respuesta) {
            var datos = respuesta;
            $("body").dynamicSpinnerDestroy({});
            $('#tbx_id_alineacion_e').val(datos.id_alineacion);
            $('#tbx_siglas_alineacion_e').val(datos.siglas_alineacion);
            $('#tbx_nombre_alineacion_e').val(datos.nombre_alineacion);
            $('#ddl_estatus_alineacion_e').val(datos.estatus_alineacion);
            $("#editAlineacion").modal("show");
        }
    });
}
async function eliminaralineacion(id_alineacion) {
    swal({
            title: "¿Estas seguro de eliminar este registro?",
            text: "!Una vez eliminado no podra recuperarse¡",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {

                $.ajax({
                    type: "POST",
                    beforeSend: function() {
                        $("body").dynamicSpinner({
                            loadingText: "Cargando..."
                        });
                    },
                    url: site + "/t_alineacion/EliminarAlineacion/" + id_alineacion,
                    success: function(respuesta) {

                        $("body").dynamicSpinnerDestroy({});

                        if (respuesta == 1) {
                            swal("Eliminado con exito", "", "success");
                        }
                    }
                });

                setTimeout(function() {
                    window.location.reload();
                }, 2100);

            }
        });
}


async function editarDatosGeneralesIndicador(id_indicador) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/indicador/ModalEditarIndicador/1"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        async: true,
        url: site + "/indicador/ObtenerIndicador/" + id_indicador,
        success: function(respuesta) {

            $("body").dynamicSpinnerDestroy({});

            var datos = respuesta;

            $('#tbx_siglas_ind').val(datos.siglas_indicador);
            $('#tbx_nombre_ind').val(datos.nombre_indicador);
            $('#ddl_objetivo_ind').val(datos.id_objetivo);
            $('#tbx_definicion_ind').val(datos.ind_definicion);
            $('#ddl_ur_ind').val(datos.id_ur);
            $('#tbx_id_ind').val(datos.id_indicador);

            $("#ModalIndicador").modal("show");
        }
    });
}
async function editarElementosMetaIndicador(id_indicador) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/indicador/ModalElementosMeta/1"
    });
 
    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        async: true,
        url: site + "/indicador/ObtenerIndicador/" + id_indicador,

        success: function(respuesta) {
            $("body").dynamicSpinnerDestroy({});

            var datos = respuesta;

            $('#ddl_desagregacion_ind').val(datos.id_nivdesag);
            $('#ddl_periodicidad_ind').val(datos.id_periodicidad);
            $('#ddl_tipo_ind').val(datos.id_tipo_meta);
            $('#ddl_formarep_ind').val(datos.id_forma_reporte);
            $('#ddl_unidadmed_ind').val(datos.id_unidad_medida);
            $('#ddl_dimension_ind').val(datos.id_dimension);
            $('#ddl_perfinal_ind').val(datos.id_mesfin);
            $('#ddl_perinicial_ind').val(datos.id_mesini);
            $('#ddl_tendencia_ind').val(datos.id_tendencia);
            $('#ddl_status_ind').val(datos.estatus_indicador);
            $('#tbx_metodo_ind').val(datos.metcalculo);
            $('#tbx_observa_ind').val(datos.ind_observaciones);
            $('#tbx_id_ind').val(datos.id_indicador);

            $("#ModalIndicadorElementos").modal("show");
        }
    });



}
async function editarLineaBaseIndicador(id_indicador) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site +"/indicador/ModalLineaBase/1"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        async: true,
        url: site + "/indicador/ObtenerIndicador/" + id_indicador,

        success: function(respuesta) {

            $("body").dynamicSpinnerDestroy({});

            var datos = respuesta;
            $('#tbx_anio_lb_ind').val(datos.linbase_anio);            
            $('#tbx_valor_lb_ind').val(datos.linbase_valor);
            $('#tbx_nota_lb_ind').val(datos.linbase_nota);           
            $('#tbx_valor_mf_ind').val(datos.metafin_valor);           
            $('#tbx_nota_mf_ind').val(datos.metafin_nota);
            $('#tbx_anio_mf_ind').val(datos.metafin_anio);
            $('#tbx_id_ind').val(datos.id_indicador);
            $("#ModalLineaBase").modal("show");
        }
    });



}
async function editarSerieHistoricaIndicador(id_indicador) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/indicador/ModalSerieHistorica/1"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        async: true,
        url: site + "/indicador/ObtenerIndicador/" + id_indicador,

        success: function(respuesta) {

            $("body").dynamicSpinnerDestroy({});

            var datos = respuesta;
            $('#tbx_mth2012').val(datos.mth2012);
            $('#tbx_mth2013').val(datos.mth2013);
            $('#tbx_mth2014').val(datos.mth2014);
            $('#tbx_mth2015').val(datos.mth2015);
            $('#tbx_mth2016').val(datos.mth2016);
            $('#tbx_mth2017').val(datos.mth2017);
            $('#tbx_mth2018').val(datos.mth2018);
            $('#tbx_id_ind').val(datos.id_indicador);

            $("#ModalSerieHistorica").modal("show");
        }
    });



}
async function editarMetasIntermediasIndicador(id_indicador) {

    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }

    var ajaxcontent = document.createElement('div');

    ajaxcontent.setAttribute('id', 'ajax-content');

    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/indicador/ModalMetasIntermedias/1"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $.ajax({
        type: "POST",
        async: true,
        url: site + "/indicador/ObtenerIndicador/" + id_indicador,

        success: function(respuesta) {
            $("body").dynamicSpinnerDestroy({});
            var datos = respuesta;
            console.log(datos);
            $('#tbx_mti2020').val(datos.mti2020);
            $('#tbx_mti2021').val(datos.mti2021);
            $('#tbx_mti2022').val(datos.mti2022);
            $('#tbx_mti2023').val(datos.mti2023);
            $('#tbx_mti2024').val(datos.mti2024);
            $('#tbx_id_ind').val(datos.id_indicador);           
            $("#ModalMetasIntermedias").modal("show");
        }
    });
}

function CargarVariables(id_indicador){
  
    $.ajax({
        type: "POST",
        async: true,
        url: site + "/variable/ObtenerVariablesByIndicador/" + id_indicador,
        success: function(respuesta) {
            datos = respuesta;
            renglones = '';
            datos.forEach(element => {
                var celdas ='<tr><td>'+element.row+'</td>'+
                                 '<td>'+element.siglas_variable+'</td>'+
                                 '<td>'+element.nombre_variable+'</td>'+
                                 '<td>'+element.valor_variable+'</td>'+
                                 '<td>'+element.fuente+'</td>'+
                                 '<td align="center">'+
                                        '<a class="btn btn-outline-success btn-sm" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Editar" onclick="ObtenerVariable('+element.id_variable+')"><span class="material-icons">mode_edit</span></a>'+
                                        //'<a onclick="eliminarVariable(id)"><span class="bi bi-trash" aria-hidden="true"></span></a>'
                                 '</td>'
                            '</tr>';                    
                renglones = renglones + celdas;
            });
            $("#tbody-t-ind-variable").html(renglones);
            $('[data-toggle="tooltip"]').tooltip();
            $('#tbx_id_ind').val(id_indicador);
        }
    });
}

function resetFormVariable(){
    $('#tbx_siglas_var').val('');
    $('#tbx_nombre_variable_var').val('');
    $('#tbx_valor_var').val('');
    $('#tbx_fuente_var').val(''); 
    $('#tbx_id_var').val('0');
}

function ObtenerVariable(id_variable){
    $.ajax({
        type: "POST",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/variable/ObtenerVariable/" + id_variable,        
        success: function(respuesta) {
            datos = respuesta;
            $("body").dynamicSpinnerDestroy({});      
            $('#tbx_siglas_var').val(datos.siglas_variable);
            $('#tbx_nombre_variable_var').val(datos.nombre_variable);
            $('#tbx_valor_var').val(datos.valor_variable);
            $('#tbx_fuente_var').val(datos.fuente); 
            $('#tbx_id_ind').val(datos.id_indicador);
            $('#tbx_id_var').val(datos.id_variable);
            $('#form-datos-indicador').show("bounce");
        }
    });

}

async function editarAplicacionDelMetodo(id_indicador) {
    if ($("#ajax-content").length) {
        $('#ajax-content').remove();
    }
    var ajaxcontent = document.createElement('div');
    ajaxcontent.setAttribute('id', 'ajax-content');
    var html = await $.ajax({
        type: "GET",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/indicador/ModalVariables/1"
    });
    ajaxcontent.innerHTML += html;
    $('#cuerpo-content').append(ajaxcontent);

    CargarVariables(id_indicador);
    
     $.ajax({
        type: "POST",
        async: true,
        url: site + "/indicador/ObtenerIndicador/" + id_indicador,
        success: function(respuesta) {
            $("body").dynamicSpinnerDestroy({});
            var datos = respuesta;
            $('#tbx_sustitucion_ind').val(datos.suscalculo);
            $('#tbx_id_ind').val(datos.id_indicador);
            $('#form-datos-indicador').hide("linear");
            $("#ModalIndicadorVariables").modal("show");
        }
    });
}

async function btnAgregarIndicadorClick() {
    resetFormVariable();
    $('#btn-nueva-variable').hide("explode");
    $('#form-datos-indicador').show("bounce");
}
async function btnCancelAgregarIndicadorClick() {
    resetFormVariable();
    $('#btn-nueva-variable').show("bounce");
    $('#form-datos-indicador').hide("explode");
}

function AgregarActualizarVariable(){

    var ArrayPOST = {
        "tbx_siglas_var"          : $('#tbx_siglas_var').val(),
        "tbx_nombre_variable_var" : $('#tbx_nombre_variable_var').val(),
        "tbx_valor_var"           : $('#tbx_valor_var').val(),
        "tbx_fuente_var"          : $('#tbx_fuente_var').val(),
        "tbx_id_ind"              : $('#tbx_id_ind').val(),
        "tbx_id_var"              : $('#tbx_id_var').val()
    };

    $.ajax({
		type:"POST",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
		url: site + "/variable/AgregarActualizarVariable/pnd",
		data: ArrayPOST,
		success:function(respuesta){
            $("body").dynamicSpinnerDestroy({});      
            if(respuesta==1){
				CargarVariables($('#tbx_id_ind').val());
                btnCancelAgregarIndicadorClick();		
				swal("Registro agregado o actualizado con exito", "", "success");
			}else{
				swal("Ocurrio un error al actualizar", "", "error");
			}			
    	}
    });
}

function ActualizarPrograma(){
    var ArrayPOST = { 
        "id_prg"                        : 1,  
        "tbx_vision_sexenal"    : tinymce.get("tbx_vision_sexenal").getContent()
    };

    $.ajax({
		type:"POST",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
		url: site + "/pnd/ActualizarPrograma",
		data: ArrayPOST,
		success:function(respuesta){
            $("body").dynamicSpinnerDestroy({});      
            if(respuesta==1){
				CargarDetallesPrograma(1);                
				swal("Información actualizada con exito", "", "success");
			}else{
				swal("Ocurrio un error al actualizar", "", "error");
			}			
    	}
    });
}

function CargarDetallesPrograma(id_prg){
    $.ajax({
        type: "POST",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        url: site + "/pnd/ObtenerDatosGenerales/" + id_prg,        
        success: function(respuesta) {
            datos = respuesta;
            console.log(datos);
           
            if(datos.vision != null){
                tinymce.get('tbx_vision_sexenal').setContent(datos.vision);     
            } 
            
            CargarDocumentosPD(id_prg);
            
        }
    });

   
}



function CargarDocumentosPD(id_prg){

    
    $.ajax({
        type: "POST",
        async: true,
        url: site + "/participaciondemocratica/ObtenerParticipacionDemocratica/" + id_prg,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Recuperando datos..."
            });
        },
        success: function(respuesta) {

            datos = respuesta;
            
            $('#table-documentos-6').DataTable( {               
                "data": datos,
                "responsive":"true",
                "bAutoWidth": false,
                "destroy":true,
                "columns": [
                    { "data": "row" },
                    { "data": "nombre_usuario" },
                    { "data": "descripcion_foro" },
                    { "data": "acciones" }
                ],
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
                ]

            } );

            
            $('[data-toggle="tooltip"]').tooltip();     
           
            $("body").dynamicSpinnerDestroy({});
        }
    }) .done(
        function(r) {

        }
    ); 
}
$('#btn-nuevo-ducumento-pd').bind('click', async e => {

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
        url: site +"/pnd/ModalParticipacionDemocratica/0"
    });

    ajaxcontent.innerHTML += html;

    $('#cuerpo-content').append(ajaxcontent);

    $("body").dynamicSpinnerDestroy({});

    $("#modalParticipacionDemocratica").modal("show");

});
function AgregarActualizarPD(id_prg, id_foro){

    var file_pd = ($("#file_participacion_democratica"))[0].files[0];
    var ArrayPOST = new FormData(document.getElementById("formParticipacionDemocratica"));
    ArrayPOST.append("file_participacion_democratica", file_pd);

    $.ajax({
		type:"POST",
		url: site +"/participaciondemocratica/AgregarActualizar/"+id_prg+"/"+id_foro,
		data: ArrayPOST,
        cache: false,
        async: true,
        contentType: false,
	    processData: false,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
		success:function(r){			
			if(r==1){
				$('#formParticipacionDemocratica')[0].reset();
				CargarDocumentosPD(id_prg);
				swal("Se agrego el documento", "", "success");
			}else{
				swal("Ocurrio un error",  "", "error");
			}
            $("#modalParticipacionDemocratica").modal("hide");
            $("body").dynamicSpinnerDestroy({});      
		}
	});

    return false;   
}
function EliminarDocumentoPD(id_prg, id_foro){
    swal({
        title: "¿Estas seguro de eliminar este registro?",
        text: "!Una vez eliminado no podra recuperarse¡",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {

            $.ajax({
                type: "POST",
                url: site +"/participaciondemocratica/EliminarDocumentoPD/" + id_prg +'/'+id_foro,
                beforeSend: function() {
                    $("body").dynamicSpinner({
                        loadingText: "Cargando..."
                    });
                },
                success: function(respuesta) {

                    $("body").dynamicSpinnerDestroy({});

                    if (respuesta == 1) {
                        swal("Eliminado con exito", "", "success");
                        CargarDocumentosPD(id_prg);
                    }else{
                        swal("Ocurrio un error",  "", "error");
                    }
                }
            });

         
        }
    });
}

