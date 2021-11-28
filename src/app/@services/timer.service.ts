import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  time: number = 0;
  time$: Subject<number> = new Subject();
  constructor() {}

  inc() {
    this.time++;
    this.time$.next(this.time);
  }

  dec() {
    this.time--;
    this.time$.next(this.time);
  }
}
