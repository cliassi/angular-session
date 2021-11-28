import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TimerService } from 'src/app/@services/timer.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  time: number = 0;

  constructor(public ts: TimerService) {}

  ngOnInit(): void {
    timer(0, 1000).subscribe((n: any) => {
      this.time++;
    });
  }
}
