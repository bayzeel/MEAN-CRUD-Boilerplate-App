import { TestBed, inject } from '@angular/core/testing';

import { OneItemService } from './one-item.service';

describe('OneItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneItemService]
    });
  });

  it('should ...', inject([OneItemService], (service: OneItemService) => {
    expect(service).toBeTruthy();
  }));
});
