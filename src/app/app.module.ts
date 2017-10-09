import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule,
        MdCardModule, MdInputModule } from '@angular/material';
import { WeatherService } from './weather.service';
import { expressService } from './express-service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, NgModel} from '@angular/forms';
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
    FormsModule
  ],
  providers: [WeatherService,
  expressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
