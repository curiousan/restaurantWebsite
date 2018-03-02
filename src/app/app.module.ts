import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule , TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { Http, BrowserXhr } from '@angular/http';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from './../environments/environment';
import { BeverageComponent } from './beverage/beverage.component';
import { AlaCarteComponent } from './ala-carte/ala-carte.component';

import { DishesComponent } from './dishes/dishes.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    DishesComponent
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
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()

  ],
  providers: [ WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
