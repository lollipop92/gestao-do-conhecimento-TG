import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosCriticosComponent } from './processos-criticos.component';

describe('ProcessosCriticosComponent', () => {
  let component: ProcessosCriticosComponent;
  let fixture: ComponentFixture<ProcessosCriticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessosCriticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosCriticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
