import { TestBed } from '@angular/core/testing';

import { ChangedPriceService } from './changed-price.service';

describe('ChangedPriceService', () => {
  let service: ChangedPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangedPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
