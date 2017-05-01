import { TestBed, inject } from '@angular/core/testing';

import { ListService } from './items.service';

describe('ListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService]
    });
  });

  it('should ...', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
