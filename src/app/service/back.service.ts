import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Demande, Service, Tiers } from '../model/sidepa';
import { DemandeDTO } from './../model/dto/demandeDTO.model';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class BackService {


  constructor(private http: HttpClient) { }


  recuperationTiers(recherche: string, callback: Function) {
    return this.http.get<Tiers[]>('http://localhost:8080/data/tiers/trouverParNumeroOuNom?numeroOuNom=' + recherche).subscribe((data: Tiers[]) => {
      callback(data);
    });
  }

  recuperationServices(callback: Function) {
    return this.http.get<Service[]>('http://localhost:8080/data/service/all').subscribe((data: Service[]) => {
      callback(data);
    });
  }

  recuperationDemandesSimple() {
    return this.http.get<DemandeDTO[]>('http://localhost:8080/data/demande/allSimple');
  }

  postDemande(demande: Demande) {
    console.log("Modif de la demande : " + demande.id);
    return this.http.post('http://localhost:8080/data/demande/update', demande).subscribe((data: any) => {
      console.log(data);
    });
  }

  recuperationDemandeDetail(id: number, callback: Function) {
    return this.http.get<Demande>('http://localhost:8080/data/demande/parId?id=' + id).subscribe((data) => {
      if (data.wf && data.wf.length > 0) {
        let dernierWf = data.wf[data.wf.length - 1];
        data._dernierStatus = dernierWf.etat.code + " - " + dernierWf.etat.libelle;
      }

      if (data.tiers) {
        data._tiersNom = data.tiers.numeroTiers + " - " + data.tiers.nomOuRaisonSocial;
      }
      if (data.iban) {
        data._ibanDetail = data.codeIban + " - " + data.iban;
      }

      callback(data)
    });
  }




}
