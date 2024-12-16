<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TareasLista extends Model
{
    use HasFactory;

    // No es necesario definir la tabla ya que Laravel asumirá el nombre plural
    // protected $table = 'tareas_listas'; // Solo necesario si la tabla no sigue la convención de nombres

    // La tabla no tiene campos asignables masivamente si solo es una tabla intermedia,
    // pero si necesitas, puedes definirlos.
    protected $fillable = [
        'tarea_id',
        'lista_id',
    ];

    // Relación con la tabla 'tarea' (una tarea puede estar en muchas listas)
    public function tarea()
    {
        return $this->belongsTo(Tarea::class, 'tarea_id');
    }

    // Relación con la tabla 'lista' (una lista puede tener muchas tareas)
    public function lista()
    {
        return $this->belongsTo(Lista::class, 'lista_id');
    }
}
