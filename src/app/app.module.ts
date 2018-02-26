import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule , TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuListService } from './menu-list.service';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';

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



  ],
  providers: [MenuListService,WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
