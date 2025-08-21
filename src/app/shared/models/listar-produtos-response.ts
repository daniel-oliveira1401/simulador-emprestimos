import { Produto } from "./produto";

export class ListarProdutosResponse {

    constructor(
        public produtos : Produto[]
    ){}

}