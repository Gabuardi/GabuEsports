import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing/landing.component';
import {MaterialModule} from '../libraries-modules/material/material.module';
import { ThemeTestComponent } from './theme-test/theme-test.component';

@NgModule({
  declarations: [LandingComponent, ThemeTestComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [LandingComponent]
})
export class PagesModule {
}
