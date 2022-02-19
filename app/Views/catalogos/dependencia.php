<?= $this->extend('Master/MasterPage'); ?>
<?= $this->section('Title') ?>Dependencia<?= $this->endSection() ?>

<?= $this->section('MainContent'); ?>
<div class="row">
    <div class="col-md-12">
        <ol class="breadcrumb">
            <li><a href="<?php echo base_url(); ?>/"><i class="icon icon-home"></i></a></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Catalogos</a></li>
            <li class="active"><a href="#">Dependencia</a></li>
        </ol>
    </div>
</div>

<div class="row">
    <div class="col-md-8">
        <h2>Catálogo Dependencia</h2>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <?php if (isset($validation)) { ?>
            <div class="alert alert-warning alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <?php echo $validation->listErrors(); ?>
            </div>
        <?php } ?>
    </div>
</div>

<div class="row">
    <div class="col-md-12"> <br />

        <button id="btn_agregar_dependencia" type="button" class="btn btn-primary">Agregar Dependencia</button>
        <br /> <br />
        <table class="table table-striped table-bordered table-hover" id="table-unidad-medida">
            <thead>
                <tr>
                    <th>Dependencia</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($dependencias as $dep) { ?>
                    <tr>
                        <td><?php echo $dep->nombre_dependencia ?></td>
                        <td><?php echo $dep->estatus_dependencia ? 'Activo' : 'Inactivo' ?></td>
                        <td align="center">
                            <a onclick="EditarDependencia(<?php echo $dep->id_dependencia ?>)"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                        </td>
                    </tr>
                <?php } ?>
            </tbody>

        </table>
    </div>
</div>
<?= $this->endSection(); ?>

<?= $this->section('FooterContent'); ?>
<script src="<?= base_url(); ?>/public/js/catalogos/jsDependencia.js"></script>
<?= $this->endSection(); ?>