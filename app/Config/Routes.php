<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'LoginController::index');
$routes->get('logout', 'LoginController::logout');
$routes->get('/administrador', 'AdminHomeController::index');
$routes->get('/usuarios', 'UsuarioController::index');
$routes->get('/ModalUsuario/(:num)', 'UsuarioController::ModalAgregarActualizar/$1');
$routes->add('/getUsuarios', 'UsuarioController::getUsuarios');
$routes->get('/getUsuario/(:num)', 'UsuarioController::ObtenerUsuario/$1');
$routes->post('/AgregarActualizarUsuario/(:num)', 'UsuarioController::AgregarActualizarUsuario/$1');
$routes->get('/dependencia', 'DependenciaController::index');
$routes->get('/ModalDependencia/(:num)', 'DependenciaController::ModalAgregarActualizar/$1');
$routes->get('/getDependencia/(:num)', 'DependenciaController::ObtenerDependencia/$1');
$routes->post('/AgregarActualizarDependencia/(:num)', 'DependenciaController::AgregarActualizar/$1');
$routes->get('/desagregacion', 'DesagregacionController::index');
$routes->get('/modalDesagregacion/(:num)', 'DesagregacionController::ModalAgregarActualizar/$1');
$routes->get('/getDesagregacion/(:num)', 'DesagregacionController::ObtenerDesagregacion/$1');
$routes->post('/AgregarActualizarDesagregacion/(:num)', 'DesagregacionController::AgregarActualizar/$1');
$routes->get('/dimension', 'DimensionController::index');
$routes->get('/modalDimension/(:num)', 'DimensionController::ModalAgregarActualizar/$1');
$routes->get('/getDimension/(:num)', 'DimensionController::ObtenerDimension/$1');
$routes->post('/AgregarActualizarDimension/(:num)', 'DimensionController::AgregarActualizar/$1');
$routes->get('/meta', 'MetaController::index');
$routes->get('/modalMeta/(:num)', 'MetaController::ModalAgregarActualizar/$1');
$routes->get('/getMeta/(:num)', 'MetaController::ObtenerMeta/$1');
$routes->post('/AgregarActualizarMeta/(:num)', 'MetaController::AgregarActualizar/$1');
$routes->get('/periodicidad', 'PeriodicidadController::index');
$routes->get('/modalPeriodicidad/(:num)', 'PeriodicidadController::ModalAgregarActualizar/$1');
$routes->get('/getPeriodicidad/(:num)', 'PeriodicidadController::ObtenerPeriodicidad/$1');
$routes->post('/AgregarActualizarPeriodicidad/(:num)', 'PeriodicidadController::AgregarActualizar/$1');
$routes->get('/poblacion', 'PoblacionController::index');
$routes->get('/modalPoblacion/(:num)', 'PoblacionController::ModalAgregarActualizar/$1');
$routes->get('/getPoblacion/(:num)', 'PoblacionController::ObtenerPoblacion/$1');
$routes->post('/AgregarActualizarPoblacion/(:num)', 'PoblacionController::AgregarActualizar/$1');
$routes->get('/reporte', 'ReporteController::index');
$routes->get('/modalReporte/(:num)', 'ReporteController::ModalAgregarActualizar/$1');
$routes->get('/getReporte/(:num)', 'ReporteController::ObtenerReporte/$1');
$routes->post('/AgregarActualizarReporte/(:num)', 'ReporteController::AgregarActualizar/$1');
$routes->get('/tendencia', 'TendenciaController::index');
$routes->get('/modalTendencia/(:num)', 'TendenciaController::ModalAgregarActualizar/$1');
$routes->get('/getTendencia/(:num)', 'TendenciaController::ObtenerTendencia/$1');
$routes->post('/AgregarActualizarTendencia/(:num)', 'TendenciaController::AgregarActualizar/$1');
$routes->get('/unidad', 'UnidadMedidaController::index');
$routes->get('/modalUnidad/(:num)', 'UnidadMedidaController::ModalAgregarActualizar/$1');
$routes->get('/getUnidad/(:num)', 'UnidadMedidaController::ObtenerUnidad/$1');
$routes->post('/AgregarActualizarUnidad/(:num)', 'UnidadMedidaController::AgregarActualizar/$1');
$routes->get('/unidadResponsable', 'UnidadResponsableController::index');
$routes->get('/modalUnidadResponsable/(:num)', 'UnidadResponsableController::ModalAgregarActualizar/$1');
$routes->get('/getUnidadResponsable/(:num)', 'UnidadResponsableController::ObtenerUnidadResponsable/$1');
$routes->post('/AgregarActualizarUnidadResponsable/(:num)', 'UnidadResponsableController::AgregarActualizar/$1');
$routes->get('/sede', 'SedeController::index');
$routes->get('/modalSede/(:num)', 'SedeController::ModalAgregarActualizar/$1');
$routes->get('/getSede/(:num)', 'SedeController::ObtenerSede/$1');
$routes->get('/ObtenerMunicipios/(:num)', 'SedeController::ObtenerMunicipios/$1');
$routes->get('/ObtenerMunicipiosEditar/(:num)', 'SedeController::ObtenerMunicipiosEditar/$1');
$routes->get('/ObtenerLocalidad/(:num)', 'SedeController::ObtenerLocalidad/$1');
$routes->get('/ObtenerLocalidadEditar/(:num)', 'SedeController::ObtenerLocalidadEditar/$1');
$routes->post('/AgregarActualizarSede/(:num)', 'SedeController::AgregarActualizar/$1');
$routes->get('/organizacionDoctos', 'OrgDoctosController::index');
$routes->get('/modalOrg/(:num)', 'OrgDoctosController::ModalAgregarActualizar/$1');
$routes->get('/getOrgDocto/(:num)', 'OrgDoctosController::ObtenerOrgDocto/$1');
$routes->get('/ObtenerSeccionDoctos/(:num)', 'OrgDoctosController::ObtenerSeccionDoctos/$1');
$routes->get('/ObtenerSeccionEditar/(:num)', 'OrgDoctosController::ObtenerSeccionEditar/$1');
$routes->post('/AgregarActualizarOrg/(:num)', 'OrgDoctosController::AgregarActualizar/$1');
$routes->post('/AgregarPutin/(:num)', 'OrgDoctosController::AgregarActualizar/$1');
$routes->post('/AgregarChichis/(:num)', 'OrgDoctosController::AgregarActualizar/$1');

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}