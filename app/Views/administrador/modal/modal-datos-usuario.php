<div id="modalDatosUsuario" class="modal fade">
    <div class="modal-dialog modal-lg">
        <form id="formModalUsuario" class="modal-content" method="POST" onsubmit="return AgregarActualizarUsuario(<?php echo $id_usuario ?>)" enctype="multipart/form-data">
            <div class="modal-header">
                <h4 class="modal-title"><?php echo $accion ?> usuario</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="tbx_nombre_usuario">Nombre:</label>
                            <input type="text" id="tbx_nombre_usuario" name="tbx_nombre_usuario" class="form-control" required="required">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="tbx_apellidop_usuario">Primer apellido:</label>
                            <input type="text" id="tbx_apellidop_usuario" name="tbx_apellidop_usuario" class="form-control" required="required">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="tbx_apellidom_usuario">Segundo apellido:</label>
                            <input type="text" id="tbx_apellidom_usuario" name="tbx_apellidom_usuario" class="form-control" required="required">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="tbx_telefono_usuario">Telefono:</label>
                            <input type="number" id="tbx_telefono_usuario" name="tbx_telefono_usuario" class="form-control" required="required">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="tbx_email_usuario">Correo electrónico:</label>
                            <input type="email" id="tbx_email_usuario" name="tbx_email_usuario" class="form-control" required="required">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="ddl_role">Rol:</label>
                            <select class="form-control" name="ddl_role" id="ddl_role">
                                <option value="0" selected="true" disabled="disabled"> -- Seleccione --</option>
                                <option value="admin">Administrador</option>
                                <option value="user">Unidad responsable</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <div class="form-group">
                            <label class="control-label" for="ddl_ur_usuario">Unidad responsable:</label>
                            <select class="form-control" name="ddl_ur_usuario" id="ddl_ur_usuario">
                                <option value="0" selected="true" disabled="disabled"> -- Seleccione --</option>
                                <?php foreach ($URs as $ur) { ?>
                                    <option value="<?php echo $ur->id_ur; ?>">
                                        <?php echo $ur->cve_ur . ' - ' . $ur->nombre_ur; ?>
                                    </option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="ddl_sede_usuario">Sede:</label>
                            <select class="form-control" name="ddl_sede_usuario" id="ddl_sede_usuario">
                                <option value="0" selected="true" disabled="disabled"> -- Seleccione --</option>
                                <?php foreach ($Sedes as $sede) { ?>
                                    <option value="<?php echo $sede->id_sede; ?>">
                                        <?php echo $sede->sede_nombre; ?>
                                    </option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="control-label" for="ddl_estatus_usuario">Estatus:</label>
                            <select class="form-control" name="ddl_estatus_usuario" id="ddl_estatus_usuario">
                                <option value="1">Activo</option>
                                <option value="0">Inactivo</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                <button class="btn btn-primary pull-right" type="submit">Agregar</button>
            </div>
        </form>
    </div>
</div>