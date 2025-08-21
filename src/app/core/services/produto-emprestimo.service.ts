import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { URL_BASE_API_PRODUTO_EMPRESTIMO } from 'src/app/app.module';
import { CadastrarProdutoRequest } from 'src/app/shared/models/cadastar-produto-request';
import { ListarProdutosResponse } from 'src/app/shared/models/listar-produtos-response';
import { Produto } from 'src/app/shared/models/produto';
import { SimularEmprestimoRequest } from 'src/app/shared/models/simular-emprestimo-request';
import { SimularEmprestimoResponse } from 'src/app/shared/models/simular-emprestimo-response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoEmprestimoService {

  private produtos : Subject<Produto[]> = new Subject();

  constructor(
    private readonly httpClient : HttpClient,
    @Inject(URL_BASE_API_PRODUTO_EMPRESTIMO) private readonly urlBase : string
  ) { }

  adicionarProduto(produto : Produto){

    const request = new CadastrarProdutoRequest(produto.nome, produto.prazoMaximo, produto.taxaJuros);

    this.httpClient.post(this.urlBase + '/produtos', request).subscribe({
      next: ()=>{
        this.listarProdutos();    
      },
      error: (error)=>{
        console.error("Não foi possível cadastrar o produto " + produto.nome, error);
      }
    });

  }

  obterProdutos(){
    return this.produtos.asObservable();
  }

  listarProdutos(){
    this.httpClient.get<ListarProdutosResponse>(this.urlBase + "/produtos").subscribe({
      next: (res : ListarProdutosResponse)=>{
        this.produtos.next(res.produtos);
      },
      error: (error)=>{
        console.error("Não foi possível listar os produtos cadastrados.", error);
      }
    })
  }

  simularEmprestimo(produto : Produto, valorEmprestimo : number, periodoMeses : number){

    const request = new SimularEmprestimoRequest(produto, valorEmprestimo, periodoMeses);

    return this.httpClient.post<SimularEmprestimoResponse>(this.urlBase + "/simulacoes", request);

  }

}
