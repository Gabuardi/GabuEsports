import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {MaterialModule} from '../modules/material/material.module';
import { ThemeTestComponent } from './theme-test/theme-test.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SignInComponent } from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AboutComponent} from './about/about.component';
import { Msi2019Component } from './msi2019/msi2019.component';

@NgModule({
  declarations: [LandingComponent, ThemeTestComponent, SignInComponent, AboutComponent, Msi2019Component],
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
