import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {
  @Input({required: true}) produto! : Produto;
}
