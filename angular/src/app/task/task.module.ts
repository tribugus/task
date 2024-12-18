import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MatSliderModule } from '@angular/material/slider';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule


import { TaskRoutingModule } from './task-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/resources/header/header.component';
import { FooterComponent } from './components/resources/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { AddtareaComponent } from './components/addtarea/addtarea.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    TareasComponent,
    AddtareaComponent,
    EditComponent,
    ShowComponent,
    
  ],
  imports: [


    MatSliderModule,
    CommonModule,
    TaskRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),

    FormsModule,
    ReactiveFormsModule,
    
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,

  ]
})
export class TaskModule { }
