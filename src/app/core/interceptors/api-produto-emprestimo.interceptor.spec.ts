import { TestBed } from '@angular/core/testing';

import { ApiProdutoEmprestimoInterceptor } from './api-produto-emprestimo.interceptor';

describe('ApiProdutoEmprestimoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiProdutoEmprestimoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiProdutoEmprestimoInterceptor = TestBed.inject(ApiProdutoEmprestimoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
