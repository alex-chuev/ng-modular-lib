import { TestBed } from '@angular/core/testing';

import { ApolloFormsService } from './apollo-forms.service';

describe('ApolloFormsService', () => {
  let service: ApolloFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApolloFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
