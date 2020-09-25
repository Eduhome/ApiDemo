/**
 * @api {get} /PROVEEDORES/  GET PROVEEDORES
 * @apiName Categoria 1
 * @apiGroup 2.- PROVEEDORES
 *
 *
 * @apiSuccess {Int} id Id Unico de Proveedor .
 * @apiSuccess {String} Nombre  Nombre Proveedor Unico.
 * @apiSuccess {Number} Telefono  Telefono Proveedor.
 *
 * @api {get} /PROVEEDORES/ 1.- GET PROVEEDORES 
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
 *      'message' 	=> 'PROVEEDOR no disponible'
 *     }
 */

 /**
 * @api {get} /provedores/:id  GET Proveedor Por ID
 * @apiName Categoria 2
 * @apiGroup 2.- PROVEEDORES
 *
 * @apiParam {Number} id ID unico de usuarios.
 *
 * @apiSuccess {Number} Id Id Unico de Proveedor .
 * @apiSuccess {String} Nombre  Nombre Del Proveedor .
 * @apiSuccess {Number} Telefono  Telefono Del Proveedor.
 *
 * @api {get} /provedores/:id 2.- GET USUARIO POR ID
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
 *      'message' 	=> 'usuarios no disponible'
 *     }
 */

/**
 * @api {post} /categoria/ POST INSERTAR PROVEEDOR

 * @apiName Categoria 3
 * @apiGroup 2.- PROVEEDORES
 *
 * @apiSuccess {Number} Id  Id De Proveedor.
 * @apiSuccess {String} Nombre  Nombre de Proveedor.
 * @apiSuccess {Number} Telefono  Telefono Proveedor.

 *
  * @api {post} /Proveedor 3.-POST INSERTAR USUARIO
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      'status' => 'success',
 *      'code'	 => 200,
 *      'message' => 'Proveedor creada correctamente'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      'status' => 'error',
 *      'code'	 => 404,
 *      'message' => 'El Proveedor NO se ha creado'
 *     }
 */

 /**
 * @api {put} /Proveedor/:id  PUT ACTUALIZAR PROVEEDOR POR ID
 * @apiName Categoria 4
 * @apiGroup 2.- PROVEEDORES
 *
 * @apiParam {Number} id ID unico de usuarios.
 *
 * @apiSuccess {Number} Id Id Unico de Proveedor .
 * @apiSuccess {String} Nombre  Nombre Del Proveedor .
 * @apiSuccess {Number} Telefono  Telefono Del Proveedor.
 *
 * @api {put} /Proveedor/:id  4.- PUT ACTUALIZAR PROVEEDOR POR ID
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
 *       'message' 	=> 'El Proveedor no se ha actualizado!!'
 *     }
 */


  /**
 * @api {delete} /USUARIOS/:id  DELETE ELIMINAR USUARIOS POR ID
 * @apiName Categoria 5
 * @apiGroup 2.- PROVEEDORES
 *
 * @apiParam {Number} id ID unico Proveedor.
 *
 * @api {delete} /Proveedor/:id  5.- DELETE ELIMINAR USUARIOS POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       'status' 	=> 'success',
 *       'code'		=> 200,
 *       'message' 	=> 'El Proveedor se ha eliminado correctamente!!'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'status' 	=> 'error',
 *       'code'		=> 404,
 *       'message' 	=> 'El Proveedor no se ha eliminado!!'
 *     }
 */