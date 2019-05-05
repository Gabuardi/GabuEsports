import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.sass']
})
export class MatchComponent implements OnInit {

  @Input() team1: string;
  @Input() team2: string;
  @Input() bo5: boolean;
  @Input() team1result: string | number;
  @Input() team2result: string | number;

  @Input()
  set winner(team: number) {
    switch (team) {
      case 1: {
        this.team1result = 'GANADOR';
        this.team2result = 'PERDEDOR';
        break;
      }
      case 2: {
        this.team1result = 'PERDEDOR';
        this.team2result = 'GANADOR';
        break;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
