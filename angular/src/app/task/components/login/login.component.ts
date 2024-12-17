import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import Utils from '../../../helpers/utils';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { LoadingService } from '../../services/loading.service';
import { Router} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ToastrService } from 'ngx-toastr';


interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading$ = this.loader.loading$;
  user:string="";
  password:string="";

 
  
  constructor(public dialog: MatDialog,private auth: AuthService,
    private http: HttpClient,public loader: LoadingService, private router: Router,
    private toastr: ToastrService) { }

  

  ngOnInit(): void {


  }



  loginUser(): void {

    if(this.user==""||this.password==""){
      this.toastr.error('Complete los campos','', { timeOut: 3000, });
      return;
    }
    this.loader.show();

    
    this.LoginPromise().then((data2:any) => {



    

      if(data2.status=="success"){

        sessionStorage.setItem('_nghost-upu-c16', Utils.encode(JSON.stringify(data2.data)));
        this.toastr.success(data2.message+', bienvenido '+data2.data.nikname.toLowerCase(),'', { timeOut: 3000, });
        this.auth.isLoggedIn = true;
        this.loader.hide();
        this.router.navigate(['/dashboard']);

      }
      

      if(data2.status=="error"||data2.status=="fail"){
        this.toastr.error(data2.message,'', { timeOut: 3000, });
        this.user = "";
        this.password = "";
        this.loader.hide();
      }

      

    }).catch((e) => {
      console.log(e);
    });
    
  }


  
  LoginPromise() {
    const headers= new HttpHeaders()
    .set('Licencia', Utils.Licencia)
    .set('content-type', 'application/json');

    const data = {
      nikname: this.user,
      password: this.password
    };
    return this.http.post(Utils.api_ + 'login',data,{ 'headers': headers }
    ).toPromise();
  }


  
  





  cambiar(event:any,tipe:string): void {
    if(tipe=="user")
      this.user = event.target.value;
    if(tipe=="password")
      this.password = event.target.value.trim();
  }

  
  addToKeywords(): void{
    this.loginUser();
  }


  

}