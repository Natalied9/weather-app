import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class expressService {
        foo: string = "Hello World";
  constructor( public http : Http) { }

        expressData() {
                return this.http.post(
                        'https://natalie-fall-2017-phortonssf.c9users.io/',
                        {num: 10}
                        )
                        .map( res => res.json())
        }
}