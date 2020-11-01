import { TestBed } from '@angular/core/testing';

import { GetUserTodosService } from './get-user-todos.service';

describe('GetUserTodosService', () => {
  let service: GetUserTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
