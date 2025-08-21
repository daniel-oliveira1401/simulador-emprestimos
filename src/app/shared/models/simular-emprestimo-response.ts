import { Parcela } from "./parcela";
import { Produto } from "./produto";

export class SimularEmprestimoResponse {

    constructor(
        public produto : Produto,
        public valorSolicitado : number,
        public prazoMesesSolicitado : number,
        public taxaJurosEfetivaMensal : number,
        public valorTotalComJuros : number,
        public parcelasCalculadas : Parcela[]
    ){}

}