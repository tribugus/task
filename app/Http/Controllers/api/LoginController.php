<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Usuario;

class LoginController extends Controller
{
    // Método para manejar el login
    public function login(Request $request)
    {
        // Validación de los datos de entrada
        $request->validate([
            'nikname' => 'required|string',
            'password' => 'required|min:3',
        ]);

        // Intentar encontrar al usuario por nikname
        $user = Usuario::where('nikname', $request->nikname)->first();

        if ($user && Hash::check($request->password, $user->password)) {
 

            return response()->json([
                'status' => 'success',
                'message' => 'Login exitoso',
                'data' => $user,
            ], 200);
        }

 
        return response()->json([
            'status' => 'error',
            'message' => 'Credenciales incorrectas',
        ], 200);
    }
}
