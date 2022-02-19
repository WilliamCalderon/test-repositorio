<?php
namespace App\Models;

use CodeIgniter\Model;

class UnidadResponsableModel extends Model{
    
     //indicamos la tabla con la que debe interactuar y los campos de la tabla
    protected $table = 'cat_ur';
    protected $primaryKey = 'id_ur';
    protected $allowedFields = ['id_ur', 'nombre_ur', 'cve_ur', 'estatus_ur'];
    protected $returnType = "object";
    // eliminación logica de tipos de equipo
    protected $ramasSoftDeletes = true;
    
  
}