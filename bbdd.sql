-- NubeAndo.COM - Educar es Compartir
--
-- @author: Angel Céspedes Quiroz
-- @Usuario: acq1305
-- @Web: https://www.nubeando.com
-- @Facebook: https://www.facebook.com/acq1305
-- @Skype: acq1305
-- @Linkedin: https://bo.linkedin.com/in/acq1305


CREATE DATABASE IF NOT EXISTS backendapi;
USE backendapi;

CREATE TABLE productos(
id			int(255) auto_increment not null,
nombre 		varchar(255),
description text,
precio		varchar(255),
imagen		varchar(255),
CONSTRAINT pk_productos PRIMARY KEY(id)
)ENGINE=InnoDb;