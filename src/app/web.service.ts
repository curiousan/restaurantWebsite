import { Injectable, OnInit, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentType } from '@angular/http/src/enums';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WebService {
  ROOT_URL = 'https://api.instagram.com/v1/users/5029400431/media/recent';
  CLIENT_ID = '5029400431.347fa4c.4a9b17a36312417e8c4643bfbcf511db';
  USER_ID = '5029400431';
  ACCESS_TOKEN = '5029400431.347fa4c.4a9b17a36312417e8c4643bfbcf511db';
  imagesUrl: any[] = [];

  constructor(private http: HttpClient) {
    console.log('web service initialized');
   }

    public getCars(): void {
     this.http.get('https://api.github.com/users/curiousan').subscribe(data => {
     },
     err => {
       console.log('Error');
     }
    );
   }

   public getImage(): string[] {
     // tslint:disable-next-line:no-unused-expression

    this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='+this.ACCESS_TOKEN+'&count=2').subscribe(data =>{
      data.data.forEach(element => {
        this.imagesUrl.push(element.images.low_resolution.url);
      });
     },
    err => {
      console.log('Error');
    });
    return this.imagesUrl;
   }

}
