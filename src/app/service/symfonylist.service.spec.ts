import { TestBed } from '@angular/core/testing';

import { SymfonylistService } from './symfonylist.service';

describe('SymfonylistService', () => {
  let service: SymfonylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymfonylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
