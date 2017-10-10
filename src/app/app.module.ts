import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialModule } from './modules/material.module';
import { MdToolbarModule,
        MdCardModule, MdInputModule } from '@angular/material';
import { WeatherService } from './weather.service';
import { UserService } from './user.service';
import { expressService } from './express-service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FormsModule, 
        ReactiveFormsModule, 
        NgModel } from '@angular/forms';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    HttpModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path: '',
      component: AppComponent
      }
  ])
  ],
  providers: [WeatherService,
  expressService,
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
