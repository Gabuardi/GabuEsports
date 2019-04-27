import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MaterialModule} from '../libraries-modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SidenavListComponent} from './sidenav-list/sidenav-list.component';
import { FooterComponent } from './footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFontAwesomeModule} from '../libraries-modules/font-awesome/angular-font-awesome.module';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, SidenavListComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FontAwesomeModule,
    AngularFontAwesomeModule
  ],
  exports: [HeaderComponent, SidenavListComponent, FooterComponent]
})
export class GlobalModule {
}
