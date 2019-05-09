import {Component, ViewChild} from '@angular/core';
import PlayInDay1 from 'src/assets/data/PlayInDay1.json';
import PlayInDay2 from 'src/assets/data/PlayInDay2.json';
import PlayInDay3 from 'src/assets/data/PlayInDay3.json';
import KnockoutPlayInDay1 from 'src/assets/data/KnockoutPlayInDay1.json';

import {RankingTableComponent} from './ranking-table/ranking-table.component';
import {UserPredictColumn} from '../../interfaces/user-predict-column';
import {MatDialog} from "@angular/material";
import {FormsDialogComponent} from "./forms-dialog/forms-dialog.component";

@Component({
  selector: 'app-discord-fantasy',
  templateUrl: './discord-fantasy.component.html',
  styleUrls: ['./discord-fantasy.component.sass']
})
export class DiscordFantasyComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  playInDay1 = PlayInDay1;
  playInDay2 = PlayInDay2;
  playInDay3 = PlayInDay3;
  knockoutPlayInDay1 = KnockoutPlayInDay1;
  // VIEWCHILDS
  @ViewChild(RankingTableComponent) rankingTableComponent: RankingTableComponent;

  constructor(public dialog: MatDialog) {
  }

  // -----------------------------------------------------------------------------------
  // METHOD -> RECEIVE A USER PREDICTS OF A DAY AND ADD THEM TO THE RANK OR SUM HIS POINTS
  rankPoints(value: UserPredictColumn[]): void {
    this.rankingTableComponent.addRankUsers(value);
  }

  // -----------------------------------------------------------------------------------
  // METHOD -> OPEN THE FORMS DIALOG
  openFormDialog(): void {
    this.dialog.open(FormsDialogComponent, {width: '250px'});
  }

} // COMPONENT ENDS
