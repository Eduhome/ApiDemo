/**
 * @api {get} /categoria/  GET USUARIO
 * @apiName Categoria 1
 * @apiGroup 1.- USUARIO
 *
 *
 * @apiSuccess {Int} id Id Usuario.
 * @apiSuccess {String} Nombre  Nombre Usuario Unico.
 * @apiSuccess {Number} ci  CI Usuario.
 * @apiSuccess {String} Password  Password Usuario.
 * @apiSuccess {Number} Telefono  Telefono Usuario.
 * @apiSuccess {Number} ID_ROLES  Llave Foranea de Roles.
 * @apiSuccess {Number} Estado  Estado Usuario (1,0).

 *
 * @api {get} /usuarios/ 1.- GET USUARIO 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *           "status": "success",
 *           "code": "200"
 *      }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *      'status' 	=> 'error',
 *      'code'		=> 404,
 *      'message' 	=> 'Usuario no disponible'
 *     }
 */

 /**
 * @api {get} /usuarios/:id  GET USUARIO POR ID
 * @apiName Categoria 2
 * @apiGroup 1.- USUARIO
 *
 * @apiParam {String} id ID unico de usuarios.
 *
 * @apiSuccess {String} Nombre  Nombre Usuario.
 * @apiSuccess {Number} ci  CI Usuario.
 * @apiSuccess {String} Password  Password Usuario.
 * @apiSuccess {Number} Telefono  Telefono Usuario.
 * @apiSuccess {Number} ID_ROLES  Llave Foranea de Roles.
 * @apiSuccess {Number} Estado  Estado Usuario.
 *
 * @api {get} /usuarios/:id 2.- GET USUARIO POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *           "status": "success",
 *           "code": "200"
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      'status' 	=> 'error',
 *      'code'		=> 404,
 *      'message' 	=> 'usuarios no disponible'
 *     }
 */

/**
 * @api {post} /categoria/ POST INSERTAR USUARIO
 * @apiName Categoria 3
 * @apiGroup 1.- USUARIO
 *
 *
* @apiParam {String} id ID unico de usuarios.
 *
 * @apiSuccess {String} Nombre  Nombre Usuario.
 * @apiSuccess {Number} ci  CI Usuario.
 * @apiSuccess {String} Password  Password Usuario.
 * @apiSuccess {Number} Telefono  Telefono Usuario.
 * @apiSuccess {Number} ID_ROLES  Llave Foranea de Roles.
 * @apiSuccess {Number} Estado  Estado Usuario.
 *
  * @api {post} /USUARIOS/ 3.-POST INSERTAR USUARIO
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      'status' => 'success',
 *      'code'	 => 200,
 *      'message' => 'Categoria creada correctamente'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      'status' => 'error',
 *      'code'	 => 404,
 *      'message' => 'El Usuario NO se ha creado'
 *     }
 */

 /**
 * @api {put} /USUARIOS/:id  PUT ACTUALIZAR USUARIO por ID
 * @apiName Categoria 4
 * @apiGroup 1.- USUARIO
 *
* @apiParam {String} id ID unico de usuarios.
 *
 * @apiSuccess {String} Nombre  Nombre Usuario.
 * @apiSuccess {Number} ci  CI Usuario.
 * @apiSuccess {String} Password  Password Usuario.
 * @apiSuccess {Number} Telefono  Telefono Usuario.
 * @apiSuccess {Number} ID_ROLES  Llave Foranea de Roles.
 * @apiSuccess {Number} Estado  Estado Usuario.
 *
 * @api {put} /USUARIOS/:id  4.- PUT ACTUALIZAR USUARIO por ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       'status' 	=> 'success',
 *       'code'		=> 200,
 *       'message' 	=> 'La categoria se ha actualizado correctamente!!'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'status' 	=> 'error',
 *       'code'		=> 404,
 *       'message' 	=> 'El Usuario no se ha actualizado!!'
 *     }
 */


  /**
 * @api {delete} /USUARIOS/:id  DELETE ELIMINAR USUARIOS POR ID
 * @apiName Categoria 5
 * @apiGroup 1.- USUARIO
 *
 * @apiParam {String} id ID unico Usuario.
 *
 * @api {delete} /usuarios/:id  5.- DELETE ELIMINAR USUARIOS POR ID
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *       'status' 	=> 'success',
 *       'code'		=> 200,
 *       'message' 	=> 'El Usuario se ha eliminado correctamente!!'
 *       }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'status' 	=> 'error',
 *       'code'		=> 404,
 *       'message' 	=> 'El Usuario no se ha eliminado!!'
 *     }
 */