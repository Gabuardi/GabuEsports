import {Component, Input, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass']
})
export class CountdownComponent implements OnInit {

  // COMPONENT PROPERTIES
  startDateTime: number;
  endDateTime: number;

  countdownInterval: Subscription;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  percent: number;

  ngOnInit() {
    this.countdownInterval = interval(1000).subscribe(value => this.updateCountdown());
  }

  @Input()
  set endDate(date: any) {
    this.endDateTime = Date.UTC(date.year, date.month, date.day, date.hour);
  }

  @Input()
  set startDate(date: any) {
    this.startDateTime = Date.UTC(date.year, date.month, date.day, date.hour);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distanceBetweenEndDateAndNow = this.endDateTime - now;

    if (distanceBetweenEndDateAndNow >= 0) {
      this.days = Math.floor(distanceBetweenEndDateAndNow / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distanceBetweenEndDateAndNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distanceBetweenEndDateAndNow % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distanceBetweenEndDateAndNow % (1000 * 60)) / 1000);
      this.percent = Math.floor((now - this.startDateTime) * 100 / (this.endDateTime - this.startDateTime));
      console.log(this.percent);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.percent = 100;
    }

  }

} // COMPONENT ENDS
