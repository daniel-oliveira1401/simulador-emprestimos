import { SimularEmprestimoResponse } from "./simular-emprestimo-response";

// Caso seja necessário criar um DTO proprio de simulacao sem depender
// da resposta da api, seria somente necessário substituir o type
// abaixo por uma classe
export type ResultadoSimulacaoEmprestimo = SimularEmprestimoResponse;