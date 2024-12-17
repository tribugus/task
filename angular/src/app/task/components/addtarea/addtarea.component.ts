import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addtarea',
  templateUrl: './addtarea.component.html',
  styleUrls: ['./addtarea.component.scss']
})
export class AddtareaComponent implements OnInit {


  loading$ = this.loader.loading$;

  selectedPrioridad: string | undefined;
  
  
  constructor(public dialog: MatDialog,private http: HttpClient,public loader: LoadingService, private router: Router,
    private toastr: ToastrService) { }

    

  ngOnInit(): void {
  }


  submit(){


    var title = document.getElementsByName("titulo") as NodeListOf<HTMLInputElement>;
    var desc = document.getElementsByName("desc") as NodeListOf<HTMLInputElement>;
    var fecha = document.getElementsByName("fecha") as NodeListOf<HTMLInputElement>;
    var priori = document.getElementsByName("priori") as NodeListOf<HTMLSelectElement>;
    //var priori = document.getElementsByName("priori")[0] as any;


    console.log(priori);



    












    
  }





}


