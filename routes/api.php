<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Api\LoginController;


Route::get('/user', function () {
    return response()->json(['name' => 'John Doe']);
});

Route::post('login', [LoginController::class, 'login']);

