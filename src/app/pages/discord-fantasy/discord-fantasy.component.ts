import {Component, OnInit} from '@angular/core';
import {UserPredictColumn} from '../../interfaces/user-predict-column';
import {Match} from '../../interfaces/match';

@Component({
  selector: 'app-discord-fantasy',
  templateUrl: './discord-fantasy.component.html',
  styleUrls: ['./discord-fantasy.component.sass']
})
export class DiscordFantasyComponent implements OnInit {

  matchList: Match[] = [
    {team1: 'PVB', team2: 'BMR', winner: 1},
    {team1: 'FB', team2: 'ISG'},
    {team1: 'PVB', team2: 'ISG'},
    {team1: 'FB', team2: 'BMR'},
    {team1: 'BMR', team2: 'ISG'},
    {team1: 'FB', team2: 'PVB'},
    {team1: 'BMR', team2: 'PVB'},
    {team1: 'ISG', team2: 'FB'}
    ];

  dataTest: UserPredictColumn[] = [
    {user_name: 'Gabuardi', pts: 1, teams_predictions: ['PVB', 'FB', 'ISG', 'FB', 'ISG', 'FB', 'PVB', 'FB']},
    {user_name: 'Carlos', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'FB']},
    {user_name: 'Sembai', pts: 1, teams_predictions: ['PVB', 'ISG', 'ISG', 'FB', 'ISG', 'FB', 'PVB', 'ISG']},
    {user_name: 'Evangelyne', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'FB', 'PVB', 'FB']},
    {user_name: 'Grimo', pts: 1, teams_predictions: ['PVB', 'ISG', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'ISG']},
    {user_name: 'Spyke', pts: 1, teams_predictions: ['PVB', 'ISG', 'ISG', 'FB', 'ISG', 'FB', 'PVB', 'ISG']},
    {user_name: 'Dix', pts: 1, teams_predictions: ['PVB', 'ISG', 'ISG', 'FB', 'ISG', 'FB', 'PVB', 'ISG']},
    {user_name: 'Sywerk', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'ISG']},
    {user_name: 'TakRiuto', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'FB']},
    {user_name: 'Raledro', pts: 1, teams_predictions: ['PVB', 'ISG', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'ISG']},
    {user_name: 'Bosco', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'FB', 'PVB', 'FB']},
    {user_name: 'Sokk', pts: 1, teams_predictions: ['PVB', 'FB', 'ISG', 'FB', 'ISG', 'PVB', 'PVB', 'ISG']},
    {user_name: 'BSC Raxks', pts: 1, teams_predictions: ['PVB', 'ISG', 'ISG', 'FB', 'ISG', 'FB', 'PVB', 'ISG']},
    {user_name: 'Limoncito', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'ISG']},
    {user_name: 'Anzbeat', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'FB']},
    {user_name: 'Repollo', pts: 1, teams_predictions: ['PVB', 'ISG', 'ISG', 'FB', 'ISG', 'PVB', 'PVB', 'ISG']},
    {user_name: 'Fakon', pts: 1, teams_predictions: ['PVB', 'ISG', 'PVB', 'FB', 'ISG', 'FB', 'PVB', 'ISG']},
    {user_name: 'DARKING', pts: 0, teams_predictions: ['BMR', 'FB', 'ISG', 'FB', 'ISG', 'FB', 'PVB', 'FB']},
    {user_name: 'Jennifer', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'ISG']},
    {user_name: 'Demon', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'PVB', 'PVB', 'FB']},
    {user_name: 'Enryuuchan', pts: 1, teams_predictions: ['PVB', 'FB', 'PVB', 'FB', 'ISG', 'FB', 'PVB', 'FB']},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
