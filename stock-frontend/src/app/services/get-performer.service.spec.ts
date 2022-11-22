import { TestBed } from '@angular/core/testing';

import { GetPerformerService } from './get-performer.service';

describe('GetPerformerService', () => {
  let service: GetPerformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPerformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
