import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addtarea',
  templateUrl: './addtarea.component.html',
  styleUrls: ['./addtarea.component.scss']
})
export class AddtareaComponent implements OnInit {



  tareaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Creamos el formulario con sus validaciones
    this.tareaForm = this.fb.group({
      usuario_id: ['', Validators.required],
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]],
      fecha_inicio: ['', Validators.required],
      fecha_vencimiento: ['', Validators.required],
      prioridad: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.tareaForm.valid) {
      console.log('Formulario Enviado:', this.tareaForm.value);
      // Aquí puedes hacer una llamada HTTP para registrar la tarea
    } else {
      console.log('Formulario no válido');
    }
  }

  
  ngOnInit(): void {
  }



}


/*

tareaForm: FormGroup;

  constructor(private fb: FormBuilder, private tareaService: TareaService) {
    // Definir el formulario con validaciones
    this.tareaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]],
      fecha_vencimiento: ['', Validators.required],
      prioridad: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.tareaForm.valid) {
      // Obtener los valores del formulario
      const tareaData = this.tareaForm.value;

      // Llamar al servicio para enviar los datos al servidor
      this.tareaService.crearTarea(tareaData).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          console.log('Tarea creada con éxito:', response);
          alert('Tarea creada con éxito');
        },
        (error) => {
          // Manejar errores
          console.error('Error al crear tarea:', error);
          alert('Error al crear tarea');
        }
      );
    } else {
      alert('Por favor complete todos los campos correctamente.');
    }
  }

*/