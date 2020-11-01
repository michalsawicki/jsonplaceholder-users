import { TestBed } from '@angular/core/testing';

import { GetUserDetailsService } from './get-user-posts.service';

describe('GetUserDetailsService', () => {
  let service: GetUserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

