<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TareaEtiqueta extends Model
{
    use HasFactory;

    // No es necesario declarar la tabla, pero si se desea hacerlo, se puede especificar
    protected $table = 'tarea_etiqueta';

    // No es necesario declarar los campos en $fillable si no se va a hacer asignación masiva en esta tabla intermedia.
    protected $fillable = [
        'tarea_id',
        'etiqueta_id',
    ];

    // Relación con el modelo Tarea (cada registro en tarea_etiqueta pertenece a una tarea)
    public function tarea()
    {
        return $this->belongsTo(Tarea::class, 'tarea_id');
    }

    // Relación con el modelo Etiqueta (cada registro en tarea_etiqueta pertenece a una etiqueta)
    public function etiqueta()
    {
        return $this->belongsTo(Etiqueta::class, 'etiqueta_id');
    }
}
