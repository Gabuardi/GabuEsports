import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {MaterialModule} from '../modules/material/material.module';
import { ThemeTestComponent } from './theme-test/theme-test.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [LandingComponent, ThemeTestComponent, SignInComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [LandingComponent]
})
export class PagesModule {
}
