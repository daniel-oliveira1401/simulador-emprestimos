import { Component, Input } from '@angular/core';
import { Parcela } from 'src/app/shared/models/parcela';

@Component({
  selector: 'app-parcela',
  templateUrl: './parcela.component.html',
  styleUrls: ['./parcela.component.scss']
})
export class ParcelaComponent {
  @Input({required: true}) parcela! : Parcela;
}
