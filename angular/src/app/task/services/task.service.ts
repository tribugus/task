import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
 
  private selectedTask = new BehaviorSubject<any>(null);

  constructor() {}


  updateTask(task: any): void {
    const currentTask = this.selectedTask.value;

    if (currentTask && currentTask.id === task.id) {
      this.selectedTask.next({ ...currentTask, ...task });
    } else {

      this.selectedTask.next(task);
    }
  }

  getTask() {
    return this.selectedTask.asObservable();
  }
}
