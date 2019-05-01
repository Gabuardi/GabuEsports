import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../../interfaces/match';

@Component({
  selector: 'app-matches-column',
  templateUrl: './matches-column.component.html',
  styleUrls: ['./matches-column.component.sass']
})
export class MatchesColumnComponent implements OnInit {

  @Input() matchesList: Match[];

  constructor() { }

  ngOnInit() {
  }

}
