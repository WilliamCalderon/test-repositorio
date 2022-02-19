<?php

namespace App\Controllers;

use App\Models\DependenciaModel;

class DependenciaController extends BaseController
{
    protected $miDependenciaModel;
    protected $reglas;

    public function __construct(){

        $this->miDependenciaModel = new DependenciaModel();

        $this->reglas = [
            'tbx_nombre_dependencia' => [
                'rules' => 'required',
                'errors' => [
                    'required' => 'El campo Nombre es obligatorio.'
                ]
            ]
        ];
    }

    public function index()
    {   
        $dependecias = $this->miDependenciaModel->orderBy('id_dependencia', 'ASC')->findAll();
        return view('catalogos/dependencia', ['dependencias' => $dependecias]);
    }

    public function AgregarActualizar($id_dependencia){

        if (!$this->request->getMethod() == 'POST' || !$this->validate($this->reglas)) {
            
            return view('catalogos/dependencia', ['validation' => $this->validator,
                                                  'dependencias' => $this->miDependenciaModel->orderBy('id_dependencia', 'ASC')->findAll() 
                                                 ]);
        }

        $nombre = $this->request->getPost('tbx_nombre_dependencia');
        $estatus = $this->request->getPost('ddl_estatus_dependencia');

        if($id_dependencia != 0){
            $this->miDependenciaModel->update($id_dependencia, ['nombre_dependencia' => $nombre, 'estatus_dependencia' => $estatus]);
        }else{
            $this->miDependenciaModel->insert(['nombre_dependencia' => $nombre, 'estatus_dependencia' => $estatus]);
        }

        return redirect()->route('dependencia');
    }

    public function ObtenerDependencia($id_dependencia){
        header('Content-Type: application/json');
        $resultado = [];
        $resultado = (array) $this->miDependenciaModel->find($id_dependencia);
        echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
    }

    public function ModalAgregarActualizar($id_dependencia){
        
        if($id_dependencia != 0){
            $accion = 'Guardar';
        }else{
            $accion = 'Agregar';
        }
        
        $datos['accion']= $accion;
        $datos['id_dependencia'] = $id_dependencia;

        return view('catalogos/modal/modal-dependencia', $datos);
    }

}