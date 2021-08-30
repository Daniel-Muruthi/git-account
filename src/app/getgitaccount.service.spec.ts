import { TestBed } from '@angular/core/testing';

import { GetgitaccountService } from './getgitaccount.service';

describe('GetgitaccountService', () => {
  let service: GetgitaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetgitaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
