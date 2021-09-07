import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizagemComponent } from './aprendizagem.component';

describe('AprendizagemComponent', () => {
  let component: AprendizagemComponent;
  let fixture: ComponentFixture<AprendizagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprendizagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendizagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
