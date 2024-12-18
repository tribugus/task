import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Creamos un BehaviorSubject para almacenar el objeto `task`
  private selectedTask = new BehaviorSubject<any>(null);

  constructor() {}

  // Método para establecer el objeto `task` en el servicio
  setTask(task: any): void {
    this.selectedTask.next(task);  // Establecemos el valor del objeto task
  }

  // Método para obtener el objeto `task` desde cualquier componente
  getTask() {
    return this.selectedTask.asObservable();  // Nos suscribimos para obtener el objeto
  }
}
