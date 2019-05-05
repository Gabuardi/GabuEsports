import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserPredictColumn} from '../../../interfaces/user-predict-column';
import {Match} from '../../../interfaces/match';
// @ts-ignore
import {MatchesPredicts} from '../../../interfaces/matches-predicts';

@Component({
  selector: 'app-predict-table',
  templateUrl: './predict-table.component.html',
  styleUrls: ['./predict-table.component.sass']
})
export class PredictTableComponent implements AfterContentInit {

  @Input() title: string;
  matchesList: Match[];
  usersPredicts: UserPredictColumn[];
  @Output() usersPoints: EventEmitter<UserPredictColumn[]> = new EventEmitter<UserPredictColumn[]>();

  ngAfterContentInit(): void {
    this.usersPoints.emit(this.usersPredicts);
  }

  @Input()
  set predictsData(value: MatchesPredicts) {
    this.matchesList = value.matches;
    this.predictsParser(value);
  }

  predictsParser(value: MatchesPredicts) {
    let matchIndex = 0;
    for (const match of value.matches) {
      this.translateMatchToPredicts(value.user_predicts, matchIndex, match);
      matchIndex++;
    }
  }

  translateMatchToPredicts(userPredicts: UserPredictColumn[], matchIndex: number, match: Match) {
    const userPredictsTemp = userPredicts;
    for (const user of userPredictsTemp) {

      if (match.winner !== undefined) {
        this.addPoint(match.winner, user.teams_predictions[matchIndex], user);
      } else {
        user.states.push('O');
      }

      switch (user.teams_predictions[matchIndex]) {
        case 1: {
          user.teams_predictions[matchIndex] = match.team1;
          break;
        }
        case 2: {
          user.teams_predictions[matchIndex] = match.team2;
          break;
        }
      }
    }
    this.usersPredicts = userPredictsTemp;
  }

  addPoint(winner: number, teamChoised, user: UserPredictColumn) {
    if (teamChoised === winner) {
      user.pts++;
      user.states.push('O');
    } else {
      user.states.push('X');
    }
  }

}
