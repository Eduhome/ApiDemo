/**
 * @api {get} /compra/  GET COMPRA
 * @apiName Categoria 1
 * @apiGroup 4.- COMPRA_PRODUCTO
 *
 *
 * @apiSuccess {Number} Id Id Unico Compra Producto .
 * @apiSuccess {Date} Fecha_Compra  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
* @apiSuccess {Number} IdProveedor  Llave foranea de Proveedor.
* @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.

 * @api {get} /compra 1.- GET COMPRA PRODUCTO 
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
 *      'message' 	=> 'Compra no disponible'
 *     }
 */

 /**
 * @api {get} /compra/:id  GET compra Por ID
 * @apiName Categoria 2
 * @apiGroup 4.- COMPRA_PRODUCTO
 *
 * @apiParam {Number} Id Id Unico del Compra Producto .
 
 * @apiSuccess {Number} Id Id Unico Compra Producto .
 * @apiSuccess {Date} Fecha_Compra  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
* @apiSuccess {Number} IdProveedor  Llave foranea de Proveedor.
* @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.
 *
 * @api {get} /compras/:id 2.- GET COMPRA POR ID
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
 *      'message' 	=> 'Compra no disponible'
 *     }
 */

/**
 * @api {post} /categoria/ POST INSERTAR COMPRA

 * @apiName Categoria 3
 * @apiGroup 4.- COMPRA_PRODUCTO
 
 * @apiSuccess {Number} Id Id Unico Compra Producto .
 * @apiSuccess {Date} Fecha_Compra  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
* @apiSuccess {Number} IdProveedor  Llave foranea de Proveedor.
* @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.

 *
  * @api {post} /compras 3.-POST INSERTAR COMPRA
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      'status' => 'success',
 *      'code'	 => 200,
 *      'message' => 'Compra creada correctamente'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      'status' => 'error',
 *      'code'	 => 404,
 *      'message' => 'Compra NO se ha creado'
 *     }
 */

 /**
 * @api {put} /compras/:id  PUT ACTUALIZAR COMPRA POR ID
 * @apiName Categoria 4
 * @apiGroup 4.- COMPRA_PRODUCTO
 *
 * @apiParam {Number} Id Id Unico del Compra Producto .
 
 * @apiSuccess {Number} Id Id Unico Compra Producto .
 * @apiSuccess {Date} Fecha_Compra  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
 * @apiSuccess {Number} IdProveedor  Llave foranea de Proveedor.
 * @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.
 *
 * @api {put} /compras/:id  4.- PUT ACTUALIZAR COMPRAS POR ID
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
 *       'message' 	=> 'Compra no se ha actualizado!!'
 *     }
 */


  /**
 * @api {delete} /compras/:id  DELETE ELIMINAR COMPRAS POR ID
 * @apiName Categoria 5
 * @apiGroup 4.- COMPRA_PRODUCTO
 *
 * @apiParam {Number} id ID unico Compra.
 *
 * @api {delete} /compras/:id  5.- DELETE ELIMINAR COMPRAS POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       'status' 	=> 'success',
 *       'code'		=> 200,
 *       'message' 	=> 'La Compra se ha eliminado correctamente!!'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'status' 	=> 'error',
 *       'code'		=> 404,
 *       'message' 	=> 'La Compra no se ha eliminado!!'
 *     }
 */