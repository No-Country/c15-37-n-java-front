import { TestBed } from '@angular/core/testing';

import { PersistentService } from './persistent.service';

describe('PersistentServiceService', () => {
  let service: PersistentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
