import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulacaoEmprestimoComponent } from './components/simulacao-emprestimo/simulacao-emprestimo.component';
import { ListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos.component';
import { SimuladorEmprestimosComponent } from './simulador-emprestimos.component';

const routes: Routes = [
  {
    path: '',
    component: SimuladorEmprestimosComponent,
    children: [
      {
        path: '',
        component: ListagemProdutosComponent
      },
      {
        path: 'simulacao/:id-produto',
        component: SimulacaoEmprestimoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimuladorEmprestimosRoutingModule { }
