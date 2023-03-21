import { Onglet } from './../../../model/structure/Onglet';
import { ListeDonnees } from './../../../model/listeDonnees';
import { Component, Input, OnInit } from '@angular/core';
import { Demande } from 'src/app/model/sidepa';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  onglets: Onglet[];
  ongletActif !: Onglet;

  @Input()
  estEditable!: boolean;

  @Input()
  demande!: Demande;

  @Input()
  listeDonnees!: ListeDonnees;

  constructor() {
    this.onglets = [new Onglet(1, "entete", "Entete"), new Onglet(2, "ligne", "Lignes"), new Onglet(3, "wf", "Workflow")]

  }

  ngOnInit(): void {
  }

  afficherRechercheTiers() {
    console.log("afficherRechercheTiers");

  }

}
