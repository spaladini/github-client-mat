import { TestBed } from '@angular/core/testing';

import { Auth0TokenService } from './auth0-token.service';

describe('Auth0TokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth0TokenService = TestBed.get(Auth0TokenService);
    expect(service).toBeTruthy();
  });
});
