import { TestBed } from '@angular/core/testing';

import { Apivoice } from './apivoice';

describe('Apivoice', () => {
  let service: Apivoice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apivoice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
