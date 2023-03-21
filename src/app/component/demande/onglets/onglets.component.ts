import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Onglet } from 'src/app/model/structure/Onglet';

@Component({
  selector: 'app-onglets',
  templateUrl: './onglets.component.html',
  styleUrls: ['./onglets.component.css']
})
export class OngletsComponent implements OnInit {

  constructor() { }
  ongletActif !: Onglet;


  @Input()
  onglets !: Onglet[];

  @Output() ongletChange = new EventEmitter<Onglet>();

  ngOnInit(): void {
    if (this.onglets && this.onglets.length > 0) {
      this.selectionneOnglet(this.onglets[0]);
    }
  }

  selectionneOnglet(onglet: Onglet) {
    console.log("Onglet actif : " + onglet.libelle);
    this.ongletActif = onglet;
    this.ongletChange.emit(this.ongletActif);

  }
}
