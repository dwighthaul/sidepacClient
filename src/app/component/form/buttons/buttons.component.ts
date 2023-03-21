import { Component, Input, OnInit } from '@angular/core';
import { Demande } from 'src/app/model/sidepa';
import { BackService } from 'src/app/service/back.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input()
  demande !: Demande;

  constructor(private backService: BackService) {

  }

  ngOnInit(): void {
  }

  sauvegarder() {
    this.backService.postDemande(this.demande);
  }

}
