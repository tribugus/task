<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTareaTable extends Migration
{
    /**
     * Ejecutar la migración.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarea', function (Blueprint $table) {
            $table->id();  // Identificador único de la tarea, auto incremento
            $table->unsignedBigInteger('usuario_id');  // Rela
            $table->string('titulo')->nullable();  // Título d
            $table->text('descripcion')->nullable();  // Descr
            $table->dateTime('fecha_inicio')->nullable();
            $table->dateTime('fecha_vencimiento')->nullable();
            $table->string('prioridad', 10)->nullable();
            $table->string('estado', 15)->nullable(); 
            $table->timestamps();  // Agrega created_at y updated_at
        });
    }

    /**
     * Deshacer la migración.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tarea');
    }
}
