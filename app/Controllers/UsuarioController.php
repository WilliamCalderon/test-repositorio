<?php

namespace App\Controllers;
//
//require_once dirname(__DIR__,2).'\vendor\autoload.php';
use App\Models\{UsuarioModel, UnidadResponsableModel, SedeModel};
//use PhpCfdi\Credentials\Credential; 

class UsuarioController extends BaseController
{
    private $miUsuarioModel, $miURModel, $miSedeModel;

    function __construct()
    {
        $this->miUsuarioModel = new UsuarioModel();
        $this->miURModel = new UnidadResponsableModel();
        $this->miSedeModel = new SedeModel();
    }

    public function index()
    {
        if (session()->get('id_usuario') == null || session()->get('role') != 'admin') {
            return redirect()->route('/');
        }

        $datos = $this->miUsuarioModel->getDatosUsuarios(-1);

        return view('administrador/usuarios', ['URs' => $this->miURModel->where('estatus_ur', 1)->findAll()]);
    }

    public function getUsuarios()
    {

        header('Content-Type: application/json');
        $resultado = [];

        if ($this->request->getMethod() == 'post') {

            $id_ur = $this->request->getVar('ddl_ur');
            $estatus_usuario = $this->request->getVar('ddl_estatus');

            $usuarios = $this->miUsuarioModel->getDatosUsuarios($id_ur, $estatus_usuario);

            $i = 0;
            foreach ($usuarios as $user) {
                array_push($resultado, (array)$user);
                $resultado[$i]['nombre_completo_usuario'] = $user->nombre_usuario . ' ' . $user->apellido_paterno . ' ' . $user->apellido_materno;
                $resultado[$i]['acciones'] =  '<div class="text-center"> <a class="btn btn-outline-primary  btn-sm" onclick="EditarUsuario(' . $user->id_usuario . ')" data-toggle="tooltip" data-placement="top" title="Editar"><span class="material-icons">mode_edit</span></a> </div>';
                $i++;
            }
        }

        echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
    }

    function ObtenerUsuario($id_usuario)
    {
        header('Content-Type: application/json');

        $usuario = [];

        if ($id_usuario > 0) {
            $usuario =  $this->miUsuarioModel->find($id_usuario);
        }
        echo json_encode((array)$usuario, JSON_UNESCAPED_UNICODE);
    }

    function AgregarActualizarUsuario($id_usuario)
    {
        $reglas = [
            'tbx_email_usuario'  => [
                'rules' => "required|min_length[6]|max_length[50]|valid_email|validateEmailUsuario[$id_usuario]",
                'errors' => [
                    'required' => 'El campo correo electronico es obligatorio.',
                    'valid_email' => 'El campo de correo electronico tiene que ser un email.',
                    'validateEmailUsuario' => 'La cuenta de correo electronico, esta asignada a otro usuario'
                ]
            ]
        ];

        if (!$this->request->getMethod() == 'POST' || !$this->validate($reglas)) {
            $errores  = '';
            foreach ($this->validator->getErrors() as $error) {
                $errores = $errores . ' ' . $error . "\n";
            }
            echo $errores;
        }

        $DatosUsuario = [
            'nombre_usuario'    => $this->request->getVar('tbx_nombre_usuario'),
            'apellido_paterno'  => $this->request->getVar('tbx_apellidop_usuario'),
            'apellido_materno'  => $this->request->getVar('tbx_apellidom_usuario'),
            'email'             => $this->request->getVar('tbx_email_usuario'),
            'telefono'          => $this->request->getVar('tbx_telefono_usuario'),
            'estatus_usuario'   => $this->request->getVar('ddl_estatus_usuario'),
            'role'              => $this->request->getVar('ddl_role'),
            'id_ur'             => $this->request->getVar('ddl_ur_usuario'),
            'id_sede'           => $this->request->getVar('ddl_sede_usuario')
        ];

        if ($id_usuario != 0) {
            $this->miUsuarioModel->update($id_usuario, $DatosUsuario);
        } else {
            $this->miDependenciaModel->insert($DatosUsuario);
        }
        $this->EnviarCorreo($DatosUsuario['email'], 'Hola mundo', 'Correo de prueba');
        echo 1;
    }

    public function ModalAgregarActualizar($id_usuario)
    {
        if ($id_usuario != 0) {
            $accion = 'Guardar';
            $datos['URs'] = $this->miURModel->findAll();
            $datos['Sedes'] = $this->miSedeModel->findAll();

        } else {
            $accion = 'Agregar';
            $datos['URs'] = $this->miURModel->where('estatus_ur', 1)->findAll();
            $datos['Sedes'] = $this->miSedeModel->where('estatus_sede', 1)->findAll();
        }

        $datos['accion'] = $accion;
        $datos['id_usuario'] = $id_usuario;

        return view('administrador/modal/modal-datos-usuario', $datos);
    }

    function EnviarCorreo($to, $msg, $asunto, $adjunto = null)
    {
        $email = \Config\Services::email();
   
        $config['SMTPHost'] = $this->WebConfig->MailHostIP;
        $config['SMTPUser'] = $this->WebConfig->MailUser;
        $config['SMTPPass'] = $this->WebConfig->MailPass;
        $config['SMTPPort'] = $this->WebConfig->MailPort;
        $config['protocol'] = 'smtp';
        $config['SMTPCrypto'] = 'tls';        

        $email->initialize($config);

        $email->setFrom($this->WebConfig->MailFrom, $this->WebConfig->MailNameFrom);
        $email->setTo($to);
        $email->setSubject($asunto);

        $email->attach($this->WebConfig->imagen_header);
        $email->attach($this->WebConfig->imagen_footer);

        $cid_header = $email->setAttachmentCID($this->WebConfig->imagen_header);        
        $cid_footer = $email->setAttachmentCID($this->WebConfig->imagen_footer);

        $email->setMessage('<div class="container"> 
                                <img src="'.$cid_header.'">'
                                . $msg .
                                '<img src="'.$cid_footer.'"> 
                            </div>');

        if (!$email->send()) {
            // Generate error
            $error = $email->printDebugger(['headers']);
        }else{
            $error = $email->printDebugger(['headers']);
        }
    }
}


/**
        $cerFile = 'public/documentos/fiel/CATO.cer';
        $pemKeyFile = 'public/documentos/fiel/CATO.key';
        $passPhrase = 'Cato1424'; // contraseña para abrir la llave privada

        $fiel = \App\Libraries\PhpCfdi\Credential::openFiles($cerFile, $pemKeyFile, $passPhrase);

        $sourceString = 'texto a firmar';
        // alias de privateKey/sign/verify
        $signature = $fiel->sign($sourceString);
        echo base64_encode($signature), PHP_EOL;

        // alias de certificado/publicKey/verify
        $verify = $fiel->verify($sourceString, $signature);
        var_dump($verify); // bool(true)

        // objeto certificado
        $certificado = $fiel->certificate();
        echo $certificado->rfc(), PHP_EOL; // el RFC del certificado
        echo $certificado->legalName(), PHP_EOL; // el nombre del propietario del certificado
        echo $certificado->branchName(), PHP_EOL; // el nombre de la sucursal (en CSD, en FIEL está vacía)
        echo $certificado->serialNumber()->bytes(), PHP_EOL; // número de serie del certificado
*/