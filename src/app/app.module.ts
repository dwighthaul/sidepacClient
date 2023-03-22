import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailComponent } from './component/demande/detail/detail.component';
import { OngletsComponent } from './component/demande/onglets/onglets.component';
import { ButtonsComponent } from './component/form/buttons/buttons.component';
import { ListeDemandeComponent } from './component/liste-demande/liste-demande.component';
import { DebugComponent } from './component/utils/debug/debug.component';
import { AngulardefaultComponent } from './default/angulardefault/angulardefault.component';
import { WorkflowComponent } from './component/demande/workflow/workflow.component';
import { NavigationComponent } from './component/structure/navigation/navigation.component';
import { DashboardComponent } from './component/demande/structure/dashboard/dashboard.component';
import { CreationComponent } from './pages/demande/creation/creation.component';
import { ListeComponent } from './pages/demande/liste/liste.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RechercheTiersComponent } from './component/demande/structure/recherche-tiers/recherche-tiers.component';

@NgModule({
  declarations: [
    AppComponent,
    AngulardefaultComponent,
    ListeDemandeComponent,
    DebugComponent,
    DetailComponent,
    ButtonsComponent,
    OngletsComponent,
    WorkflowComponent,
    NavigationComponent,
    DashboardComponent,
    CreationComponent,
    ListeComponent,
    AccueilComponent,
    RechercheTiersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'demande_creation', component: CreationComponent },
      { path: 'demande_liste', component: ListeDemandeComponent },

    ])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
