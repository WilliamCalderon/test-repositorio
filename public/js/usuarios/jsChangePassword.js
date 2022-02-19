
function ActualizarPassword(){

    $.ajax({
        type:"POST",
        async: true,
        beforeSend: function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        },
        url: site + "/changepassword/ActualizarPassword",
        data: $('#formModalUsuario').serialize(),
        success:function(respuesta){
                $("body").dynamicSpinnerDestroy({});   
               
                if(respuesta==1){				
                  swal("Usuario agregado o actualizado con exito", "", "success");
                  
                }else{
                  swal(respuesta, "", "error");
                }			
                }
    });

  return false;   
}

