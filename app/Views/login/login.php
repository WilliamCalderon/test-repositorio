<?= $this->extend('Master/MasterPage'); ?>
<?= $this->section('Title') ?>Iniciar sesión<?= $this->endSection() ?>

<?= $this->section('MainContent'); ?>
<div class="row">
    <div class="col-md-8">
        <h1>SISIL</h1>
        <hr class="red">
    </div>
</div>
<div class="row">
    <div class="col-md-8">
        <?php if (isset($alerta)) : ?>
            <div class="col-12">
                <div class="alert alert-danger alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <?= $alerta ?>
                </div>
            </div>
        <?php endif; ?>

        <?php if (isset($validation)): ?>
            <div class="col-12">
            <div class="alert alert-danger alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <?= $validation->listErrors() ?>
              </div>
            </div>
          <?php endif; ?>
    </div>
</div>
<div class="row">
    <div class="col-md-8">

        <form role="form" action="<?= base_url(); ?>/LoginController/authenticate" method="POST">
            <div class="form-group">
                <label class="control-label" for="tbx_usuario">Correo electrónico:</label>
                <input class="form-control" name="tbx_usuario" id="tbx_usuario" placeholder="Correo electrónico" type="text" autocomplete="off">
            </div>
            <div class="form-group">
                <label class="control-label" for="tbx_password">Contraseña</label>
                <input class="form-control" name="tbx_password" id="tbx_password" placeholder="Contraseña" type="password">
            </div>

            <button class="btn btn-primary pull-right" type="submit">Enviar</button>

        </form>
    </div>
</div>
<div class="row">
    <div class="bottom-buffer">
    </div>
</div>

<?= $this->endSection(); ?>
<?= $this->section('FooterContent'); ?>
<?= $this->endSection(); ?>