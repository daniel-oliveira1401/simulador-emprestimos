import { Dialog } from '@angular/cdk/dialog';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';
import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent {
  produtos : Produto[] = [
    new Produto(crypto.randomUUID(), "Empréstimo Consignado Anual", 1.8, 12),
    new Produto(crypto.randomUUID(), "Empréstimo Consignado Anual", 1.8, 12),
    new Produto(crypto.randomUUID(), "Empréstimo Consignado Anual", 1.8, 12),
    new Produto(crypto.randomUUID(), "Empréstimo Consignado Anual", 1.8, 12),
    new Produto(crypto.randomUUID(), "Empréstimo Consignado Anual", 1.8, 12),
  ];

  constructor(
    private readonly dialog : Dialog
  ){}

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

  fecharModalCadastroProduto(){
    
  }

  cadastrarProduto(produto : Produto){
    
    this.fecharModalCadastroProduto();

  }
}
