/**
 * @api {get} /CLIENTES/  GET CLIENTE
 * @apiName Categoria 1
 * @apiGroup 3.- CLIENTE
 *
 *
 * @apiSuccess {Number} Id Id Unico del Cliente .
 * @apiSuccess {Number} Nit  Nit del Cliente.
 * @apiSuccess {String} Nombre  Nombre Del Cliente.
 * @apiSuccess {Number} Telefono  Telefono Del Cliente.
 * @apiSuccess {Number} Fecha  Fecha De Registro Del Cliente.
 * @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.

 * @api {get} /Clientes 1.- GET CLIENTE 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "status": "success",
 *           "code": "200"
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *      'status' 	=> 'error',
 *      'code'		=> 404,
 *      'message' 	=> 'Cliente no disponible'
 *     }
 */

 /**
 * @api {get} /clientes/:id  GET clientes Por ID
 * @apiName Categoria 2
 * @apiGroup 3.- CLIENTE
 *

 * @apiParam {Number} Id Id Unico del Cliente .
 * @apiSuccess {Number} Id Id del Cliente.
 * @apiSuccess {Number} Nit  Nit del Cliente.
 * @apiSuccess {String} Nombre  Nombre Del Cliente.
 * @apiSuccess {Number} Telefono  Telefono Del Cliente.
 * @apiSuccess {Number} Fecha  Fecha De Registro Del Cliente.
 * @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.
 *
 * @api {get} /clientes/:id 2.- GET CLIENTES POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *           "status": "success",
 *           "code": "200"
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      'status' 	=> 'error',
 *      'code'		=> 404,
 *      'message' 	=> 'Cliente no disponible'
 *     }
 */

/**
 * @api {post} /categoria/ POST INSERTAR CLIENTE

 * @apiName Categoria 3
 * @apiGroup 3.- CLIENTE
 
 * @apiSuccess {Number} Id Id del Cliente.
 * @apiSuccess {Number} Nit  Nit del Cliente.
 * @apiSuccess {String} Nombre  Nombre Del Cliente.
 * @apiSuccess {Number} Telefono  Telefono Del Cliente.
 * @apiSuccess {Number} Fecha  Fecha De Registro Del Cliente.
 * @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.

 *
  * @api {post} /clientes 3.-POST INSERTAR USUARIO
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      'status' => 'success',
 *      'code'	 => 200,
 *      'message' => 'Cliente creada correctamente'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      'status' => 'error',
 *      'code'	 => 404,
 *      'message' => 'El Cliente NO se ha creado'
 *     }
 */

 /**
 * @api {put} /Clientes/:id  PUT ACTUALIZAR CLIENTES POR ID
 * @apiName Categoria 4
 * @apiGroup 3.- CLIENTE
 *
 * @apiParam {Number} Id Id Unico del Cliente .
 * @apiSuccess {Number} Id Id del Cliente.
 * @apiSuccess {Number} Nit  Nit del Cliente.
 * @apiSuccess {String} Nombre  Nombre Del Cliente.
 * @apiSuccess {Number} Telefono  Telefono Del Cliente.
 * @apiSuccess {Number} Fecha  Fecha De Registro Del Cliente.
 * @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.
 *
 * @api {put} /Clientes/:id  4.- PUT ACTUALIZAR CLIENTES POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       'status' 	=> 'success',
 *       'code'		=> 200,
 *       'message' 	=> 'Se ha actualizado correctamente!!'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'status' 	=> 'error',
 *       'code'		=> 404,
 *       'message' 	=> 'El Cliente no se ha actualizado!!'
 *     }
 */


  /**
 * @api {delete} /clentes/:id  DELETE ELIMINAR clientes POR ID
 * @apiName Categoria 5
 * @apiGroup 3.- CLIENTE
 *
 * @apiParam {Number} id ID unico Cliente.
 *
 * @api {delete} /Clientes/:id  5.- DELETE ELIMINAR CLIENTES POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       'status' 	=> 'success',
 *       'code'		=> 200,
 *       'message' 	=> 'El cliente se ha eliminado correctamente!!'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'status' 	=> 'error',
 *       'code'		=> 404,
 *       'message' 	=> 'El Cliente no se ha eliminado!!'
 *     }
 */