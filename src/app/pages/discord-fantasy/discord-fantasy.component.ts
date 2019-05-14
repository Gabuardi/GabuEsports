import {Component, ViewChild} from '@angular/core';
import {RankingTableComponent} from './ranking-table/ranking-table.component';
import {MatDialog} from '@angular/material';
import {FormsDialogComponent} from './forms-dialog/forms-dialog.component';
import {PlayInData} from '../../interfaces/play-in-data';
import {GroupsData} from '../../interfaces/groups-data';

import PlayInDay1 from 'src/assets/data/PlayInDay1.json';
import PlayInDay2 from 'src/assets/data/PlayInDay2.json';
import PlayInDay3 from 'src/assets/data/PlayInDay3.json';
import KnockoutPlayInDay1 from 'src/assets/data/KnockoutPlayInDay1.json';
import GroupsDay1 from 'src/assets/data/GroupsDay1.json';
import GroupsDay2 from 'src/assets/data/GroupsDay2.json';
import GroupsDay3 from 'src/assets/data/GroupsDay3.json';
import GroupsDay4 from 'src/assets/data/GroupsDay4.json';
import GroupsDay5 from 'src/assets/data/GroupsDay5.json';


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
  groupsData: GroupsData;
  // VIEW CHILDREN
  @ViewChild(RankingTableComponent) rankingTableComponent: RankingTableComponent;

  constructor(public dialog: MatDialog) {
    this.toggleStageView(1, 'groups');
    this.setPlayInData();
    this.setGroupsData();
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
  // SET -> THE VARIABLE GROUPS DATA
  setGroupsData() {
    this.groupsData = {
      day1: GroupsDay1,
      day2: GroupsDay2,
      day3: GroupsDay3,
      day4: GroupsDay4,
      day5: GroupsDay5
    };
  }

  // -----------------------------------------------------------------------------------
  // METHOD -> OPEN THE FORMS DIALOG
  openFormDialog(): void {
    this.dialog.open(FormsDialogComponent, {width: '350px'});
  }

  // METHOD -> ADD USERS WITH POINTS TO RANK DATA
  rankPoints(value) {
    this.rankingTableComponent.addRankUsers(value);
  }

  // METHOD -> TOGGLE THE STAGE THAT APPEAR IN THE SCREEN (Play-IN | Groups | Knockouts)
  toggleStageView(index: number, stageName: string): void {
    this.stageViewControl = [false, false, false];
    this.stageViewControl[index] = true;
    this.stageSelection = stageName;
  }

} // COMPONENT ENDS
