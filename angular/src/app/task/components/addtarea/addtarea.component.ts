import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import Utils from '../../../helpers/utils';


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
    fecha: new FormControl(''),
    estado: new FormControl(''),
    user_id: new FormControl(''),
  });

  constructor(public dialog: MatDialog,private http: HttpClient,public loader: LoadingService, private router: Router,
    private toastr: ToastrService) { }

    

  ngOnInit(): void {
  }


  submit(): void {
    


    this.loader.show();


    this.StorePromise().then((data:any) => {

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



  
  StorePromise() {
  
  
    const userData = Utils.jsonData('dataUser');
  
  
    let formData = this.tareaForm.value;
    var user_id = userData.id.toString();
    formData.user_id = user_id;
  
  
    // Configurar los encabezados
    const headers = new HttpHeaders()
      .set('Licencia', Utils.Licencia)
      .set('Content-Type', 'application/json');
  
    // Hacer la solicitud HTTP POST
    return this.http.post(Utils.api_ + 'store', formData, { headers }).toPromise();
  }
  



  

}


