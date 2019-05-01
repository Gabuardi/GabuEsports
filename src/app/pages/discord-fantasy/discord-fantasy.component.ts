import {Component, OnInit} from '@angular/core';
import PlayInDay1 from 'src/assets/data/PlayInDay1.json';

@Component({
  selector: 'app-discord-fantasy',
  templateUrl: './discord-fantasy.component.html',
  styleUrls: ['./discord-fantasy.component.sass']
})
export class DiscordFantasyComponent implements OnInit {

  playInDay1 = PlayInDay1;

  constructor() {
  }

  ngOnInit() {
  }

}
