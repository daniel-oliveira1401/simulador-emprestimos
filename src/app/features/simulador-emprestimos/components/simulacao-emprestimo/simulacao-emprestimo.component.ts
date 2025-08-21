import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoEmprestimoService } from 'src/app/core/services/produto-emprestimo.service';
import { Produto } from 'src/app/shared/models/produto';
import { ResultadoSimulacaoEmprestimo } from 'src/app/shared/models/resultado-simulacao-emprestimo';

type SimulacaoEmprestimoForm = {
  produto: FormControl<Produto | null>,
  valor: FormControl<number | null>,
  prazo : FormControl<number | null>
};

@Component({
  selector: 'app-simulacao-emprestimo',
  templateUrl: './simulacao-emprestimo.component.html',
  styleUrls: ['./simulacao-emprestimo.component.scss']
})
export class SimulacaoEmprestimoComponent {
  
  readonly formSimulacao : FormGroup<SimulacaoEmprestimoForm> = new FormGroup<SimulacaoEmprestimoForm>({
    produto: new FormControl<Produto | null>(null, [Validators.required]),
    valor: new FormControl<number | null>(null, [Validators.required]),
    prazo: new FormControl<number | null>(null, [Validators.required])
  });

  resultadoSimulacao : ResultadoSimulacaoEmprestimo | undefined;

  constructor(
    private readonly emprestimoService : ProdutoEmprestimoService
  ){}

  simularEmprestimo(){
    if(this.formSimulacao.valid){
      const {produto, valor, prazo} = this.formSimulacao.value;
      this.emprestimoService.simularEmprestimo(produto!, valor!, prazo!).subscribe({
        next: (resultado)=>{
          this.resultadoSimulacao = resultado;
        }
      });
    }
  }
}
