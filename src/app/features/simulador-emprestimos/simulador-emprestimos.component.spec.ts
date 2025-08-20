import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorEmprestimosComponent } from './simulador-emprestimos.component';

describe('SimuladorEmprestimosComponent', () => {
  let component: SimuladorEmprestimosComponent;
  let fixture: ComponentFixture<SimuladorEmprestimosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimuladorEmprestimosComponent]
    });
    fixture = TestBed.createComponent(SimuladorEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
