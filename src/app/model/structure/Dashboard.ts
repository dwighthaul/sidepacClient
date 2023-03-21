export class Dashboard {
  titre !: string;
  nombre!: number;
  codes !: string[];

  constructor(titre: string, codes: string[]) {
    this.titre = titre;
    this.codes = codes;
  }
}
