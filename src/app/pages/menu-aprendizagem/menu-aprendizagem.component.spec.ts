import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAprendizagemComponent } from './menu-aprendizagem.component';

describe('MenuAprendizagemComponent', () => {
  let component: MenuAprendizagemComponent;
  let fixture: ComponentFixture<MenuAprendizagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAprendizagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAprendizagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
