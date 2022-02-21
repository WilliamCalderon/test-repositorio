<?php

namespace App\Controllers; 
use App\Models\UsuarioModel;

class LoginController extends BaseController   
{    //Cambio 1, 2, 3, 4, 5, 6, 7
    public function index()
    {
        if(session()->get("id_usuario") != null){
            if(session()->get("role") == "admin"){
                return redirect()->route('administrador');
            }
            if(session()->get("role") == "user"){
                return redirect()->route('usuario');
            }
        }  

        return view('login/login'); ///////chavi 2
    }

    public function authenticate()
    {
        if ($this->request->getMethod() == 'post') {

            $usuario = $this->request->getVar('tbx_usuario');
            $password = $this->request->getVar('tbx_password');

            $rules = [
                'tbx_usuario'  => [
                    'rules' => 'required|min_length[6]|max_length[50]|valid_email',
                    'errors' => [
                        'required' => 'El campo Usuario es obligatorio.'                        
                    ]
                ],
                'tbx_password' => [
                    'rules' => 'required',
                    'errors' => [
                        'required' => 'El campo Contraseña es obligatorio.'
                    ]
                ],
            ];

            if (!$this->validate($rules)) {
				$datos['validation'] = $this->validator;
                return view('login/login', $datos);
			}
            else
            {

                if($this->_VerificarAD($usuario, $password) != 0 || $this->_VerificarAD($usuario, $password) != ''){

                    $miUsuarioModel = new UsuarioModel();

                    $usuario = $miUsuarioModel->where('email', $usuario)
                                              ->first();                    
                    if($usuario != null){
                        $this->_setUserSession($usuario);
                        return redirect()->route('administrador');
                    }
                    else{
                        $datos['alerta'] = 'Usted no tiene permiso para acceder a este aplicativo';
                        return view('login/login', $datos);
                    }
    
                }else{
                    $datos['alerta'] = 'El usuario y/o password proporcionados son incorrectos o tu usuario esta inactivo, por favor verifica';
                    return view('login/login', $datos);
                }

			}
        }
 
    }

    private function _VerificarAD($user, $pass)
    {
        $ldaprdn = $user;
        $usuario = explode("@", $ldaprdn);
        $ldappass = trim($pass);
        $ds = $this->WebConfig->ldapHost;
        $dn = $this->WebConfig->ldapDN;
        $puertoldap = 389;
        $ldapconn = ldap_connect($ds, $puertoldap);
        ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);
        ldap_set_option($ldapconn, LDAP_OPT_REFERRALS, 0);
        $ldapbind = @ldap_bind($ldapconn, $ldaprdn, $ldappass);
        if ($ldapbind) {
            $filter = "(samaccountname=$usuario[0]*)";
            $fields = array("dn", "sn", "correo", "displayname");
            $sr = @ldap_search($ldapconn, $dn, $filter, $fields);
            $info = @ldap_get_entries($ldapconn, $sr);
            $array = $info;
        } else {
            $array = 0;
            //$array=array('daniel.zenil@stps.gob.mx'); 
        }
        ldap_close($ldapconn);
        return $array;
    }

    private function _setUserSession($usuario){

		$SessionData = [
			'id_usuario'        => $usuario->id_usuario,
			'nombre_usuario'    => $usuario->nombre_usuario,
            'apellido_paterno'  => $usuario->apellido_paterno,
			'apellido_materno'  => $usuario->apellido_materno,
            'role'              => $usuario->role,
			'id_ur'             => $usuario->id_ur,
			'id_sede'           => $usuario->id_sede,
			'isLoggedIn'        => true, 
		];

		session()->set($SessionData);

		return true;
	}
    
    public function logout(){
		session()->destroy();
		return redirect()->route('/');
	}

}
