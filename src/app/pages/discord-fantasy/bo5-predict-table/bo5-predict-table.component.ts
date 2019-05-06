import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Match} from '../../../interfaces/match';
import {UserPredictColumn} from '../../../interfaces/user-predict-column';
import {MatchesPredicts} from '../../../interfaces/matches-predicts';

@Component({
  selector: 'app-bo5-predict-table',
  templateUrl: './bo5-predict-table.component.html',
  styleUrls: ['./bo5-predict-table.component.sass']
})
export class Bo5PredictTableComponent implements AfterContentInit {

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
        this.addPoint(match.winner, matchIndex, user, this.getMatchScore(match));
      } else {
        user.states.push('-');
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

  addPoint(winner: number, matchIndex: number, user: UserPredictColumn, matchScore: string) {
    if (user.teams_predictions[matchIndex] === winner) {
      user.pts++;
      if (user.score_predictions[matchIndex] === matchScore) {
        user.pts++;
        user.states.push('O');
      } else {
        user.states.push('-');
      }
    } else {
      user.states.push('X');
    }
  }

  getMatchScore(match: Match) {
    if (match.winner === 1) {
      return `${match.team1score} - ${match.team2score}`;
    } else {
      return `${match.team2score} - ${match.team1score}`;
    }
  }

}
