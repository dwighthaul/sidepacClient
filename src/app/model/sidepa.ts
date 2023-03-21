/* tslint!:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.35.1025 on 2023-03-13 10!:33!:48.

export class Demande {
  id!: number;
  description!: string;
  infoDemande!: string;
  iban!: string;
  codeIban!: string;
  tiers!: Tiers;
  wf!: Workflow[];
  service!: Service;

  _dernierStatus !: string;
  _tiersNom !: string;
  _ibanDetail !: string;
}

export class RefEtat {
  id!: number;
  code!: string;
  libelle!: string;
}

export class Tiers {
  id!: number;
  numeroTiers!: string;
  nomOuRaisonSocial!: string;
  prenom!: string;
  adresse!: string;
  iban!: string;
  codeIban!: string;
}

export class Workflow {
  id!: number;
  etat!: RefEtat;
  description!: string;
  dateAjout!: Date;
}

export class Service {
  id!: number;
  code!: string;
  path!: string;
  libelle!: string;

}
