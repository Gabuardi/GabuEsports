import {Component, OnInit} from '@angular/core';
import PlayInDay1 from 'src/assets/data/PlayInDay1.json';
import PlayInDay2 from 'src/assets/data/PlayInDay2.json';

@Component({
  selector: 'app-discord-fantasy',
  templateUrl: './discord-fantasy.component.html',
  styleUrls: ['./discord-fantasy.component.sass']
})
export class DiscordFantasyComponent implements OnInit {

  playInDay1 = PlayInDay1;
  playInDay2 = PlayInDay2;

  constructor() {
  }

  ngOnInit() {
  }

}
