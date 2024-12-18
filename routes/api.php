<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\TareasController;


Route::get('/user', function () {
    return response()->json(['name' => 'John Doe']);
});

Route::get('/tareas/{id}',[TareasController::class, 'index']);

Route::post('login', [LoginController::class, 'login']);

Route::post('store', [TareasController::class, 'store']);

Route::delete('tareas/{id}', [TareasController::class, 'destroy']);

Route::put('/tareas/{id}', [TareasController::class, 'update']);