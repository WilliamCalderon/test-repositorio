<?php
namespace App\Models;

use CodeIgniter\Model;

class SedeModel extends Model{
    
     //indicamos la tabla con la que debe interactuar y los campos de la tabla
    protected $table = 'cat_sedes';
    protected $primaryKey = 'id_sede';
    protected $allowedFields = ['id_sede', 'sede_nombre', 'cp', 'id_entidad','id_municipio',
                                'id_localidad','calle','numero_exterior','numero_interior',
                                'estatus_sede','fecha_actualizacion'];
    protected $returnType = "object";
    // eliminación logica de tipos de equipo
    protected $ramasSoftDeletes = true;
    
  
}