import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {MaterialModule} from '../modules/material/material.module';
import {ThemeTestComponent} from './theme-test/theme-test.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SignInComponent} from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AboutComponent} from './about/about.component';
import {Msi2019Component} from './msi2019/msi2019.component';
import {DiscordFantasyComponent} from './discord-fantasy/discord-fantasy.component';
// tslint:disable-next-line:max-line-length
import {TeamLogoPictureComponent} from './discord-fantasy/predicts-tables/users-predicts-column/team-logo-picture/team-logo-picture.component';
import {UsersPredictsColumnComponent} from './discord-fantasy/predicts-tables/users-predicts-column/users-predicts-column.component';
import {MatchesColumnComponent} from './discord-fantasy/predicts-tables/matches-column/matches-column.component';
import {MatchComponent} from './discord-fantasy/predicts-tables/matches-column/match/match.component';
import {PredictTableComponent} from './discord-fantasy/predicts-tables/predict-table/predict-table.component';
import {RankingTableComponent} from './discord-fantasy/ranking-table/ranking-table.component';
import {Bo5PredictTableComponent} from './discord-fantasy/predicts-tables/bo5-predict-table/bo5-predict-table.component';
import {SchedulesComponent} from './schedules/schedules.component';
import { FormsDialogComponent } from './discord-fantasy/forms-dialog/forms-dialog.component';
import { PlayInComponent } from './discord-fantasy/play-in/play-in.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { GroupsComponent } from './discord-fantasy/groups/groups.component';

@NgModule({
  declarations: [
    LandingComponent,
    ThemeTestComponent,
    SignInComponent,
    AboutComponent,
    Msi2019Component,
    DiscordFantasyComponent,
    TeamLogoPictureComponent,
    UsersPredictsColumnComponent,
    MatchesColumnComponent,
    MatchComponent,
    PredictTableComponent,
    RankingTableComponent,
    Bo5PredictTableComponent,
    SchedulesComponent,
    FormsDialogComponent,
    PlayInComponent,
    GroupsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [LandingComponent],
  entryComponents: [FormsDialogComponent]
})
export class PagesModule {
}
