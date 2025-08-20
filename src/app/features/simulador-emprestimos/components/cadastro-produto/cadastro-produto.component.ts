import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/models/produto';

type CadastroProdutoForm = {
  nome: FormControl<string | null>,
  taxaJuros : FormControl<number | null>,
  prazoMaximo : FormControl<number | null>
}

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent {

  formGroup : FormGroup<CadastroProdutoForm> = new FormGroup<CadastroProdutoForm>({
    nome: new FormControl<string | null>(null, [Validators.required]),
    taxaJuros: new FormControl<number | null>(null, [Validators.required]),
    prazoMaximo : new FormControl<number | null>(null, [Validators.required])
  });

  constructor(private readonly dialogRef : DialogRef<Produto, CadastroProdutoComponent>){}

  cadastrarProduto(){
    if(this.formGroup.valid){
      const {nome, taxaJuros, prazoMaximo} = this.formGroup.value;
      this.dialogRef.close(Produto.paraCadastrar(nome!, taxaJuros!, prazoMaximo!));
    }
  }

  cancelarCadastro(){
    this.dialogRef.close();
  }

}
