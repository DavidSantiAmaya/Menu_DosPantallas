import { TestBed } from '@angular/core/testing';

import { IonicAppDbService } from './ionic-app-db-service';

describe('IonicAppDbService', () => {
  let service: IonicAppDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicAppDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
