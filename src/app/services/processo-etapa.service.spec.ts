import { TestBed } from '@angular/core/testing';

import { ProcessoEtapaService } from './processo-etapa.service';

describe('ProcessoEtapaService', () => {
  let service: ProcessoEtapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessoEtapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
