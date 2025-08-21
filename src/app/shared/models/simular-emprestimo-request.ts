import { Produto } from "./produto";

export class SimularEmprestimoRequest {
    constructor(
        public produto : Produto,
        public valorEmprestimo : number,
        public prazoMeses: number
    ){}
}