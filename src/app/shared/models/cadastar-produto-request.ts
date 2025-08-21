export class CadastrarProdutoRequest {
    constructor(
        public nome : string,
        public taxa : number,
        public prazo : number
    ){}
}