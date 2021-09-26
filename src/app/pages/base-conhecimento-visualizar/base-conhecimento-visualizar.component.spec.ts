import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConhecimentoVisualizarComponent } from './base-conhecimento-visualizar.component';

describe('BaseConhecimentoVisualizarComponent', () => {
  let component: BaseConhecimentoVisualizarComponent;
  let fixture: ComponentFixture<BaseConhecimentoVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseConhecimentoVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConhecimentoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
