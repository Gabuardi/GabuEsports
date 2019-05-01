import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.sass']
})
export class MatchComponent implements OnInit {

  @Input() team1: string;
  @Input() team2: string;
  team1result: string;
  team2result: string;

  @Input()
  set winner(team: number) {
    switch (team) {
      case 1: {
        this.team1result = 'WIN';
        this.team2result = 'LOSE';
        break;
      }
      case 2: {
        this.team1result = 'LOSE';
        this.team2result = 'WIN';
        break;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
