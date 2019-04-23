import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faMedium, faDiscord, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(faMedium, faDiscord, faGithub, faTwitter);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AngularFontAwesomeModule {
}
