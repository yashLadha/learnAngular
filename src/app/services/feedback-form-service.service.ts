import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { baseURL } from '../shared/baseurl';


@Injectable()
export class FeedbackFormServiceService {

  constructor(private restangular: Restangular) { }

  postFeedback(feedback: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedback);
  }

}
