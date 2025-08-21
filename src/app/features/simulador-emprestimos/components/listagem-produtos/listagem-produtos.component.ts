import { Dialog } from '@angular/cdk/dialog';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';
import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component';
import { ProdutoEmprestimoService } from 'src/app/core/services/produto-emprestimo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent implements OnInit {
  
  produtos : Produto[] = [];
  produtosSubscription : Subscription | undefined;

  constructor(
    private readonly emprestimoService : ProdutoEmprestimoService,
    private readonly dialog : Dialog
  ){}

  ngOnInit(): void {
    this.produtosSubscription = this.emprestimoService.obterProdutos().subscribe({
      next: (produtos)=>{
        this.produtos = produtos;
      }
    });
  }

  abrirModalCadastroProduto(){
    
    const dialogRef = this.dialog.open<Produto>(CadastroProdutoComponent, {
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop'
    });
    
    dialogRef.closed.subscribe((produto)=> {
      if(produto){
        this.cadastrarProduto(produto);
      }
    })
  }

  cadastrarProduto(produto : Produto){
    
    this.emprestimoService.adicionarProduto(produto);

  }
}
