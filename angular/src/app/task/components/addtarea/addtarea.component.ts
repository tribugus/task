import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-addtarea',
  templateUrl: './addtarea.component.html',
  styleUrls: ['./addtarea.component.scss']
})
export class AddtareaComponent implements OnInit {


  loading$ = this.loader.loading$;

 
  tareaForm = new FormGroup({
    priori: new FormControl(''),
    titulo: new FormControl(''),
    desc: new FormControl(''),
  });

  constructor(public dialog: MatDialog,private http: HttpClient,public loader: LoadingService, private router: Router,
    private toastr: ToastrService) { }

    

  ngOnInit(): void {
  }


  submit(){
    
    var priori = this.tareaForm.get('priori')?.value
    var titulo = this.tareaForm.get('titulo')?.value
    var desc = this.tareaForm.get('desc')?.value

    console.log(priori);
    console.log(titulo);
    console.log(desc);



    












    
  }





}


