<?= $this->extend('Master/MasterPage'); ?>
<?= $this->section('Title') ?>Prueba de Layout<?= $this->endSection() ?>

<?= $this->section('MainContent'); ?>
<div class="row">
    <div class="col-md-12">
        <ol class="breadcrumb">
            <li class="breadcrumb-item icon icon-home"><a href="<?= base_url(); ?>/"></a></li>
            <li class="active"><a href="#">Modulo de usuarios</a></li>
        </ol>
    </div>
</div>
<div class="row">
    <div class="col-md-12">

    </div>
</div>
<div class="row">
    <div class="col-md-8">
        <h2>Módulo de usuarios</h2>
        <hr class="red" />
    </div>
</div>
<div class="row">
    <div class="col-md-8">
        <div class="form-group">
            <label class="control-label">Unidad reponsable:</label>
            <select class="form-control" name="ddl_ur" id="ddl_ur">
                <option value="-1" selected="true"> -- Todas --</option>
                <?php foreach ($URs as $ur) { ?>
                    <option value="<?php echo $ur->id_ur; ?>">
                        <?php echo $ur->cve_ur . ' - ' . $ur->nombre_ur; ?>
                    </option>
                <?php } ?>
            </select>
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="control-label">Estatus:</label>
            <select class="form-control" name="ddl_estatus" id="ddl_estatus">
                <option value="1" selected="true">Activo</option>
                <option value="0">Inactivo</option>
            </select>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-8 col-md-offset-4">
        <hr>
    </div>
</div>
<div class="clearfix">
    <div class="pull-left text-muted text-vertical-align-button"></div>
    <div class="pull-right">
        <button class="btn btn-success" id="btn_agregar_usuario">Agregar Usuario</button>
        <button class="btn btn-primary" id="btn_consultar" onclick="btn_consultarClick()">Consultar</button>
    </div>
</div>

<div class="row" id="div_resultados" hidden="hidden">
    <br />
    <div class="col-md-12">
        <table class="table table-striped table-bordered table-hover" id="table-usuarios">
            <thead class="bg-secondary text-white">
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Correo electrónico</th>
                    <th>Unidad responsable</th>
                    <th>Sede</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>
<div class="row">
    <div class="bottom-buffer">
    </div>
</div>
<?= $this->endSection(); ?>


<?= $this->section('FooterContent'); ?>
<script src="<?= base_url(); ?>/public/js/usuarios/jsUsuarios.js"></script>
<?= $this->endSection(); ?>