import { Onglet } from './../../../model/structure/Onglet';
import { ListeDonnees } from './../../../model/listeDonnees';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Tiers, Demande } from 'src/app/model/sidepa';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  onglets: Onglet[];
  ongletActif !: Onglet;
  tiersSelectionneRecherche !: Tiers;

  @Input()
  estEditable!: boolean;

  @Input()
  demande!: Demande;

  @Input()
  listeDonnees!: ListeDonnees;

  @ViewChild('rechercheTiersModale')
  public rechercheTiersModale!: TemplateRef<any>;
  modaleReference: NgbModalRef;

  constructor(private modalService: NgbModal, config: NgbModalConfig) {

    this.onglets = [new Onglet(1, "entete", "Entete"), new Onglet(2, "ligne", "Lignes"), new Onglet(3, "wf", "Workflow")]

  }

  ngOnInit(): void {
  }

  afficherRechercheTiers() {
    console.log("afficherRechercheTiers");
    this.modaleReference = this.modalService.open(this.rechercheTiersModale);
    this.modaleReference.result.then(
      (result) => {
        console.log("result", result);
      },
      (reason) => {
      }
    );

  }

  validerSelectionTiers() {
    if (this.tiersSelectionneRecherche) {

      this.demande.tiers = this.tiersSelectionneRecherche;
      this.demande.iban = this.tiersSelectionneRecherche.iban;
      this.demande.codeIban = this.tiersSelectionneRecherche.codeIban;
      this.demande._ibanDetail = this.demande.codeIban + " - " + this.demande.iban;
      this.demande._tiersNom = this.demande.tiers.numeroTiers + " - " + this.demande.tiers.nomOuRaisonSocial;
      this.modaleReference.close();
      this.tiersSelectionneRecherche = null;

    }
  }

  updateTiers(tiers: Tiers) {
    this.tiersSelectionneRecherche = tiers;
  }
}
