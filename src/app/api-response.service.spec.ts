import { TestBed } from '@angular/core/testing';

import { ApiResponseService } from './api-response.service';

describe('ApiResponseService', () => {
  let service: ApiResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
