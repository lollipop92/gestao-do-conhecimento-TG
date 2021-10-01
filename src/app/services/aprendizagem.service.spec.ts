import { TestBed } from '@angular/core/testing';

import { AprendizagemService } from './aprendizagem.service';

describe('AprendizagemService', () => {
  let service: AprendizagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprendizagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
