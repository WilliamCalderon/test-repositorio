<?php
namespace App\Validation;
use App\Models\UsuarioModel;

class UsuarioReglas
{

  public function validateEmailUsuario(string $str, string $fields, array $data){

    $id_usuario = (int) $fields;
    $model = new UsuarioModel();

    $user = $model->where('email', $data['tbx_email_usuario']);    
    $user = ($id_usuario != 0) ?  $user->where('id_usuario !=', $id_usuario) : $user; 
    $user = $user->first();

    if(!$user)
      return true;

    return false;
  }

}