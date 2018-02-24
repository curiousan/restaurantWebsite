import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subscription: Subscription;

  title = 'app';
  constructor(private translate: TranslateService){
    translate.addLangs(["en","fi"]);
    translate.setDefaultLang("en");
    let browserlang = translate.getBrowserLang();
    translate.use(browserlang ='en') ? browserlang : 'fi'; 

  }

  changeLanguage(lang){
    this.translate.use(lang);
  }

/*  ngOnInit(){
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let locale = param['locale'];
        if(locale !== undefined){
          this.translate.use(locale);
        }
      }
    )
  }

  ngOnDistroy(){
    this.subscription.unsubscribe();
  } */

}
