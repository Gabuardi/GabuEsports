import {Component, OnInit, ViewChild} from '@angular/core';
import PlayInDay1 from 'src/assets/data/PlayInDay1.json';
import PlayInDay2 from 'src/assets/data/PlayInDay2.json';
import PlayInDay3 from 'src/assets/data/PlayInDay3.json';
import {RankingTableComponent} from './ranking-table/ranking-table.component';

@Component({
  selector: 'app-discord-fantasy',
  templateUrl: './discord-fantasy.component.html',
  styleUrls: ['./discord-fantasy.component.sass']
})
export class DiscordFantasyComponent {

  @ViewChild(RankingTableComponent) rankingTableComponent: RankingTableComponent;

  playInDay1 = PlayInDay1;
  playInDay2 = PlayInDay2;
  playInDay3 = PlayInDay3;

  rankPoints(value) {
    this.rankingTableComponent.addRankUsers(value);
  }

}
