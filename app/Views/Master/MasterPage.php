<!DOCTYPE html>

<html lang="es">

<head>
    <title><?= $this->renderSection('Title'); ?> - SISIL </title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script src="https://framework-gb.cdn.gob.mx/data/encuesta_v1.0/encuestas.js"></script>
    <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="<?= base_url(); ?>/public/js/plugins/DataTables.js"></script>
    <link href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css" rel="stylesheet" />
    <script src="<?= base_url(); ?>/public/js/plugins/select2.js"></script>
    <script src="<?= base_url(); ?>/public/js/plugins/dynamics-1.00.0.js"></script>
    <link href="<?= base_url(); ?>/public/css/select2.css" rel="stylesheet" />
    <link href="<?= base_url(); ?>/public/css/dynamics.css" rel="stylesheet" />
    <script src='https://cdn.tiny.cloud/1/ak88s4i0w5s3rbgqh7qam4tsm7k2zuswenzyi972bpcu7qsd/tinymce/5/tinymce.min.js' referrerpolicy="origin"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>

    <script>
        var site = "<?= base_url(); ?>";

        $(document).on("submit", "form", function() {
            $("body").dynamicSpinner({
                loadingText: "Cargando..."
            });
        });

        $gmx(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });
    </script>
     <?= $this->renderSection('HeadContent'); ?>
</head>

<body>
    <?= $this->include('Master/menu/MenuAdmin'); ?>

    <div id="page-wrapper">
        <div class="container top-buffer" id="cuerpo-content">
            <?= $this->renderSection('MainContent'); ?>
        </div>
    </div>
    <?= $this->renderSection('FooterContent'); ?>
    <script src="https://framework-gb.cdn.gob.mx/assets/scripts/jquery-ui-datepicker.js"></script>
</body>

</html>