import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TimerService } from 'src/app/@services/timer.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
