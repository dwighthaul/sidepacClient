export class Iban {

  libelle !: string;

  constructor(public codeIban: string, public iban: string) {
    this.libelle = codeIban + " - " + iban;
  }
}
