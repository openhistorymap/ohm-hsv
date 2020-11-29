import { TestBed } from '@angular/core/testing';

import { OhmLibService } from './ohm-lib.service';

describe('OhmLibService', () => {
  let service: OhmLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhmLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
