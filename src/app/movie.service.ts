import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class movieService {
        foo: string = "Hello World";
        apiKey: string = "922279a192b8268ef5e427077ea63871"; 
  constructor( public http: Http ) { }
  
        getmovieData( searchValue ) {
                                   // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
                return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + searchValue)
                .map( res => res.json())
        }
        
        //postmovie(){
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
