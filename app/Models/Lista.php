<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    use HasFactory;

    protected $table = 'lista';  // Define la tabla si no es plural

    protected $fillable = [
        'usuario_id',
        'nombre',
        'descripcion',
    ];

    // Relación con el modelo Usuario
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');  // Relación de "pertenece a" Usuario
    }
}
