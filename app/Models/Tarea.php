<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    use HasFactory;

    protected $table = 'tarea';  // Define la tabla si no es plural

    protected $fillable = [
        'usuario_id',
        'titulo',
        'descripcion',
        'fecha_inicio',
        'fecha_vencimiento',
        'prioridad',
        'estado',
    ];

    // Relación con el modelo Usuario
    public function usuario()
    {
        return $this->belongsTo(Usuario::class);  // Suponiendo que tienes un modelo Usuario
    }
}
