import { TestBed } from '@angular/core/testing';

import { ApiQr } from './api-qr';

describe('ApiQr', () => {
  let service: ApiQr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiQr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
