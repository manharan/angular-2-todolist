/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingService } from './shopping.service';

describe('ShoppingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingService]
    });
  });

  it('should ...', inject([ShoppingService], (service: ShoppingService) => {
    expect(service).toBeTruthy();
  }));
});
