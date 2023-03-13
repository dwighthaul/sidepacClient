import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngulardefaultComponent } from './default/angulardefault/angulardefault.component';
import { ListeDemandeComponent } from './component/liste-demande/liste-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    AngulardefaultComponent,
    ListeDemandeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
