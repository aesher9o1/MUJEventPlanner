import { TestBed } from '@angular/core/testing';

import { CryptonicsService } from './cryptonics.service';

describe('CryptonicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptonicsService = TestBed.get(CryptonicsService);
    expect(service).toBeTruthy();
  });
});
