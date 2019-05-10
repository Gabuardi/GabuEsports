import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMedium, faDiscord, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {
  faSignInAlt,
  faSignOutAlt,
  faTrophy,
  faHatWizard,
  faCalendarAlt,
  faCrown,
  faClipboard
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faMedium,
  faDiscord,
  faGithub,
  faTwitter,
  faSignInAlt,
  faSignOutAlt,
  faTrophy,
  faHatWizard,
  faCalendarAlt,
  faCrown,
  faClipboard
);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AngularFontAwesomeModule {
}
