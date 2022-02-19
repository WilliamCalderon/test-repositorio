<?php
namespace App\Models;

use CodeIgniter\Model;

class DependenciaModel extends Model{
    
     //indicamos la tabla con la que debe interactuar y los campos de la tabla
    protected $table = 'cat_dependencia';
    protected $primaryKey = 'id_dependencia';
    protected $allowedFields = ['id_dependencia', 'nombre_dependencia', 'estatus_dependencia'];
    protected $returnType = "object";
    // eliminación logica de tipos de equipo
    protected $ramasSoftDeletes = true;
    
  
}