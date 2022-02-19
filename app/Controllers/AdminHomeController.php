<?php

namespace App\Controllers;
use App\Models\UsuarioModel;

class AdminHomeController extends BaseController
{   


    public function index()
    {    
        if (session()->get('id_usuario') == null || session()->get('role') != 'admin' )  {
            return redirect()->route('/');
        }   

        return view('administrador/index');
    }

}