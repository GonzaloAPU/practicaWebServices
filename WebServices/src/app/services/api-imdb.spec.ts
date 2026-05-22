import { TestBed } from '@angular/core/testing';

import { ApiIMDB } from './api-imdb';

describe('ApiIMDB', () => {
  let service: ApiIMDB;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIMDB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
