import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConhecimentoComponent } from './base-conhecimento.component';

describe('BaseConhecimentoComponent', () => {
  let component: BaseConhecimentoComponent;
  let fixture: ComponentFixture<BaseConhecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseConhecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
