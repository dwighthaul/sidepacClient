import { BackService } from 'src/app/service/back.service';
import { ListeDonnees } from 'src/app/model/listeDonnees';
import { Demande, Service } from 'src/app/model/sidepa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  demande !: Demande;
  listeDonnees !: ListeDonnees;
  constructor(private backService: BackService) {
    this.demande = new Demande();

    this.demande.service = new Service();

    this.listeDonnees = new ListeDonnees();
    this.backService.recuperationServices((services: Service[]) => {
      this.listeDonnees.services = services;

    })
  }

  ngOnInit(): void {
  }

}
