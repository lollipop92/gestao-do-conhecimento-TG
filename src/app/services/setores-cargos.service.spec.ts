import { TestBed } from '@angular/core/testing';

import { SetoresCargosService } from './setores-cargos.service';

describe('SetoresCargosService', () => {
  let service: SetoresCargosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetoresCargosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
