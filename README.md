# task
tasks
https://material.angular.io/components/input/overview
https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/


Proyecto Full Stack: Laravel 8.2.12 + SQLite + Angular
Este proyecto es una aplicación Full Stack que utiliza Laravel 8.2.12 como backend (API RESTful) con SQLite como base de datos, y Angular como frontend.

Requisitos previos
Backend (Laravel 8.2.12 con SQLite)
PHP >= 8.2.12
Composer (para manejar dependencias de PHP)
SQLite (base de datos ligera usada en el backend)
Frontend (Angular)
Node.js >= 22.11.0 (tienes v22.11.0 instalada, por lo que es totalmente compatible)
npm >= 6.x

1. Backend (Laravel con SQLite)
Paso 1: Clonar el repositorio
Primero, clona el proyecto:

Copiar código
git clone https://github.com/tribugus/task.git
cd task
composer install --no-dev
cp .env.example .env

php artisan key:generate
php artisan migrate
php artisan db:seed

---------------------------------------------------------

2. Frontend (Angular)
Paso 1: Cambiar al directorio del angular

Copiar código
cd ./angular

npm install

en el proyecto buscar src/app/helpers/Utils.ts, y cambiar la api por la que se requiera ejemplo :
    static api_ = "http://localhost/task/public/api/";

correr el front con : ng serve

----------------------------------------------------------

prueba el sistema con los siguientes usuarios:

usuario : usuario1
password : 123

usuario : usuario2
password : 123

usuario : usuario3
password : 123