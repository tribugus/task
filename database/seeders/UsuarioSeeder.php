<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioSeeder extends Seeder
{
    public function run()
    {
        // Crea un usuario de ejemplo
        Usuario::create([
            'nikname' => 'usuario1',
            'email' => 'usuario1@example.com',
            'password' => Hash::make('123'),  // Encriptación de la contraseña
        ]);

        // Agrega más usuarios si lo deseas
        Usuario::create([
            'nikname' => 'usuario2',
            'email' => 'usuario2@example.com',
            'password' => Hash::make('123'),
        ]);

        Usuario::create([
            'nikname' => 'usuario3',
            'email' => 'usuario3@example.com',
            'password' => Hash::make('123'),
        ]);
    }
}
