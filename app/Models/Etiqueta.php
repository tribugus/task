<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etiqueta extends Model
{
    use HasFactory;

    // Definir la tabla si no sigue la convención de nombres
    protected $table = 'etiqueta';

    // Campos que pueden ser asignados masivamente
    protected $fillable = [
        'nombre',
        'usuario_id',
    ];

    // Relación con el modelo Usuario (una etiqueta pertenece a un usuario)
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }
}
