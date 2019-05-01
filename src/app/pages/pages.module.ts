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
import {TeamLogoPictureComponent} from './discord-fantasy/team-logo-picture/team-logo-picture.component';
import {UsersPredictsColumnComponent} from './discord-fantasy/users-predicts-column/users-predicts-column.component';
import {MatchesColumnComponent} from './discord-fantasy/matches-column/matches-column.component';
import {MatchComponent} from './discord-fantasy/match/match.component';
import { PredictTableComponent } from './discord-fantasy/predict-table/predict-table.component';

@NgModule({
  declarations: [LandingComponent,
    ThemeTestComponent,
    SignInComponent,
    AboutComponent,
    Msi2019Component,
    DiscordFantasyComponent,
    TeamLogoPictureComponent,
    UsersPredictsColumnComponent,
    MatchesColumnComponent,
    MatchComponent,
    PredictTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [LandingComponent]
})
export class PagesModule {
}
