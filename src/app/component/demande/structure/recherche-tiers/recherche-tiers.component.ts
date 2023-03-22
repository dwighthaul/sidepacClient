import { BackService } from 'src/app/service/back.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tiers } from 'src/app/model/sidepa';

@Component({
  selector: 'app-recherche-tiers',
  templateUrl: './recherche-tiers.component.html',
  styleUrls: ['./recherche-tiers.component.css']
})
export class RechercheTiersComponent implements OnInit {

  filtreRecherche !: string;
  listeTiers !: Tiers[];

  tiersSelectionne!: Tiers

  @Output()
  tiersSelectionneEvent = new EventEmitter<Tiers>();

  constructor(private backService: BackService) { }

  ngOnInit(): void {
  }

  rechercherTiers() {
    // Remise à zero des données du tiers
    this.tiersSelectionne = null;
    this.tiersSelectionneEvent.emit(this.tiersSelectionne);
    this.backService.recuperationTiers(this.filtreRecherche, (data: Tiers[]) => {
      this.listeTiers = data;
    })
  }

  selectionnerTiers(tiers: Tiers) {
    this.tiersSelectionne = tiers;
    this.tiersSelectionneEvent.emit(this.tiersSelectionne);

  }
}
