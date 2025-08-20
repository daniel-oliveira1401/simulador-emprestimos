import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimuladorEmprestimosRoutingModule } from './simulador-emprestimos-routing.module';
import { SimuladorEmprestimosComponent } from './simulador-emprestimos.component';
import { ListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos.component';
import { SimulacaoEmprestimoComponent } from './components/simulacao-emprestimo/simulacao-emprestimo.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SimuladorEmprestimosComponent,
    ListagemProdutosComponent,
    SimulacaoEmprestimoComponent,
    CadastroProdutoComponent,
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    SimuladorEmprestimosRoutingModule
  ]
})
export class SimuladorEmprestimosModule { }
