import { TestBed } from '@angular/core/testing';

import { MaineSService } from './maine-s.service';

describe('MaineSService', () => {
  let service: MaineSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaineSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
