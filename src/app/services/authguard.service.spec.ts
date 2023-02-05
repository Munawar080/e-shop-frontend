import { TestBed } from '@angular/core/testing';

import { AuthGaurd } from './authguard.service';

describe('AuthguardService', () => {
  let service: AuthGaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGaurd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
