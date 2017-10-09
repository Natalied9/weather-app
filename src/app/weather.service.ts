import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class WeatherService {
        foo: string = "Hello World";
  constructor( public http: Http ) { }
  
        getWeatherData( searchValue ) {
                return this.http.get('https://api.wunderground.com/api/9759de9e6b2402b9/conditions/q/CA/' + searchValue + '.json')
                .map( res => res.json())
        }
        
        //postWeather(){
            //return this.http.post( this.ourUrl, {name: "f0obar", temp_f:77})
            // .map( data => data.json() )
        //}

// expressData() {
//         return this.http.post('https://ide.c9.io/jadtheparker/angular2', {"num": 10})
//         .map(function(res){
//                 return res.json()
//         })
//         }
}
