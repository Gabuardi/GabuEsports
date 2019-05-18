import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  startDate = {
    year: 2019,
    month: 4,
    day: 18,
    hour: 12
  };

  endDate = {
    year: 2019,
    month: 4,
    day: 19,
    hour: 7
  };

  constructor() { }

  ngOnInit() {
  }

}
