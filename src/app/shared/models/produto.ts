export class Produto {
    constructor(
      public id : string,
      public nome : string,
      public taxaJuros : number,
      public prazoMaximo :number
    ){}

    static paraCadastrar(nome : string, taxaJuros : number, prazoMaximo : number){
      return new Produto('pendente-cadastro', nome, taxaJuros, prazoMaximo);
    }
}