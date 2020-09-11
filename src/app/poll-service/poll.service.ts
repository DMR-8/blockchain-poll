import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll, PollForm, PollVote } from '../types';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: 'Do you like Dogs or Cats ?',
        thumbnail:
          'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        results: [7, 5, 1],
        options: ['Dogs', 'Cats', 'None'],
        voted: true,
      },
      {
        id: 2,
        question: 'Do you Like Pokemon ?',
        thumbnail:
          'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        results: [1, 6, 4],
        options: ['Yes', 'No', 'Maybe'],
        voted: false,
      },
    ]).pipe(delay(2000));
  }
  vote(pollVote: PollVote) {
    console.log(pollVote);
  }
  createPoll(pollform: PollForm) {
    console.log(pollform);
  }
}
