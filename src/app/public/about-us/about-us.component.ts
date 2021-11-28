import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  header = 'User registration';

  constructor() {}

  ngOnInit(): void {}
  childClicked(data: any) {
    console.log(data);
  }
}
