import {Component} from '@angular/core';
import {UserPredictColumn} from '../../../interfaces/user-predict-column';
import {UserPoints} from '../../../interfaces/user-points';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.sass']
})
export class RankingTableComponent {

  // COMPONENT PROPERTIES -----------------------------
  usersPoints: UserPoints[] = [];

  // --------------------------------------------------------------------------------------
  // METHOD -> WITH A USERS LIST ADD TO usersPoints LIST OR SUM THEIR POINTS IF ALREADY EXIST
  addRankUsers(value: UserPredictColumn[]): void {
    for (const user of value) {
      const userInList: UserPoints = this.searchUser(user.user_name);
      if (userInList !== null) {
        userInList.pts += user.pts;
      } else {
        this.usersPoints.push({user_name: user.user_name, pts: user.pts});
      }
    }
    // SORT LIST
    this.usersPoints.sort((a, b) => (a.pts > b.pts) ? 1 : -1);
    this.usersPoints.reverse();
    this.tagRank();
  }

  // --------------------------------------------------------------------------------------
  // METHOD -> SEARCH AN USER IN userPredicts LIST, IF USER IS FOUND RETURN IT
  private searchUser(name: string): UserPoints {
    for (const user of this.usersPoints) {
      if (user.user_name === name) {
        return user;
      }
    }
    return null;
  }

  // --------------------------------------------------------------------------------------
  // METHOD -> COMPARE USER POINTS AND TAG A RANK
  tagRank(): void {
    let currentRank: number;
    let currentPoints: number;
    let first = true;
    for (const user of this.usersPoints) {
      if (first) {
        currentRank = 1;
        currentPoints = user.pts;
        first = false;
      } else {
        if (user.pts < currentPoints) {
          currentPoints = user.pts;
          currentRank++;
        }
      }
      user.rank = currentRank;
    }
  }

} // COMPONENT ENDS
