import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskRoutingModule  } from './task/task-routing.module';
import { TaskModule } from './task/task.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskRoutingModule,
    AppRoutingModule,
    TaskModule,


    //RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }