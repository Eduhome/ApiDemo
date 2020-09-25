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

$db = new mysqli('localhost', 'root', '', 'farmaciacumbre');

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

// LISTAR TODOS DE USUARIOS
$app->get('/clientes', function() use($db, $app){
    $sql = 'SELECT * FROM cliente ORDER BY id DESC;';
    $query = $db->query($sql);

    $usuarios = array();
    while ($usuario = $query->fetch_assoc()) {
        $usuarios[] = $usuario;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $usuarios
    );

    echo json_encode($result);
});



$app->get('/clientes/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM cliente WHERE id = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status'    => 'error',
        'code'      => 404,
        'message'   => 'Producto no disponible'
    );

    if($query->num_rows == 1){
        $producto = $query->fetch_assoc();

        $result = array(
            'status'    => 'success',
            'code'      => 200,
            'data'  => $producto
        );
    }

    echo json_encode($result);
});


// GUARDAR USUARIO
$app->post('/clientes', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'   => 404,
        'message' => 'Producto NO se ha creado'
    );

    // $token = $app->request->headers('ApiKey');

    // if($token=='1234567'){

        $json = $app->request->getBody('json');
        $data = json_decode($json, true);

       
        if(!isset($data['nit'])){
            $data['nit']=null;
        }

        if(!isset($data['nombre'])){
            $data['nombre']=null;
        }

        if(!isset($data['telefono'])){
            $data['telefono']=null;
        }

        if(!isset($data['fecha'])){
            $data['fecha']=null;
        }

        if(!isset($data['usuario_id'])){
            $data['usuario_id']=null;
        }

       



        $query = "INSERT INTO cliente VALUES(NULL,".
           
            "'{$data['nit']}',".
            "'{$data['nombre']}',".
            "'{$data['telefono']}',".
            "'{$data['fecha']}',".
            "'{$data['usuario_id']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'   => 200,
                'message' => 'Producto creado correctamente'
            );
        }
    

    echo json_encode($result);

});

// ACTUALIZAR UN PRODUCTO

$app->put('/clientes/:id', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE cliente SET ".
            "nit = '{$data["nit"]}', ".
            "nombre = '{$data["nombre"]}', ".
            "telefono = '{$data["telefono"]}', ".
            "fecha = '{$data["fecha"]}', ".
            "usuario_id = '{$data["usuario_id"]}' WHERE id = {$id}";
          
            

    $query = $db->query($sql);

    if($query){
        $result = array(
            'status'    => 'success',
            'code'      => 200,
            'message'   => 'El producto se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status'    => 'error',
            'code'      => 404,
            'message'   => 'El producto no se ha actualizado!!'
        );
    }

    echo json_encode($result);

});


// ELIMINAR UN USUARIO

$app->delete('/clientes/:id', function($id) use($db, $app){
    $sql = 'DELETE FROM cliente WHERE id = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status'    => 'success',
            'code'      => 200,
            'message'   => 'El producto se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status'    => 'error',
            'code'      => 404,
            'message'   => 'El producto no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();