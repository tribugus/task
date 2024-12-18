import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import Utils from '../../../helpers/utils';
import { TaskService } from '../../services/task.service';
import { take } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {



  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    public loader: LoadingService,
    private router: Router,
    private toastr: ToastrService,
    private taskService: TaskService
  ) { }


  loading$ = this.loader.loading$;
  task: any;
  taskSubscription: any;

  tareaForm = new FormGroup({
    priori: new FormControl(''),
    titulo: new FormControl(''),
    desc: new FormControl(''),
    fecha: new FormControl(''),
    estado: new FormControl(''),
    user_id: new FormControl(''),
  });


  ngOnInit(): void {

    this.taskService.getTask().pipe(take(1)).subscribe((task) => {
      if (task) {
        this.task = task;

        this.tareaForm.patchValue({
          priori: task.prioridad,
          titulo: task.titulo,
          desc: task.descripcion,
          fecha: task.fecha_inicio,
          estado: task.estado,
          user_id: task.usuario_id,
        });


      } else {
        this.router.navigate(['/dashboard/tareas']);
      }
    });

  }


  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }



  submit(): void {

    //this.loader.show();

    this.UpdatePromise().then((data:any) => {

      console.log(data);

      if(data.status=="success"){

        this.loader.hide();
        this.toastr.success(data.message,'', { timeOut: 3000, });

        this.router.navigate(['/dashboard/tareas']);

      }
      
      if(data.status=="error"||data.status=="fail"){
        this.toastr.error(data.message,'', { timeOut: 3000, });
        this.loader.hide();
      }

    }).catch((e) => {
      console.log(e);
    });
    

  }
    

    
  UpdatePromise() {

    const userData = Utils.jsonData('dataUser');
    
    let formData = this.tareaForm.value;

    var user_id = userData.id.toString();

    formData.user_id = user_id;

    var task_id = this.task.id;
  
    const headers = new HttpHeaders()
      .set('Licencia', Utils.Licencia)
      .set('Content-Type', 'application/json');
    

    return this.http.put(Utils.api_ + 'tareas/' + task_id, formData, { headers }).toPromise();
  }
  




}
