import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import Utils from '../../../helpers/utils';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../services/task.service'; 
import { Router} from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})

export class ShowComponent  implements OnInit {


  constructor(private taskService: TaskService,private http: HttpClient,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {


  }


}
