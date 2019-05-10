import {Component, ViewChild} from '@angular/core';
import {RankingTableComponent} from './ranking-table/ranking-table.component';
import {UserPredictColumn} from '../../interfaces/user-predict-column';
import {MatDialog} from '@angular/material';
import {FormsDialogComponent} from './forms-dialog/forms-dialog.component';

import PlayInDay1 from 'src/assets/data/PlayInDay1.json';
import PlayInDay2 from 'src/assets/data/PlayInDay2.json';
import PlayInDay3 from 'src/assets/data/PlayInDay3.json';
import KnockoutPlayInDay1 from 'src/assets/data/KnockoutPlayInDay1.json';
import {PlayInData} from '../../interfaces/play-in-data';

@Component({
  selector: 'app-discord-fantasy',
  templateUrl: './discord-fantasy.component.html',
  styleUrls: ['./discord-fantasy.component.sass']
})
export class DiscordFantasyComponent {

  // COMPONENT PROPERTIES -------------------------------------------------------------
  stageViewControl: boolean[];
  stageSelection: string;
  playInData: PlayInData;
  // VIEW CHILDREN
  @ViewChild(RankingTableComponent) rankingTableComponent: RankingTableComponent;

  constructor(public dialog: MatDialog) {
    this.toggleStageView(1, 'groups');
    this.setPlayInData();
  }

  // -----------------------------------------------------------------------------------
  // SET -> THE VARIABLE PLAY IN DATA
  setPlayInData() {
    this.playInData = {
      day1: PlayInDay1,
      day2: PlayInDay2,
      day3: PlayInDay3,
      knockoutDay1: KnockoutPlayInDay1
    };
  }

  // -----------------------------------------------------------------------------------
  // METHOD -> OPEN THE FORMS DIALOG
  openFormDialog(): void {
    this.dialog.open(FormsDialogComponent, {width: '350px'});
  }

  toggleStageView(index: number, stageName: string): void {
    this.stageViewControl = [false, false, false];
    this.stageViewControl[index] = true;
    this.stageSelection = stageName;
  }

} // COMPONENT ENDS
