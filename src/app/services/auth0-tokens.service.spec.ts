import { TestBed } from '@angular/core/testing';

import { Auth0TokensService } from './auth0-tokens.service';

describe('Auth0TokensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth0TokensService = TestBed.get(Auth0TokensService);
    expect(service).toBeTruthy();
  });
});
