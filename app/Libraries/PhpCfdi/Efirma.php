<?php

class Efirma {
    
    function Firmar(){
        $cerFile = 'fiel/certificado.cer';
        $pemKeyFile = 'fiel/private-key.key';
        $passPhrase = '12345678a'; // contraseña para abrir la llave privada

        $fiel = App\Libraries\PhpCfdi\Credential::openFiles($cerFile, $pemKeyFile, $passPhrase);
    }
}