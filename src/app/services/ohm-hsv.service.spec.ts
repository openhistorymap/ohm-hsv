import { TestBed } from '@angular/core/testing';

import { OhmHsvService } from './ohm-hsv.service';

describe('OhmHsvService', () => {
  let service: OhmHsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OhmHsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
