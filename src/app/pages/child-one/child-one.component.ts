import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/@services/timer.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit, OnDestroy {
  @Input() time: number = 0;
  @Output() timeChange: EventEmitter<any> = new EventEmitter();

  subs: Subscription = new Subscription();

  constructor(private ts: TimerService) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs = this.ts.time$.subscribe((time) => {
      console.log(time);
    });
  }

  clicked() {
    this.time = this.time * 10;
    this.timeChange.emit(this.time);
  }
}
