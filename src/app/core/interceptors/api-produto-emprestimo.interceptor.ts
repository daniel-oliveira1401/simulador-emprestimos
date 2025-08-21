import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produto } from 'src/app/shared/models/produto';
import { CadastrarProdutoRequest } from 'src/app/shared/models/cadastar-produto-request';
import { SimularEmprestimoRequest } from 'src/app/shared/models/simular-emprestimo-request';
import { Parcela } from 'src/app/shared/models/parcela';
import { SimularEmprestimoResponse } from 'src/app/shared/models/simular-emprestimo-response';

@Injectable()
export class ApiProdutoEmprestimoInterceptor implements HttpInterceptor {

  // Inicia a aplicação com 3 produtos cadastrados para facilitar os testes
  // do avaliador. Valores fictícios de taxa de juros e prazos
  produtos : Produto[] = [
    new Produto(crypto.randomUUID(), "Crédito Pessoal", 42, 6),
    new Produto(crypto.randomUUID(), "Consignado INSS", 24, 12),
    new Produto(crypto.randomUUID(), "Crédito Real Fácil", 10, 24)
  ];

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Mock do endpoint de adicionar produto (POST /produtos)
    if(request.url.endsWith("produtos") && request.method == "POST"){
      const requestBody : CadastrarProdutoRequest = request.body as CadastrarProdutoRequest;
      
      const responseBody = this.processarInclusaoProduto(requestBody);

      return of(new HttpResponse({
        status: 201,
        body: responseBody
      }));
    }
    
    // Mock do endpoint de listar produtos cadastrados (GET /produtos)
    if(request.url.endsWith("produtos") && request.method == "GET"){
      
      const responseBody = this.processarListagemProdutos();

      return of(new HttpResponse({
        status: 201,
        body: responseBody
      }));
    }

    // Mock do endpoint de realizar simulação de empréstimo
    if(request.url.endsWith("simulacoes") && request.method == "POST"){
      const requestBody : SimularEmprestimoRequest = request.body as SimularEmprestimoRequest;
      
      const responseBody = this.processarSimulacaoEmprestimoPRICE(requestBody);

      return of(new HttpResponse({
        status: 201,
        body: responseBody
      }));
    }
    
    return next.handle(request);
  }

  private processarInclusaoProduto(request : CadastrarProdutoRequest) : Produto {
      const novoProduto = new Produto(
        crypto.randomUUID(), 
        request.nome, request.taxa, 
        request.prazo);
      
      this.produtos.push(
        novoProduto
      );
      // Clonar o objeto de resposta para que alterações nele não reflitam no
      // estado interno do mock
      return {...novoProduto};
  }

  private processarListagemProdutos() : Produto[]{
    // clonar o array de produtos para que alteração no valor retornado não reflita
    // no estado interno do mock
    return [...this.produtos];
  }

  private processarSimulacaoEmprestimoPRICE(request : SimularEmprestimoRequest){
    const valorEmprestimo = request.valorEmprestimo;
    const prazo = request.prazoMeses;
    const taxaAnual = request.produto.taxaJuros;
    const taxaMensal = (1 + taxaAnual/100.0) ^ 1/12 - 1;
    const parcelas : Parcela[] = [];
    let valorTotalAPagar: number | null = null;

    let saldoDevedorAtual = valorEmprestimo;

    for(let i = 1; i <= prazo; i++){
      const valorParcela = (valorEmprestimo * taxaMensal) / (1 - (1 + taxaMensal)^ -prazo);
      
      if(!valorTotalAPagar){
        valorTotalAPagar = valorParcela * prazo;
      }
      
      const jurosParcela = saldoDevedorAtual * taxaMensal;
      const valorAmortizado = valorParcela - jurosParcela;
      saldoDevedorAtual -= valorAmortizado;

      const parcela = new Parcela(
        i,
        jurosParcela,
        valorParcela,
        valorAmortizado,
        saldoDevedorAtual
      );

      parcelas.push(parcela);
    }

    const response = new SimularEmprestimoResponse(
      request.produto,
      request.valorEmprestimo,
      request.prazoMeses,
      taxaMensal,
      valorTotalAPagar!,
      parcelas
    );

    return response;
  }
}
