import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListeDonnees } from 'src/app/model/listeDonnees';
import { Demande, Ligne } from 'src/app/model/sidepa';
import { TypeEdition } from 'src/app/model/structure/TypeEdition';

@Component({
  selector: 'app-detail-lignes',
  templateUrl: './detail-lignes.component.html',
  styleUrls: ['./detail-lignes.component.css']
})


export class DetailLignesComponent implements OnInit {

  @ViewChild('ajoutLigneModale')
  public ajoutLigneModale!: TemplateRef<any>;
  modaleLigneReference: NgbModalRef;

  typeEdition: TypeEdition;

  ligneEnCoursEdition: Ligne;
  idLigneEnCoursEdition: number;

  @Input()
  estEditable!: boolean;

  @Input()
  demande!: Demande;

  @Input()
  listeDonnees!: ListeDonnees;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  ajouterLigne() {
    this.typeEdition = TypeEdition.NEW;
    console.log("ajouterLigne");
    this.ligneEnCoursEdition = new Ligne();

    this.modaleLigneReference = this.modalService.open(this.ajoutLigneModale);
    this.modaleLigneReference.result.then(
      (result) => {
        console.log("result", result);
      },
      (reason) => {
      }
    );
  }

  editerLigne(ligne: Ligne, id: number) {
    this.typeEdition = TypeEdition.UPDATE;
    console.log("editerLigne");
    this.ligneEnCoursEdition = Object.assign({}, ligne);;
    this.idLigneEnCoursEdition = id
    this.modaleLigneReference = this.modalService.open(this.ajoutLigneModale);
    this.modaleLigneReference.result.then(
      (result) => {
        console.log("result", result);
      },
      (reason) => {
      }
    );
  }

  validerAjoutLigne() {
    console.log("validerAjoutLigne");
    if (!this.demande.lignes) {
      this.demande.lignes = []
    }

    this.demande.lignes.push(this.ligneEnCoursEdition);
    this.modaleLigneReference.close();

  }
  validerModificationLigne() {
    console.log("validerModificationLigne");

    this.demande.lignes[this.idLigneEnCoursEdition] = this.ligneEnCoursEdition;
    this.modaleLigneReference.close();


  }



  estNouvelleLigne() {
    return (this.typeEdition === TypeEdition.NEW)
  }

  estModificationLigne() {
    return (this.typeEdition === TypeEdition.UPDATE)
  }

}
