import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent {
  @Output() produto : EventEmitter<Produto> = new EventEmitter();
  @Output() cancelar : EventEmitter<undefined> = new EventEmitter();

  cadastrarProduto(){
    this.produto.emit(new Produto('b', "Proudot tes", 1.45, 6));
  }

  cancelarCadastro(){
    this.cancelar.emit();
  }

}
