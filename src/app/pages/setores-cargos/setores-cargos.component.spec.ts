import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresCargosComponent } from './setores-cargos.component';

describe('SetoresCargosComponent', () => {
  let component: SetoresCargosComponent;
  let fixture: ComponentFixture<SetoresCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoresCargosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoresCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
