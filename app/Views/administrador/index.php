<?= $this->extend('Master/MasterPage'); ?>
<?= $this->section('Title') ?>Bienvenida - <?= $this->endSection() ?>

<?= $this->section('MainContent'); ?>

<div class="row">
    <div class="col-md-12">
        <ol class="breadcrumb">
            <li class="breadcrumb-item icon icon-home"><a href="#"></a></li>
            <li class="active"><a href="#">Inicio</a></li>
        </ol>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-3">Perfil Administrador </h1>
                <p class="lead">Funcionalidades</p>
                <hr class="my-2">
                <p>
                <ul>
                    <li>Catalogos</li>
                </ul>
                </p>
            </div>
        </div>
    </div>
</div>

<?= $this->endSection(); ?>
<?= $this->section('FooterContent'); ?>
<?= $this->endSection(); ?>