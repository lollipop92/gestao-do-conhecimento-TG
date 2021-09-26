import { TestBed } from '@angular/core/testing';

import { BaseConhecimentoService } from './base-conhecimento.service';

describe('BaseConhecimentoService', () => {
  let service: BaseConhecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseConhecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
