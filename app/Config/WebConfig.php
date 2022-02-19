<?php
namespace Config;

use CodeIgniter\Config\BaseConfig;

class WebConfig extends BaseConfig
{

    public $RutaDocumentos = 'public/documentos/';
    //Esta ruta absoluta varia si estas en Windows o Linux (/var/www/html/reuniondgti/public/img/qr/)
    public $IMG_DIR = 'c:\xampp\htdocs\Codeigniter\SISIL\public\img';

    /** Datos del SMTP */  
    public $MailHostIP      = '10.1.32.10';
    public $MailFrom        = 'notificacion@notificaciones.stps.gob.mx';
    public $MailNameFrom    = 'Notificación SISIL';
    public $MailUser        = '';
    public $MailPass        = '';    
    public $MailPort        = 25;
    public $imagen_header   = 'public/img/email_header.jpg';
    public $imagen_footer   = 'public/img/email_footer.jpg';
    /** Fin Datos del SMTP */
    
    /**Datos del Active Directory */
    public $ldapHost = 'ldap://10.8.100.4:389';
    public $ldapDN = 'DC=stps,DC=gob,DC=mx';
    /** Fin Datos del Active Directory */


}

