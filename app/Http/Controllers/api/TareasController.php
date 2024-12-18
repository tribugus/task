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

    public function store(Request $request)
    {




        try {
            // Crear una nueva tarea con los datos recibidos
            $tarea = new Tarea();
            $tarea->usuario_id = $request->user_id;
            $tarea->titulo = $request->titulo;
            $tarea->descripcion = $request->desc;
            $tarea->fecha_inicio = $request->fecha;
            $tarea->fecha_vencimiento = $request->fecha;
            $tarea->prioridad = $request->priori;
            $tarea->estado = $request->estado;
            $tarea->save();

   
            return response()->json([
                'status' => 'success',
                'message' => 'Tarea creada exitosamente',
                'data' => $tarea,
            ], 200);  // Código 201 para recurso creado
        } catch (Exception $e) {
            // Capturar cualquier excepción y retornar el mensaje de error
            return response()->json([
                'status' => 'error',
                'message' => 'Error al crear tarea: ' . $e->getMessage(),
            ], 200);  // Código 500 para error interno del servidor
        }


        
        
    }



    public function destroy($id)
    {
        try {
           
            $tarea = Tarea::findOrFail($id);

            $tarea->delete();

  
            return response()->json([
                'status' => 'success',
                'message' => 'Tarea eliminada exitosamente.'
            ], 200);

        } catch (\Exception $e) {

            return response()->json([
                'status' => 'error',
                'message' => 'Hubo un problema al eliminar la tarea: ' . $e->getMessage()
            ], 200);
        }
    }



    
    
    public function update(Request $request, $id)
    {

   
        
        try {
            $tarea = Tarea::find($id);
    
            if (!$tarea) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Tarea no encontrada '.$id
                ], 200);
            }
    
            $tarea->usuario_id = $request->user_id;
            $tarea->titulo = $request->titulo;
            $tarea->descripcion = $request->desc;
            $tarea->fecha_inicio = $request->fecha;
            $tarea->fecha_vencimiento = $request->fecha;
            $tarea->prioridad = $request->priori;
            $tarea->estado = $request->estado;
    
            $tarea->save();
    
            return response()->json([
                'status' => 'success',
                'message' => 'Tarea actualizada exitosamente.'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Hubo un problema al actualizar la tarea: ' . $e->getMessage()
            ], 200);
        }
    }
    




}
