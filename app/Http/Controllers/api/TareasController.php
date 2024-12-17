<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Usuario;
use App\Models\Tarea;

class TareasController extends Controller
{
    // Método para manejar el login
    public function index($user_id)
    {

        $data = Tarea::where('usuario_id',$user_id)->get();

        return $data;
        
        
    }
}
