import { TestBed } from '@angular/core/testing';

import { ApiCars } from './api-cars';

describe('ApiCars', () => {
  let service: ApiCars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
