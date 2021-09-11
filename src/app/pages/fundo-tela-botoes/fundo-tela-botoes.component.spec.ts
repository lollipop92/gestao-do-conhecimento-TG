import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoTelaBotoesComponent } from './fundo-tela-botoes.component';

describe('FundoTelaBotoesComponent', () => {
  let component: FundoTelaBotoesComponent;
  let fixture: ComponentFixture<FundoTelaBotoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoTelaBotoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoTelaBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
