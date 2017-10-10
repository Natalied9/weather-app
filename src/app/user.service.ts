import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    url: string = 'http://natalie-fall-2017-phortonssf.c9users.io:8080/api/AppUsers'; //double check the path
    constructor( public http: Http ) { }

    register( user ){ //second parameter user 
        return this.http.post ( this.url, user) //posts the user data to the above url 
        .map( res => res.json()) 
}
}