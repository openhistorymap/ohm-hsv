import { TestBed } from '@angular/core/testing';

import { OhmCommonService } from './ohm-common.service';

describe('OhmCommonService', () => {
  let service: OhmCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhmCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
