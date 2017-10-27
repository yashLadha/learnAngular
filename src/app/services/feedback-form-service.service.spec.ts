import { TestBed, inject } from '@angular/core/testing';

import { FeedbackFormServiceService } from './feedback-form-service.service';

describe('FeedbackFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackFormServiceService]
    });
  });

  it('should be created', inject([FeedbackFormServiceService], (service: FeedbackFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
