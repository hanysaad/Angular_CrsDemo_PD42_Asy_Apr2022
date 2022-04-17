import { TestBed } from '@angular/core/testing';

import { ProductsAPIService } from './products-api.service';

describe('ProductsAPIService', () => {
  let service: ProductsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
