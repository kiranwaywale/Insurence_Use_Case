import { TestBed } from '@angular/core/testing';

import { MyPolicyService } from './my-policy.service';

describe('MyPolicyService', () => {
  let service: MyPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
