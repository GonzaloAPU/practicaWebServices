import { TestBed } from '@angular/core/testing';

import { ApiF1 } from './api-f1';

describe('ApiF1', () => {
  let service: ApiF1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiF1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
