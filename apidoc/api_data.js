define({ "api": [
  {
    "type": "get",
    "url": "/usuarios/",
    "title": "1.- GET USUARIO",
    "name": "Categoria_1",
    "group": "1.-_USUARIO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Usuario Unico.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>CI Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID_ROLES",
            "description": "<p>Llave Foranea de Roles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Estado",
            "description": "<p>Estado Usuario (1,0).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"success\",\n      \"code\": \"200\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'Usuario no disponible'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/usuario.java",
    "groupTitle": "1.-_USUARIO"
  },
  {
    "type": "get",
    "url": "/usuarios/:id",
    "title": "2.- GET USUARIO POR ID",
    "name": "Categoria_2",
    "group": "1.-_USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico de usuarios.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>CI Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID_ROLES",
            "description": "<p>Llave Foranea de Roles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Estado",
            "description": "<p>Estado Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": \"success\",\n      \"code\": \"200\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' \t=> 'error',\n 'code'\t\t=> 404,\n 'message' \t=> 'usuarios no disponible'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/usuario.java",
    "groupTitle": "1.-_USUARIO"
  },
  {
    "type": "post",
    "url": "/USUARIOS/",
    "title": "3.-POST INSERTAR USUARIO",
    "name": "Categoria_3",
    "group": "1.-_USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico de usuarios.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>CI Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID_ROLES",
            "description": "<p>Llave Foranea de Roles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Estado",
            "description": "<p>Estado Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n 'status' => 'success',\n 'code'\t => 200,\n 'message' => 'Categoria creada correctamente'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' => 'error',\n 'code'\t => 404,\n 'message' => 'El Usuario NO se ha creado'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/usuario.java",
    "groupTitle": "1.-_USUARIO"
  },
  {
    "type": "put",
    "url": "/USUARIOS/:id",
    "title": "4.- PUT ACTUALIZAR USUARIO por ID",
    "name": "Categoria_4",
    "group": "1.-_USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico de usuarios.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>CI Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID_ROLES",
            "description": "<p>Llave Foranea de Roles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Estado",
            "description": "<p>Estado Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'La categoria se ha actualizado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'El Usuario no se ha actualizado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/usuario.java",
    "groupTitle": "1.-_USUARIO"
  },
  {
    "type": "delete",
    "url": "/usuarios/:id",
    "title": "5.- DELETE ELIMINAR USUARIOS POR ID",
    "name": "Categoria_5",
    "group": "1.-_USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico Usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'El Usuario se ha eliminado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'El Usuario no se ha eliminado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/usuario.java",
    "groupTitle": "1.-_USUARIO"
  },
  {
    "type": "get",
    "url": "/PROVEEDORES/",
    "title": "1.- GET PROVEEDORES",
    "name": "Categoria_1",
    "group": "2.-_PROVEEDORES",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id Unico de Proveedor .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Proveedor Unico.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Proveedor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'PROVEEDOR no disponible'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/proveedor.java",
    "groupTitle": "2.-_PROVEEDORES"
  },
  {
    "type": "get",
    "url": "/provedores/:id",
    "title": "2.- GET USUARIO POR ID",
    "name": "Categoria_2",
    "group": "2.-_PROVEEDORES",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico de usuarios.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico de Proveedor .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Del Proveedor .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Del Proveedor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' \t=> 'error',\n 'code'\t\t=> 404,\n 'message' \t=> 'usuarios no disponible'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/proveedor.java",
    "groupTitle": "2.-_PROVEEDORES"
  },
  {
    "type": "post",
    "url": "/Proveedor",
    "title": "3.-POST INSERTAR USUARIO",
    "name": "Categoria_3",
    "group": "2.-_PROVEEDORES",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id De Proveedor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre de Proveedor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Proveedor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n 'status' => 'success',\n 'code'\t => 200,\n 'message' => 'Proveedor creada correctamente'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' => 'error',\n 'code'\t => 404,\n 'message' => 'El Proveedor NO se ha creado'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/proveedor.java",
    "groupTitle": "2.-_PROVEEDORES"
  },
  {
    "type": "put",
    "url": "/Proveedor/:id",
    "title": "4.- PUT ACTUALIZAR PROVEEDOR POR ID",
    "name": "Categoria_4",
    "group": "2.-_PROVEEDORES",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico de usuarios.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico de Proveedor .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Del Proveedor .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Del Proveedor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'Se ha actualizado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'El Proveedor no se ha actualizado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/proveedor.java",
    "groupTitle": "2.-_PROVEEDORES"
  },
  {
    "type": "delete",
    "url": "/Proveedor/:id",
    "title": "5.- DELETE ELIMINAR USUARIOS POR ID",
    "name": "Categoria_5",
    "group": "2.-_PROVEEDORES",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico Proveedor.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'El Proveedor se ha eliminado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'El Proveedor no se ha eliminado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/proveedor.java",
    "groupTitle": "2.-_PROVEEDORES"
  },
  {
    "type": "get",
    "url": "/Clientes",
    "title": "1.- GET CLIENTE",
    "name": "Categoria_1",
    "group": "3.-_CLIENTE",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico del Cliente .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Nit",
            "description": "<p>Nit del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Fecha",
            "description": "<p>Fecha De Registro Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'Cliente no disponible'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Cliente.java",
    "groupTitle": "3.-_CLIENTE"
  },
  {
    "type": "get",
    "url": "/clientes/:id",
    "title": "2.- GET CLIENTES POR ID",
    "name": "Categoria_2",
    "group": "3.-_CLIENTE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico del Cliente .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Nit",
            "description": "<p>Nit del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Fecha",
            "description": "<p>Fecha De Registro Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' \t=> 'error',\n 'code'\t\t=> 404,\n 'message' \t=> 'Cliente no disponible'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Cliente.java",
    "groupTitle": "3.-_CLIENTE"
  },
  {
    "type": "post",
    "url": "/clientes",
    "title": "3.-POST INSERTAR USUARIO",
    "name": "Categoria_3",
    "group": "3.-_CLIENTE",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Nit",
            "description": "<p>Nit del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Fecha",
            "description": "<p>Fecha De Registro Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n 'status' => 'success',\n 'code'\t => 200,\n 'message' => 'Cliente creada correctamente'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' => 'error',\n 'code'\t => 404,\n 'message' => 'El Cliente NO se ha creado'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Cliente.java",
    "groupTitle": "3.-_CLIENTE"
  },
  {
    "type": "put",
    "url": "/Clientes/:id",
    "title": "4.- PUT ACTUALIZAR CLIENTES POR ID",
    "name": "Categoria_4",
    "group": "3.-_CLIENTE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico del Cliente .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Nit",
            "description": "<p>Nit del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Telefono",
            "description": "<p>Telefono Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Fecha",
            "description": "<p>Fecha De Registro Del Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'Se ha actualizado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'El Cliente no se ha actualizado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Cliente.java",
    "groupTitle": "3.-_CLIENTE"
  },
  {
    "type": "delete",
    "url": "/Clientes/:id",
    "title": "5.- DELETE ELIMINAR CLIENTES POR ID",
    "name": "Categoria_5",
    "group": "3.-_CLIENTE",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico Cliente.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'El cliente se ha eliminado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'El Cliente no se ha eliminado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Cliente.java",
    "groupTitle": "3.-_CLIENTE"
  },
  {
    "type": "get",
    "url": "/compra",
    "title": "1.- GET COMPRA PRODUCTO",
    "name": "Categoria_1",
    "group": "4.-_COMPRA_PRODUCTO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Compra Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Compra",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdProveedor",
            "description": "<p>Llave foranea de Proveedor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'Compra no disponible'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Compra.java",
    "groupTitle": "4.-_COMPRA_PRODUCTO"
  },
  {
    "type": "get",
    "url": "/compras/:id",
    "title": "2.- GET COMPRA POR ID",
    "name": "Categoria_2",
    "group": "4.-_COMPRA_PRODUCTO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico del Compra Producto .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Compra Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Compra",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdProveedor",
            "description": "<p>Llave foranea de Proveedor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' \t=> 'error',\n 'code'\t\t=> 404,\n 'message' \t=> 'Compra no disponible'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Compra.java",
    "groupTitle": "4.-_COMPRA_PRODUCTO"
  },
  {
    "type": "post",
    "url": "/compras",
    "title": "3.-POST INSERTAR COMPRA",
    "name": "Categoria_3",
    "group": "4.-_COMPRA_PRODUCTO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Compra Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Compra",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdProveedor",
            "description": "<p>Llave foranea de Proveedor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n 'status' => 'success',\n 'code'\t => 200,\n 'message' => 'Compra creada correctamente'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' => 'error',\n 'code'\t => 404,\n 'message' => 'Compra NO se ha creado'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Compra.java",
    "groupTitle": "4.-_COMPRA_PRODUCTO"
  },
  {
    "type": "put",
    "url": "/compras/:id",
    "title": "4.- PUT ACTUALIZAR COMPRAS POR ID",
    "name": "Categoria_4",
    "group": "4.-_COMPRA_PRODUCTO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico del Compra Producto .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Compra Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Compra",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdProveedor",
            "description": "<p>Llave foranea de Proveedor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'Se ha actualizado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'Compra no se ha actualizado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Compra.java",
    "groupTitle": "4.-_COMPRA_PRODUCTO"
  },
  {
    "type": "delete",
    "url": "/compras/:id",
    "title": "5.- DELETE ELIMINAR COMPRAS POR ID",
    "name": "Categoria_5",
    "group": "4.-_COMPRA_PRODUCTO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico Compra.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'La Compra se ha eliminado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'La Compra no se ha eliminado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Compra.java",
    "groupTitle": "4.-_COMPRA_PRODUCTO"
  },
  {
    "type": "get",
    "url": "/venta",
    "title": "1.- GET VENTA PRODUCTO",
    "name": "Categoria_1",
    "group": "5.-_VENTA_PRODUCTO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Compra Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Venta",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdCliente",
            "description": "<p>Llave foranea de Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'Venta no disponible'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/venta.java",
    "groupTitle": "5.-_VENTA_PRODUCTO"
  },
  {
    "type": "get",
    "url": "/ventas/:id",
    "title": "2.- GET VENTAS POR ID",
    "name": "Categoria_2",
    "group": "5.-_VENTA_PRODUCTO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico del venta Producto .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Venta Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Venta",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdCliente",
            "description": "<p>Llave foranea de Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"status\": \"success\",\n      \"code\": \"200\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' \t=> 'error',\n 'code'\t\t=> 404,\n 'message' \t=> 'Venta no disponible'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/venta.java",
    "groupTitle": "5.-_VENTA_PRODUCTO"
  },
  {
    "type": "post",
    "url": "/ventas",
    "title": "3.-POST INSERTAR VENTAS",
    "name": "Categoria_3",
    "group": "5.-_VENTA_PRODUCTO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Compra Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Venta",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdCliente",
            "description": "<p>Llave foranea de Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n 'status' => 'success',\n 'code'\t => 200,\n 'message' => 'Venta creada correctamente'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n 'status' => 'error',\n 'code'\t => 404,\n 'message' => 'Venta NO se ha creado'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/venta.java",
    "groupTitle": "5.-_VENTA_PRODUCTO"
  },
  {
    "type": "put",
    "url": "/ventas/:id",
    "title": "4.- PUT ACTUALIZAR VENTAS POR ID",
    "name": "Categoria_4",
    "group": "5.-_VENTA_PRODUCTO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Venta Producto .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id Unico Venta Producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Fecha_Venta",
            "description": "<p>Registro de fecha Compra.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre_Producto",
            "description": "<p>Nombre Del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Exitencia",
            "description": "<p>Cuanto es la cantidad del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Cantidad",
            "description": "<p>Cantidad requeridad del producto .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Precio",
            "description": "<p>Precio del Producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdCliente",
            "description": "<p>Llave foranea de Cliente.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "IdUsuario",
            "description": "<p>Llave foranea de Usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'Se ha actualizado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'Venta no se ha actualizado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/venta.java",
    "groupTitle": "5.-_VENTA_PRODUCTO"
  },
  {
    "type": "delete",
    "url": "/ventas/:id",
    "title": "5.- DELETE ELIMINAR VENTAS POR ID",
    "name": "Categoria_5",
    "group": "5.-_VENTA_PRODUCTO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID unico VENTAS.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n  'status' \t=> 'success',\n  'code'\t\t=> 200,\n  'message' \t=> 'La venta se ha eliminado correctamente!!'\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  'status' \t=> 'error',\n  'code'\t\t=> 404,\n  'message' \t=> 'La Venta no se ha eliminado!!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/venta.java",
    "groupTitle": "5.-_VENTA_PRODUCTO"
  }
] });
