import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-logo-picture',
  templateUrl: './team-logo-picture.component.html',
  styleUrls: ['./team-logo-picture.component.sass']
})
export class TeamLogoPictureComponent implements OnInit {

  @Input() teamState: string;
  teamLogoFileName: string;

  constructor() {
  }

  @Input()
  set teamAcronym(value) {
    switch (value) {
      case 'FB': {
        this.teamLogoFileName = '1907_fenerbahce_espor_logo';
        break;
      }
      case 'BMR': {
        this.teamLogoFileName = 'bombers_logo';
        break;
      }
      case 'ISG': {
        this.teamLogoFileName = 'isurus_gaming_logo';
        break;
      }
      case 'PVB': {
        this.teamLogoFileName = 'phong_vu_buffalo_logo';
        break;
      }
      case 'DFM': {
        this.teamLogoFileName = 'detonation_focusme_logo';
        break;
      }
      case 'INT': {
        this.teamLogoFileName = 'intz_esports_club_logo';
        break;
      }
      case 'MEG': {
        this.teamLogoFileName = 'mega_esports_logo';
        break;
      }
      case 'VEG': {
        this.teamLogoFileName = 'vega_squadron_logo';
        break;
      }
      case 'TL': {
        this.teamLogoFileName = 'team_liquid_logo';
        break;
      }
      case 'FW': {
        this.teamLogoFileName = 'flash_wolves_logo';
        break;
      }
      case 'G2': {
        this.teamLogoFileName = 'g2_esports_logo';
        break;
      }
      case 'SKT': {
        this.teamLogoFileName = 'sk_telecom_logo';
        break;
      }
      case 'IG': {
        this.teamLogoFileName = 'invictus_gaming_logo';
        break;
      }
    }
  }

  ngOnInit() {
  }

}
