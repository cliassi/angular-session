import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
})
export class MyCardComponent implements OnInit {
  @Input() header: string = '';

  @Input() footer: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    this.onClick.emit('button clicked');
  }


}
