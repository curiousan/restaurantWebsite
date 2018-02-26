import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WebService {
  ROOT_URL = 'https://api.instagram.com/v1/users/5029400431/media/recent';
  CLIENT_ID = '347fa4c0dd984f3ea622c2d3943ce7bb';

  constructor(private http: HttpClient) { }

  getImages(){

  }
}
