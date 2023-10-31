import { TestBed } from '@angular/core/testing';

import { TWLService } from './twl.service';

describe('TWLService', () => {
  let service: TWLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TWLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
