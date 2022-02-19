
var table = $('#table-t_indicador').DataTable( {
    columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
    } ],
    select: {
        style:    'multi', //'os' para seleccion unica 
        selector: 'td:first-child'
    }
});

$('#btn_siguiente').on('click', function (event) {
    event.preventDefault();
    
    $('#formAgregarIndicadores').find('input[type="text"]').remove();
    var seleccionados = table.rows({ selected: true });    
   
    if(!seleccionados.data().length)     
      swal("No ha seleccionado ningún indicador", "", "error");
    else{
      seleccionados.every(function(key,data){
        console.log(this.data());

        $('<input>', {
            type: 'text',
            value: this.data()[1],
            name: 'ArrayIdIndicador[]'
        }).appendTo('#formAgregarIndicadores');
        
       $("#formAgregarIndicadores").submit(); //submiteas el form
      });
    }
});



