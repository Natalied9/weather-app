import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialModule } from './modules/material.module';
import {
  MdToolbarModule, 
  MdButtonModule,
  MdFormFieldModule, 
  MdInputModule, 
  MdCardModule,
  MD_PLACEHOLDER_GLOBAL_OPTIONS,
  MdDatepickerModule,
   MdNativeDateModule,
   // added this here a service for the date picker and line 70 --Peter
   MdDatepickerIntl
}  from '@angular/material';
import { WeatherService } from './weather.service';
import { UserService } from './user.service';
import { expressService } from './express-service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FormsModule, 
        ReactiveFormsModule, 
        NgModel } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent, MainComponent
  ],
  imports: [
    MdDatepickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    HttpModule,
    MdInputModule,
    MdFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
     MdNativeDateModule,
     MdButtonModule,
    RouterModule.forRoot([
   /*We define our routes here. The empty string below, in path "" is our base endpoint with nothing in it.
   Below is the component view that will load when the route changes. Remember in our app.component.html 
   <router-link></router-link> this is where those component's html is loaded to build our new view when the
   route changes. */
     {
       path: '',
       component: LoginComponent
       //https://material-routes-forms.stackblitz.io
     },
     {
       path: 'register',
       component: RegisterComponent
       //https://material-routes-forms.stackblitz.io/register
     },
      {
       path: 'main',
       component: MainComponent
       //https://material-routes-forms.stackblitz.io/lobby
     }

 ])],
  providers: [WeatherService,
  MdDatepickerIntl,
  expressService,
  UserService, {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'auto'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
