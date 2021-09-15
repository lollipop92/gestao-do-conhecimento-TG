import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConfigComponent } from './editar-config.component';

describe('EditarConfigComponent', () => {
  let component: EditarConfigComponent;
  let fixture: ComponentFixture<EditarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
