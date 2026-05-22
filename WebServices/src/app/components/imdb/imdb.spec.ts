import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMDB } from './imdb';

describe('IMDB', () => {
  let component: IMDB;
  let fixture: ComponentFixture<IMDB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IMDB],
    }).compileComponents();

    fixture = TestBed.createComponent(IMDB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
