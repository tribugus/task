import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Utils from '../../../helpers/utils';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../services/task.service'; 


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {


  displayedColumns: string[] = ['titulo', 'descripcion', 'estado','actions'];
  dataSource = [];


  constructor(private taskService: TaskService,private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.dataPromise().then((data:any) => {

      this.dataSource = data;

    }).catch((e) => {
      console.log(e);
    });

  }


  
  dataPromise() {
    const headers= new HttpHeaders()
    .set('Licencia', Utils.Licencia)
    .set('content-type', 'application/json');

    const userData = Utils.jsonData('dataUser');

    return this.http.get(Utils.api_ + 'tareas/'+userData.id.toString(),{ 'headers': headers }
    ).toPromise();
  }


  
  deleteTask(task: any): void {


      const headers = new HttpHeaders().set('Licencia', Utils.Licencia).set('Content-Type', 'application/json');
      this.http.delete(Utils.api_ + 'tareas/' + task.id, { headers }).subscribe(
        () => {
          // Mostrar un mensaje de éxito
          this.toastr.success('Tarea eliminada con éxito', 'Éxito');
      
          this.dataSource = this.dataSource.filter((t: any) => t.id !== task.id);


        },
        error => {
          console.log(error);
          this.toastr.error('Error al eliminar la tarea', 'Error');
        }
      );
  
  }




  
  editTask(task: any): void {

    console.log('Tarea a editar:', task);
    // Establecemos el objeto `task` en el servicio
    this.taskService.setTask(task);
    // Redirigimos a la página de edición (por ejemplo, '/edit-task')
    //this.router.navigate(['/tarea/'+task.id.toString()]);

  
  }





}
