<?php

namespace App\Models;

use CodeIgniter\Model;

class UsuarioModel extends Model
{
    //indicamos la tabla con la que debe interactuar y los campos de la tabla
    protected $table = 't_usuarios';
    protected $primaryKey = 'id_usuario';
    protected $allowedFields = [
        'id_usuario',
        'nombre_usuario',
        'apellido_paterno',
        'apellido_materno',
        'email',
        'contrasena',
        'telefono',
        'estatus_usuario',
        'role',
        'id_ur',
        'id_sede',
        'oficio',
        'oficio_url'
    ];
    protected $returnType = "object";

    protected $ramasSoftDeletes = true;


    public function getDatosUsuarios($id_ur = -1, $estatus_usuario = -1)
    {
        $datos = $this->select('ROW_NUMBER () OVER (ORDER BY t_usuarios.id_usuario) as row, t_usuarios.*, cat_ur.nombre_ur, cat_sedes.sede_nombre')
                      ->join('cat_ur', 'cat_ur.id_ur = t_usuarios.id_ur')
                      ->join('cat_sedes', 't_usuarios.id_sede = cat_sedes.id_sede' );

        $datos = ($id_ur != -1) ? $this->where('t_usuarios.id_ur', $id_ur) : $datos; 
        $datos = ($estatus_usuario != -1) ? $this->where('t_usuarios.estatus_usuario', $estatus_usuario) : $datos; 

        $datos = $this->orderBy('t_usuarios.id_usuario', 'ASC')
                      ->findAll();

        return $datos;
    }

}
