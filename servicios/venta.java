/**
 * @api {get} /venta/  GET VENTA
 * @apiName Categoria 1
 * @apiGroup 5.- VENTA_PRODUCTO
 *
 *
 * @apiSuccess {Number} Id Id Unico Compra Producto .
 * @apiSuccess {Date} Fecha_Venta  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
* @apiSuccess {Number} IdCliente  Llave foranea de Cliente.
* @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.

 * @api {get} /venta 1.- GET VENTA PRODUCTO 
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
 *      'message' 	=> 'Venta no disponible'
 *     }
 */

 /**
 * @api {get} /venta/:id  GET VENTA Por ID
 * @apiName Categoria 2
 * @apiGroup 5.- VENTA_PRODUCTO
 *
 * @apiParam {Number} Id Id Unico del venta Producto .
 
 * @apiSuccess {Number} Id Id Unico Venta Producto .
 * @apiSuccess {Date} Fecha_Venta  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
* @apiSuccess {Number} IdCliente  Llave foranea de Cliente.
* @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.

 *
 * @api {get} /ventas/:id 2.- GET VENTAS POR ID
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
 *      'message' 	=> 'Venta no disponible'
 *     }
 */

/**
 * @api {post} /categoria/ POST INSERTAR VENTA

 * @apiName Categoria 3
 * @apiGroup 5.- VENTA_PRODUCTO
 
 * @apiSuccess {Number} Id Id Unico Compra Producto .
 * @apiSuccess {Date} Fecha_Venta  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
* @apiSuccess {Number} IdCliente  Llave foranea de Cliente.
* @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.

 *
  * @api {post} /ventas 3.-POST INSERTAR VENTAS
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      'status' => 'success',
 *      'code'	 => 200,
 *      'message' => 'Venta creada correctamente'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      'status' => 'error',
 *      'code'	 => 404,
 *      'message' => 'Venta NO se ha creado'
 *     }
 */

 /**
 * @api {put} /ventas/:id  PUT ACTUALIZAR VENTA POR ID
 * @apiName Categoria 4
 * @apiGroup 5.- VENTA_PRODUCTO
 *
 
 * @apiParam {Number} Id Id Unico Venta Producto .
 
 * @apiSuccess {Number} Id Id Unico Venta Producto .
 * @apiSuccess {Date} Fecha_Venta  Registro de fecha Compra.
 * @apiSuccess {String} Nombre_Producto  Nombre Del Producto.
 * @apiSuccess {Number} Exitencia  Cuanto es la cantidad del Producto.
 * @apiSuccess {Number} Cantidad  Cantidad requeridad del producto .
 * @apiSuccess {Number} Precio  Precio del Producto.
 
* @apiSuccess {Number} IdCliente  Llave foranea de Cliente.
* @apiSuccess {Number} IdUsuario  Llave foranea de Usuario.
 *
 * @api {put} /ventas/:id  4.- PUT ACTUALIZAR VENTAS POR ID
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
 *       'message' 	=> 'Venta no se ha actualizado!!'
 *     }
 */


  /**
 * @api {delete} /ventas/:id  DELETE ELIMINAR VENTAS POR ID
 * @apiName Categoria 5
 * @apiGroup 5.- VENTA_PRODUCTO
 *
 * @apiParam {Number} id ID unico VENTAS.
 *
 * @api {delete} /ventas/:id  5.- DELETE ELIMINAR VENTAS POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       'status' 	=> 'success',
 *       'code'		=> 200,
 *       'message' 	=> 'La venta se ha eliminado correctamente!!'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'status' 	=> 'error',
 *       'code'		=> 404,
 *       'message' 	=> 'La Venta no se ha eliminado!!'
 *     }
 */