import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Router, ActivatedRoute } from '@angular/router';
import {OnInit, OnDestroy } from '@angular/core';
import Instafeed from 'instafeed.js';
import { WebService } from './web.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'app';
  posts:[any];

  constructor(private translate: TranslateService, private webService: WebService){
    this.posts = webService.getImages();
    translate.addLangs(['en', 'fi']);
    translate.setDefaultLang('en');
    let browserlang = translate.getBrowserLang();
    translate.use(browserlang);
  }


  changeLanguage(lang) {
    this.translate.use(lang);
  }

 OnInit() {


  }


}
