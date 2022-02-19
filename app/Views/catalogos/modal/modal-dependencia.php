<div id="modalDependencia" class="modal fade">
    <div class="modal-dialog modal-lg">
        <form class="modal-content" method="POST" action="<?php echo base_url(); ?>/AgregarActualizarDependencia/<?php echo $id_dependencia; ?>">
            <div class="modal-header">
                <h4 class="modal-title"><?php echo $accion ?> Dependencia</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Nombre de la dependencia:</label>
                            <input type="text" id="tbx_nombre_dependencia" name="tbx_nombre_dependencia" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Estatus:</label>
                            <select class="form-control" id="ddl_estatus_dependencia" name="ddl_estatus_dependencia">
                                <option value="1">Activo</option>
                                <option value="0">Inactivo</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                <button class="btn btn-primary pull-right" type="submit"><?php echo $accion ?> </button>
            </div>
        </form>
    </div>
</div>