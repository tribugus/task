import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Utils from '../../../helpers/utils';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../services/task.service'; 
import { Router} from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})

export class ShowComponent  implements OnInit {


  constructor(private taskService: TaskService,private http: HttpClient,private toastr: ToastrService,private router: Router) { }


  task: any;
  taskSubscription: any;

  


  ngOnInit(): void {

    this.taskService.getTask().pipe(take(1)).subscribe((task) => {
      if (task) {
        this.task = task;
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






}
