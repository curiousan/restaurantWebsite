import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule , TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { Http, BrowserXhr } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuListService } from './menu-list.service';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    ReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWkXiYbw_MMP_1f_jTTAo9M88gyWIFQik'
    })



  ],
  providers: [MenuListService, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
