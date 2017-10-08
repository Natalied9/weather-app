import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule,
        MdCardModule } from '@angular/material';
import { WeatherService } from './weather.service';
import { expressService } from './express-service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    HttpModule
  ],
  providers: [WeatherService,
  expressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
