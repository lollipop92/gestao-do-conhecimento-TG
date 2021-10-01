import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariaveisSistemaComponent } from './variaveis-sistema.component';

describe('VariaveisSistemaComponent', () => {
  let component: VariaveisSistemaComponent;
  let fixture: ComponentFixture<VariaveisSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariaveisSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariaveisSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
