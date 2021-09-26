import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBaseConhecimentoComponent } from './menu-base-conhecimento.component';

describe('MenuBaseConhecimentoComponent', () => {
  let component: MenuBaseConhecimentoComponent;
  let fixture: ComponentFixture<MenuBaseConhecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBaseConhecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBaseConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
