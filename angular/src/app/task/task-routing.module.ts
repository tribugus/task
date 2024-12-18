import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { AddtareaComponent } from './components/addtarea/addtarea.component';
import { EditComponent } from './components/edit/edit.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthGuard2 } from './auth/auth.guard2';


const routes: Routes = [

  { path:'login', component: LoginComponent,canActivate:[AuthGuard2] },
  
  { 
    path: 'dashboard', 
    component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: '', component: InicioComponent },
      { path: 'tareas', component: TareasComponent },
      { path: 'add', component: AddtareaComponent },
      { path: 'edit', component: EditComponent },

    ]

  },
 

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
