<?php if (session()->get('isLoggedIn')) : ?>

  <nav class="navbar navbar-inverse sub-navbar navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#subenlaces">
          <span class="sr-only">Interruptor de Navegación</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="<?php echo base_url(); ?>/">TRABAJO</a>
      </div>
      <div class="collapse navbar-collapse" id="subenlaces">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Configuración de catalogos<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="<?php echo base_url(); ?>/dependencia">Dependencia</a></li>
              <li><a href="<?php echo base_url(); ?>/desagregacion">Desagregación</a></li>
              <li><a href="<?php echo base_url(); ?>/dimension">Dimensión</a></li>
              <li><a href="<?php echo base_url(); ?>/meta">Meta</a></li>
              <li><a href="<?php echo base_url(); ?>/periodicidad">Periodicidad</a></li>
              <li><a href="<?php echo base_url(); ?>/poblacion">Población</a></li>
              <li><a href="<?php echo base_url(); ?>/reporte">Reporte</a></li>
              <li><a href="<?php echo base_url(); ?>/sede">Sede</a></li>
              <li><a href="<?php echo base_url(); ?>/tendencia">Tendencia</a></li>
              <li><a href="<?php echo base_url(); ?>/unidadmedida">Unidad de medida</a></li>
              <li><a href="<?php echo base_url(); ?>/ur">Unidad responsable</a></li>
              <li><a href="<?php echo base_url(); ?>/orgdoctos">Organización de documentos</a></li>
              <li class="divider"></li>
              <li><a href="#">Enlace separado</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Configuración de programas <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="<?php echo base_url(); ?>/pnd">PND</a></li>
              <li><a href="<?php echo base_url(); ?>/pstps">PSTPS</a></li>
              <li><a href="<?php echo base_url(); ?>/pntepd">PNTEPD</a></li>

              <li class="divider"></li>
              <li><a href="#">Enlace separado</a></li>
            </ul>
          </li>

          <li><a href="<?php echo base_url(); ?>/usuarios">Usuarios</a></li>
          <li><a href="<?php echo base_url(); ?>/informes">Informes</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="icon-user"></span><span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="<?php echo base_url(); ?>/changepassword">Cambiar contraseña</a></li>
              <li class="divider"></li>
              <li><a href="<?php echo base_url(); ?>/logout">Cerrar sesión</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<?php endif; ?>