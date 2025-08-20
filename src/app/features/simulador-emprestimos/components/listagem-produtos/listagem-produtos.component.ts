import { Component, ElementRef, ViewChild } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent {
  produtos : Produto[] = [
    new Produto('a', "Empréstimo Consignado Anual", 1.8, 12),
    new Produto('a', "Empréstimo Consignado Anual", 1.8, 12),
    new Produto('a', "Empréstimo Consignado Anual", 1.8, 12),
    new Produto('a', "Empréstimo Consignado Anual", 1.8, 12),
    new Produto('a', "Empréstimo Consignado Anual", 1.8, 12),
  ];

  @ViewChild('modalCadastroProduto') modalCadastroProduto! : ElementRef<HTMLDialogElement>;

  abrirModalCadastroProduto(){
    this.modalCadastroProduto.nativeElement.showModal();
  }

  fecharModalCadastroProduto(){
    this.modalCadastroProduto.nativeElement.close();
  }

  cadastrarProduto(produto : Produto){
    
    this.fecharModalCadastroProduto();

  }
}
