import { TestBed } from '@angular/core/testing';

import { ProdutoEmprestimoService } from './produto-emprestimo.service';

describe('ProdutoEmprestimoService', () => {
  let service: ProdutoEmprestimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoEmprestimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
