import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-logo-picture',
  templateUrl: './team-logo-picture.component.html',
  styleUrls: ['./team-logo-picture.component.sass']
})
export class TeamLogoPictureComponent implements OnInit {

  teamLogoFileName: string;

  constructor() {
  }

  @Input()
  set teamAcronym(value) {
    switch (value) {
      case 'FB': {
        this.teamLogoFileName = '1907_fenerbahce_espor_logo.png';
        break;
      }
      case 'BMR': {
        this.teamLogoFileName = 'bombers_logo.png';
        break;
      }
      case 'ISG': {
        this.teamLogoFileName = 'isurus_gaming_logo.png';
        break;
      }
      case 'PVB': {
        this.teamLogoFileName = 'phong_vu_buffalo_logo.png';
        break;
      }
    }
  }

  ngOnInit() {
  }

}
