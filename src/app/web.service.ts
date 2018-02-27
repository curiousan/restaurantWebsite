import { Injectable, OnInit, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentType } from '@angular/http/src/enums';

@Injectable()
export class WebService {
  ROOT_URL = 'https://api.instagram.com/v1/users/5029400431/media/recent';
  CLIENT_ID = '347fa4c0dd984f3ea622c2d3943ce7bb';


  constructor(private http: HttpClient) {
    console.log('web service initialized');
   }


  ngOnInit() {

  }

    public getCars(): void {
     this.http.get('https://api.github.com/users/curiousan').subscribe(data => {
       console.log(data.images.thumbnail);
     },
     err => {
       console.log('Error');
     }
    );
   }

   public getImage(): void {
     this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=4280805607ab4c7fbe3b81927a591170').subscribe(data =>{
       console.log(data);
     },
    err => {
      console.log('Error');
    });
   }
}
