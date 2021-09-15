import { TestBed } from '@angular/core/testing';

import { EditarConfigService } from './editar-config.service';

describe('EditarConfigService', () => {
  let service: EditarConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
