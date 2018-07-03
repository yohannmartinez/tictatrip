import { TestBed, inject } from '@angular/core/testing';

import { FindCityService } from './find-city.service';

describe('FindCityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindCityService]
    });
  });

  it('should be created', inject([FindCityService], (service: FindCityService) => {
    expect(service).toBeTruthy();
  }));
});
