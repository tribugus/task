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
