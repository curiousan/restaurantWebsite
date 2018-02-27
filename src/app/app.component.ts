import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Router, ActivatedRoute } from '@angular/router';
import {OnInit, OnDestroy } from '@angular/core';
import Instafeed from 'instafeed.js';
import { WebService } from './web.service';
import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'app';
  lat = 60.2177863;
  lng = 24.7721307;

  constructor(private translate: TranslateService, private webService: WebService){

    translate.addLangs(['en', 'fi']);
    translate.setDefaultLang('en');
    let browserlang = translate.getBrowserLang();
    translate.use(browserlang);
  }


  changeLanguage(lang) {
    this.translate.use(lang);
  }

 ngOnInit() {
  this.webService.getCars();
  this.webService.getImage();
}


}
