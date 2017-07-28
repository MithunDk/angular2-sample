import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class HttpService {

  http: Http;
  getData(){
    var data= this.http.get('https://anguar2course.firebaseio.com/products.json' );
    console.log(data);
    return data;
  }
  constructor( http:Http) {
    this.http = http;
  }

}
