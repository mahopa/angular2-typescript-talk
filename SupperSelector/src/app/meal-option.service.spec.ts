/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MealOptionService } from './meal-option.service';

describe('Service: MealOption', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealOptionService]
    });
  });

  it('should ...', inject([MealOptionService], (service: MealOptionService) => {
    expect(service).toBeTruthy();
  }));
});
