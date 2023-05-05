import { Component, Input, OnInit } from '@angular/core';
import { Demande } from 'src/app/model/sidepa';

@Component({
  selector: 'app-detail-lignes',
  templateUrl: './detail-lignes.component.html',
  styleUrls: ['./detail-lignes.component.css']
})
export class DetailLignesComponent implements OnInit {

  @Input()
  demande!: Demande;


  constructor() { }

  ngOnInit(): void {
  }

}
