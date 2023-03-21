import { Dashboard } from './../../model/structure/Dashboard';
import { Component, Injectable, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Iban } from 'src/app/model/Iban';
import { ListeDonnees } from 'src/app/model/listeDonnees';

import { DemandeDTO } from './../../model/dto/demandeDTO.model';
import { Demande, Service } from './../../model/sidepa';
import { BackService } from './../../service/back.service';

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css']
})
@Injectable()
export class ListeDemandeComponent implements OnInit {

  public demandes!: DemandeDTO[];
  public demandesAffichees!: DemandeDTO[];
  public demande!: Demande | null;
  public listeDonnees = new ListeDonnees();
  public dashboards!: Dashboard[];

  public filtreRecherche !: string;

  @ViewChild('detailDemandeModale')
  public detailDemandeModale!: TemplateRef<any>;

  constructor(private backService: BackService, private modalService: NgbModal, config: NgbModalConfig) {
    this.creerDashboardInit();
    config.backdrop = 'static';
    this.backService.recuperationDemandesSimple().subscribe((data: DemandeDTO[]) => {
      this.demandes = data;
      this.demandesAffichees = data;
      this.calculerDashboard();
    });

  }

  ngOnInit(): void {

  }

  calculerDashboard() {
    this.dashboards.forEach((dashboard) => {
      dashboard.nombre = 0;
    })

    this.demandes.forEach((demande) => {
      this.dashboards.forEach((dashboard) => {
        if (dashboard.codes.includes(demande.dernierStatusCode)) {
          dashboard.nombre++;
        }
      })
    });
  }

  filtrerDonnees() {
    console.log("Filtre avec la valeur " + this.filtreRecherche);
    if (this.demandesAffichees) {
      this.demandesAffichees = this.demandes.filter((demande) => {

        let filter = this.filtreRecherche.toUpperCase();
        return (demande.dernierStatus.toUpperCase().match(filter)
          || demande.nomTiers.toUpperCase().match(filter)
          || filter.includes(demande.id + "")
          || demande.iban.toUpperCase().match(filter)
          || demande.dernierStatus.toUpperCase().match(filter)
          || demande.description.toUpperCase().match(filter)
          || demande.service.toUpperCase().match(filter));
      })

    }
  }

  private creerDashboardInit() {
    let dashboardCree = new Dashboard("Crée", ["CRE"]);
    let dashboardEnCours = new Dashboard("En cours", ["ESH", "VSH"]);
    let dashboardPaye = new Dashboard("Payé", ["PAY"]);
    this.dashboards = [dashboardCree, dashboardEnCours, dashboardPaye];
  }

  afficherDetail(idDemande: number) {

    this.modalService.open(this.detailDemandeModale).result.then(
      (result) => {
        console.log("result", result);
      },
      (reason) => {
        this.demande = null;
      }
    );
    this.backService.recuperationDemandeDetail(idDemande, (demande: Demande) => {
      this.listeDonnees.ibans = [new Iban(demande.codeIban, demande.iban)];
      this.listeDonnees.services = [demande.service];
      this.demande = demande

    })
  }

}
