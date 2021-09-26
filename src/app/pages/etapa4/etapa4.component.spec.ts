import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapa4Component } from './etapa4.component';

describe('Etapa4Component', () => {
  let component: Etapa4Component;
  let fixture: ComponentFixture<Etapa4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etapa4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etapa4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
