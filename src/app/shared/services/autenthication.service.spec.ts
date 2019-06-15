/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutenthicationService } from './autenthication.service';

describe('Service: Autenthication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenthicationService]
    });
  });

  it('should ...', inject([AutenthicationService], (service: AutenthicationService) => {
    expect(service).toBeTruthy();
  }));
});
