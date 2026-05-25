import { TestBed } from '@angular/core/testing';

import { Apimoney } from './apimoney';

describe('Apimoney', () => {
  let service: Apimoney;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apimoney);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
