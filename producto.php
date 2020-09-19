<?php

require_once 'vendor/autoload.php';

/**
 *
 * NubeAndo.COM - Educar es Compartir
 *
 * @author: Angel Céspedes Quiroz
 * @Usuario: acq1305
 * @Web: https://www.nubeando.com
 * @Facebook: https://www.facebook.com/acq1305
 * @Skype: acq1305
 * @Linkedin: https://bo.linkedin.com/in/acq1305
 *
 */

$app = new \Slim\Slim();

$db = new mysqli('localhost', 'root', '', 'backendapi');

// Configuración de cabeceras
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

/*$loginToken = function (){
    $app = \Slim\Slim::getInstance();
    $token = $app->request->headers('ApiKey');
    if($token=='1234567'){

    }else{
        throw new Exception("Usuario no valido");
    }
}*/

// LISTAR TODOS LOS PRODUCTOS
$app->get('/productos', function() use($db, $app){
    $sql = 'SELECT * FROM productos ORDER BY id DESC;';
    $query = $db->query($sql);

    $productos = array();
    while ($producto = $query->fetch_assoc()) {
        $productos[] = $producto;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $productos
    );

    echo json_encode($result);
});

// DEVOLVER UN SOLO PRODUCTO
$app->get('/productos/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM productos WHERE id = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Producto no disponible'
    );

    if($query->num_rows == 1){
        $producto = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $producto
        );
    }

    echo json_encode($result);
});

// GUARDAR PRODUCTOS
$app->post('/productos', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'Producto NO se ha creado'
    );

    $token = $app->request->headers('ApiKey');

    if($token=='1234567'){

        $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['nombre'])){
            $data['nombre']=null;
        }

        if(!isset($data['description'])){
            $data['description']=null;
        }

        if(!isset($data['precio'])){
            $data['precio']=null;
        }

        if(!isset($data['imagen'])){
            $data['imagen']=null;
        }

        $query = "INSERT INTO productos VALUES(NULL,".
            "'{$data['nombre']}',".
            "'{$data['description']}',".
            "'{$data['precio']}',".
            "'{$data['imagen']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Producto creado correctamente'
            );
        }
    }

    echo json_encode($result);

});

// ACTUALIZAR UN PRODUCTO
$app->put('/productos/:id', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE productos SET ".
        "nombre = '{$data["nombre"]}', ".
        "description = '{$data["description"]}', ";

    if(isset($data['imagen'])){
        $sql .= "imagen = '{$data["imagen"]}', ";
    }

    $sql .=	"precio = '{$data["precio"]}' WHERE id = {$id}";


    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El producto se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El producto no se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN PRODUCTO
$app->delete('/productos/:id', function($id) use($db, $app){
    $sql = 'DELETE FROM productos WHERE id = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El producto se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El producto no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();